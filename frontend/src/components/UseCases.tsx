import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, BarChart3, Building2, Rocket } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Users,
      title: "Sales Teams",
      subtitle: "Perfect notes & deal insights",
      description: "Automatically capture every customer interaction, generate intelligent meeting summaries, and surface deal insights that drive revenue growth.",
      benefits: ["Auto-capture all touchpoints", "AI-generated meeting notes", "Deal progression insights"]
    },
    {
      icon: BarChart3,
      title: "RevOps",
      subtitle: "Clean, reliable pipeline data", 
      description: "Ensure data quality across your entire revenue operations with automated cleansing, enrichment, and real-time pipeline visibility.",
      benefits: ["Clean pipeline data", "Revenue forecasting", "Automated reporting"]
    },
    {
      icon: Building2,
      title: "Asset Managers",
      subtitle: "Track every client interaction automatically",
      description: "Maintain comprehensive client relationship records with automated interaction tracking and compliance-ready audit trails.",
      benefits: ["Complete audit trails", "Compliance ready", "Client relationship mapping"]
    },
    {
      icon: Rocket,
      title: "Startups",
      subtitle: "Scale without admin overhead", 
      description: "Focus on growth while NextEdge handles your CRM hygiene. Scale your sales operations without adding administrative burden.",
      benefits: ["Zero admin overhead", "Instant setup", "Scales with growth"]
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-body text-center space-y-4">
          <h2 className="reveal text-4xl font-semibold tracking-tight md:text-5xl">Who It's For</h2>
          <p className="reveal text-muted">NextEdge adapts to your team's unique needs and workflow</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <Card
                key={useCase.title}
                className="reveal h-full"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-pill bg-primary/15 text-primary">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-text">{useCase.title}</CardTitle>
                      <p className="text-sm font-medium text-primary">{useCase.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="mt-6 space-y-6">
                  <p className="text-sm leading-relaxed text-muted">{useCase.description}</p>

                  <div className="space-y-2 text-left">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3 text-sm text-text">
                        <span className="flex h-2 w-2 items-center justify-center rounded-full bg-accent" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;