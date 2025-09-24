import React from "react";
import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "NextEdge saves us 10+ hours per rep each week — with cleaner CRM data than ever before.",
      name: "Sarah Chen",
      role: "COO",
      company: "Altai Capital",
      rating: 5
    },
    {
      quote: "Seamlessly aggregates info, transforming our workflows.",
      name: "Marcus Rodriguez", 
      role: "Director",
      company: "ContextLogic",
      rating: 5
    },
    {
      quote: "Perfect CRM hygiene without manual effort.",
      name: "Jennifer Walsh",
      role: "CEO",
      company: "Onyx AI",
      rating: 5
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-body text-center space-y-4">
          <h2 className="reveal text-4xl font-semibold tracking-tight md:text-5xl">Loved by Sales Leaders</h2>
          <p className="reveal text-muted">See what our customers say about NextEdge</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="reveal h-full"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <CardContent className="flex h-full flex-col gap-6 p-8">
                <div className="flex items-center justify-between text-primary">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>

                <blockquote className="text-left text-lg leading-relaxed text-text">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-auto space-y-1 border-t border-border/60 pt-4 text-left">
                  <div className="text-base font-semibold text-text">{testimonial.name}</div>
                  <div className="text-sm font-medium text-primary">{testimonial.role}</div>
                  <div className="text-sm text-muted">{testimonial.company}</div>
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