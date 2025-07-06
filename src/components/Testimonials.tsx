
import React from 'react';

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
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading financial institutions worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="mb-4">
                <svg className="w-8 h-8 text-primary/60" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v8c0 1.1.9 2 2 2h4v4c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2zm12 0v8c0 1.1.9 2 2 2h4v4c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2z"/>
                </svg>
              </div>
              <blockquote className="text-foreground mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full ${testimonial.avatar} mr-4`}></div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
