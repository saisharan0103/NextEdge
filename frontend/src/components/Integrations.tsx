import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button-enhanced";
import { ArrowRight, Mail, Calendar, MessageSquare, Database } from "lucide-react";

const Integrations = () => {
  const integrations = [
    { name: "Gmail", icon: Mail, category: "Email" },
    { name: "Outlook", icon: Mail, category: "Email" },
    { name: "Slack", icon: MessageSquare, category: "Communication" },
    { name: "Teams", icon: MessageSquare, category: "Communication" },
    { name: "HubSpot", icon: Database, category: "CRM" },
    { name: "Salesforce", icon: Database, category: "CRM" },
    { name: "Zoom", icon: Calendar, category: "Meetings" },
    { name: "Google Cal", icon: Calendar, category: "Calendar" },
  ];

  return (
    <section className="section-padding" id="integrations">
      <div className="container">
        <div className="mx-auto max-w-body text-center space-y-4">
          <h2 className="reveal text-4xl font-semibold tracking-tight md:text-5xl">
            Connect NextEdge to the tools you already use
          </h2>
          <p className="reveal text-muted">Seamless integrations with your existing workflow</p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
          {integrations.map((integration, index) => {
            const IconComponent = integration.icon;
            return (
              <Card
                key={integration.name}
                className="reveal aspect-square"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <CardContent className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-pill bg-primary/15 text-primary">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-semibold text-text">{integration.name}</div>
                  <div className="text-xs uppercase tracking-[0.28em] text-muted">{integration.category}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 space-y-4 text-center">
          <p className="reveal text-muted">Plus 50+ more integrations available</p>
          <div className="reveal" style={{ transitionDelay: "120ms" }}>
            <Button variant="outline" size="lg" className="px-8">
            View All Integrations
            <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;