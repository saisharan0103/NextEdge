import React from "react";
import { Card, CardContent } from "./ui/card";
import { Target, Sparkles, RefreshCw, Shield } from "lucide-react";

const ValuePillars = () => {
  const pillars = [
    {
      icon: Target,
      title: "Capture",
      description: "Auto-capture every touchpoint",
      details: "Never miss an important interaction. Our AI automatically captures emails, calls, meetings, and notes from all your communication channels."
    },
    {
      icon: Sparkles,
      title: "Clean", 
      description: "Remove duplicates & enrich contacts",
      details: "AI-powered data cleansing removes duplicates, fills in missing information, and enriches contact profiles with accurate, up-to-date data."
    },
    {
      icon: RefreshCw,
      title: "Sync",
      description: "Push perfect data into your CRM", 
      details: "Seamlessly sync clean, enriched data directly into your CRM with smart field mapping and real-time updates."
    },
    {
      icon: Shield,
      title: "Governance",
      description: "Stay compliant with fields, audit trail, and mapping",
      details: "Enterprise-grade compliance with custom field validation, complete audit trails, and flexible data mapping rules."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-body text-center space-y-4">
          <h2 className="reveal text-4xl font-semibold tracking-tight md:text-5xl">Why NextEdge</h2>
          <p className="reveal text-muted">
            Four pillars of perfect CRM hygiene, powered by enterprise AI
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <Card
                key={pillar.title}
                className="reveal h-full"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-pill bg-primary/15 text-primary">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-text">{pillar.title}</h3>
                    <p className="text-sm font-medium text-primary">{pillar.description}</p>
                    <p className="text-sm leading-relaxed text-muted">{pillar.details}</p>
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

export default ValuePillars;