
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Our payment processing efficiency increased by 40% and transaction failures dropped to near zero. The automation features are game-changing.",
      author: "Sarah Johnson",
      position: "CFO at TechCorp",
      avatar: "bg-cosmic-light/30"
    },
    {
      quote: "The real-time analytics and fraud detection capabilities have saved us millions. We can spot issues before they become problems.",
      author: "Michael Chen",
      position: "Head of Risk at FinanceFlow",
      avatar: "bg-cosmic-light/20"
    },
    {
      quote: "Compliance used to be a nightmare. Now our regulatory reporting is automated and we're always audit-ready.",
      author: "Leila Rodriguez",
      position: "Operations Director at GlobalPay",
      avatar: "bg-cosmic-light/40"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how leading companies are transforming their financial operations with our platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <blockquote className="text-foreground mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${testimonial.avatar}`} />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
