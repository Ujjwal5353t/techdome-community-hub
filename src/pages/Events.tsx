import { Calendar, MapPin, Users, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import GridBackground from "@/components/GridBackground";
import Footer from "@/components/Footer";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "DarkCode Rising - Hackathon 2024",
      date: "December 15-17, 2024",
      time: "48 Hours",
      location: "TechDome HQ",
      attendees: 200,
      description: "Join us for our biggest hackathon of the year! Code, collaborate, and compete for amazing prizes.",
      featured: true,
      image: "💻",
    },
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      date: "November 25, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Online",
      attendees: 150,
      description: "Hands-on workshop covering the fundamentals of AI and ML with practical projects.",
      featured: false,
      image: "🤖",
    },
    {
      id: 3,
      title: "Web3 & Blockchain Meetup",
      date: "December 5, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Innovation Hub",
      attendees: 80,
      description: "Explore the future of decentralized technology with industry experts.",
      featured: false,
      image: "⛓️",
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "TechTalks: Cloud Computing",
      date: "October 20, 2024",
      attendees: 120,
      image: "☁️",
    },
    {
      id: 2,
      title: "Cybersecurity Workshop",
      date: "September 15, 2024",
      attendees: 95,
      image: "🔒",
    },
    {
      id: 3,
      title: "Mobile App Dev Bootcamp",
      date: "August 10, 2024",
      attendees: 180,
      image: "📱",
    },
    {
      id: 4,
      title: "Data Science Summit",
      date: "July 5, 2024",
      attendees: 200,
      image: "📊",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <GridBackground />
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="text-gradient">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us for workshops, hackathons, and meetups that inspire innovation.
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
              <div className="h-1 flex-1 ml-8 bg-gradient-to-r from-primary via-secondary to-transparent rounded" />
            </div>

            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className={`group p-8 rounded-xl border transition-all duration-300 hover:card-glow ${
                    event.featured
                      ? "bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent border-primary/50"
                      : "bg-card border-border hover:border-primary/50"
                  }`}
                >
                  <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-start">
                    <div className="text-6xl animate-float">{event.image}</div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          {event.featured && (
                            <div className="flex items-center space-x-2 mb-2">
                              <Star className="h-4 w-4 text-primary fill-primary" />
                              <span className="text-xs font-semibold text-primary uppercase">Featured Event</span>
                            </div>
                          )}
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground">{event.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{event.attendees} Attendees</span>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Register Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Past Events</h2>
              <div className="h-1 flex-1 ml-8 bg-gradient-to-r from-muted via-muted-foreground/20 to-transparent rounded" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:card-glow text-center"
                >
                  <div className="text-5xl mb-4 animate-float">{event.image}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{event.date}</p>
                  <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{event.attendees} Attended</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
