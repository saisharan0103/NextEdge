import React from "react";
import { Card, CardContent } from "./ui/card";
import { Shield, Lock, UserCheck, FileX, Award } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Data Never Used for Model Training",
      description: "Your sensitive business data stays private and is never used to train our AI models."
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption."
    },
    {
      icon: UserCheck,
      title: "RBAC Permissions",
      description: "Role-based access controls ensure only authorized team members can access specific data."
    },
    {
      icon: FileX,
      title: "Deletion Policy",
      description: "Complete data deletion on demand with verified removal from all systems and backups."
    },
    {
      icon: Award,
      title: "SOC2 Roadmap",
      description: "Currently pursuing SOC2 Type II certification to meet enterprise compliance standards."
    }
  ];

  return (
    <section className="section-padding" id="security">
      <div className="container">
        <div className="mx-auto max-w-body text-center space-y-4">
          <h2 className="reveal text-4xl font-semibold tracking-tight md:text-5xl">
            Enterprise-grade security and reliability
          </h2>
          <p className="reveal text-muted">Your data security and privacy are our top priorities</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={feature.title}
                className="reveal h-full"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <CardContent className="flex h-full flex-col items-center gap-4 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-pill bg-accent/20 text-accent">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-text">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-pill border border-border/60 bg-surface/60 px-5 py-2 text-sm font-medium text-text" style={{ transitionDelay: "160ms" }}>
            <Shield className="h-4 w-4 text-accent" />
            Enterprise Security & Compliance Ready
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;