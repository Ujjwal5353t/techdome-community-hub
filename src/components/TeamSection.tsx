import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState } from 'react';
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  sendToBackOnClick?: boolean;
  cardsData?: { id: number; img: string; name: string; role: string; linkedin: string }[];
  animationConfig?: { stiffness: number; damping: number };
}

function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 256, height: 320 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}: StackProps) {
  const [cards, setCards] = useState(cardsData);

  const sendToBack = (id: number) => {
    setCards(prev => {
      const newCards = [...prev];
      const index = newCards.findIndex(card => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.push(card);
      return newCards;
    });
  };

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600
      }}
    >
      {[...cards].reverse().map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardRotate key={card.id} onSendToBack={() => sendToBack(card.id)} sensitivity={sensitivity}>
            <motion.div
              className="rounded-2xl overflow-hidden border-4 border-primary/60 bg-card/80 backdrop-blur-sm"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.04 - cards.length * 0.04,
                transformOrigin: '90% 90%'
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/80 mb-4">
                  <img src={card.img} alt={card.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg mb-1">{card.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">{card.role}</p>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  <a href={card.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-3 h-3 mr-1" />
                    Connect
                  </a>
                </Button>
              </div>
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}

const TeamSection = () => {
  const team = [
    {
      id: 1,
      name: "Vivek Mathur",
      role: "Community Lead",
      img: "/vivek.jpeg",
      linkedin: "https://www.linkedin.com/in/vivek-mathur9310/",
    },
    {
      id: 2,
      name: "Pratham Jain",
      role: "Technical Director",
      img: "/pratham.jpeg",
      linkedin: "https://www.linkedin.com/in/pratham-jain-dev/",
    },
    {
      id: 3,
      name: "Ujjwal Yadav",
      role: "Event Coordinator",
      img: "/ujjwal.jpg",
      linkedin: "https://www.linkedin.com/m/in/-uyadav",
    },
    {
      id: 4,
      name: "Pushpdeep Saini",
      role: "Design Lead",
      img: "/pushpdeep.jpeg",
      linkedin: "https://www.linkedin.com/in/pushpdeep-saini-3528a9263/",
    },
    {
      id: 5,
      name: "Vaibhav Chaturvedi",
      role: "Logistics & operation",
      img: "/vaibhav.jpeg",
      linkedin: "https://www.linkedin.com/in/vaibhav-chaturvedi-5772b0333/"
    }
  ];

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient uppercase tracking-wider">
            Meet The Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate individuals dedicated to building an amazing tech community.
          </p>
        </div>

        {/* Card Stack */}
        <div className="flex items-center justify-center min-h-[400px]">
          <Stack 
            cardsData={team}
            cardDimensions={{ width: 256, height: 320 }}
            sensitivity={200}
            randomRotation={true}
            animationConfig={{ stiffness: 260, damping: 20 }}
            sendToBackOnClick={true}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
