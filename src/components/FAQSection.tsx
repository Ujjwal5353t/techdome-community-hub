import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is TechDome?",
      answer: "TechDome is a vibrant tech community that brings together developers, designers, and tech enthusiasts to learn, collaborate, and innovate together.",
    },
    {
      question: "How can I join TechDome?",
      answer: "You can join by attending our events, signing up for our newsletter, or joining our online community platforms. All skill levels are welcome!",
    },
    {
      question: "Are events free?",
      answer: "Most of our events are free for community members. Some specialized workshops may have a nominal fee to cover materials and resources.",
    },
    {
      question: "Do I need to be a student?",
      answer: "Not at all! TechDome welcomes professionals, students, hobbyists, and anyone interested in technology regardless of their background.",
    },
    {
      question: "How often do you organize events?",
      answer: "We organize various events throughout the year including monthly meetups, quarterly hackathons, and weekly study groups.",
    },
  ];

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
