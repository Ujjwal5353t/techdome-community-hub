const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const mongoURI = process.env.MONGO_URI;

// Enable CORS FIRST (preflight)
app.options(/.*/, cors());

// CORS allowed domains
const allowedOrigins = [
  "https://www.techdome.online",
  "https://techdome.online",
  "https://techdome-official.onrender.com",
  "http://localhost:5173"
];

// Main CORS middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("❌ Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// JSON parser — MUST COME AFTER CORS
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("TechDome Backend Running");
});

// MongoDB connect
if (!mongoURI) {
    console.warn('Warning: MONGO_URI not set in .env. Mongo connect will likely fail.');
}

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

const User = require('./models/userInfo');

// Contact form route
app.post('/api/contact', async (req, res) => {
    console.log('POST /api/contact body:', req.body);
    try {
        const { name, email, message, subject } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const user = new User({ name, email, message, subject });
        await user.save();
        return res.status(201).json({ message: 'Contact saved' });
    } catch (err) {
        console.error('Error saving contact:', err);
        if (err && err.code === 11000) {
            return res.status(409).json({ error: 'Duplicate entry' });
        }
        const resp = { error: 'Server error' };
        if (process.env.NODE_ENV !== 'production' && err && err.message) {
            resp.details = err.message;
        }
        return res.status(500).json(resp);
    }
});

// Start server
const httpServer = http.createServer(app);
httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
