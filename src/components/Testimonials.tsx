
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
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cosmic-card p-6 rounded-lg">
              <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${testimonial.avatar}`}></div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
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
