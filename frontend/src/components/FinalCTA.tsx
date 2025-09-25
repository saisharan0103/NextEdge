import React from "react";
import { Button } from "./ui/button-enhanced";
import { ArrowRight, CheckCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-cta-radial" />
      <div className="container text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="reveal text-[clamp(36px,5vw,64px)] font-semibold tracking-tight text-text">
            Ready to automate your CRM?
          </h2>

          <p className="reveal text-lg text-muted md:text-xl">Save hours every week with perfect CRM hygiene</p>

          <div className="reveal flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="xl" className="btn-primary px-10">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="reveal flex flex-col items-center justify-center gap-6 text-sm text-muted sm:flex-row">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Free setup & training</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>No long-term commitment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;