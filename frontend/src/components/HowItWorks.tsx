import React from "react";
import { Card, CardContent } from "./ui/card";
import { Database, Zap, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Database,
      title: "Connect Your Data Sources",
      description: "Integrate email, calendar, calls, and CRM in minutes.",
    },
    {
      number: "02", 
      icon: Zap,
      title: "AI Agents Capture & Enrich",
      description: "Every interaction is analyzed and synced with full context.",
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Perfect CRM Hygiene",
      description: "Always complete, accurate, and up-to-date records.",
    }
  ];

  return (
    <section className="section-padding" id="product">
      <div className="container">
        <div className="mx-auto max-w-body text-center space-y-4">
          <h2 className="reveal text-4xl font-semibold tracking-tight md:text-5xl">How It Works</h2>
          <p className="reveal text-muted">
            Three simple steps to transform your CRM data quality forever
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card
                key={step.number}
                className="reveal h-full"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <CardContent className="flex h-full flex-col items-center gap-6 p-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-pill bg-primary/15 text-primary">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-xs font-mono tracking-[0.32em] text-muted">STEP {step.number}</div>
                  <h3 className="text-xl font-semibold text-text">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;