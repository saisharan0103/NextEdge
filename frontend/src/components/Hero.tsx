import { useEffect, useRef } from "react";
import { Button } from "./ui/button-enhanced";
import { ArrowRight, Play } from "lucide-react";
import { floatY } from "@/lib/motion";

const Hero = () => {
  const stats = [
    { number: "10M+", label: "Activities Captured" },
    { number: "2.5M+", label: "Records Enriched" },
    { number: "500K+", label: "Dupes Fixed" }
  ];
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const stop = floatY(element, 8, 7000);

    return () => {
      stop();
      element.style.transform = "";
    };
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero-radial" />

      <div className="container relative z-10 flex flex-col items-center text-center gap-12">
        <div className="max-w-heading text-balance space-y-6">
          <h1 className="reveal text-[clamp(40px,6vw,72px)] font-bold tracking-tight">
            <span className="text-text">AI that updates your CRM for you,</span>
            <br />
            <span className="text-primary">perfectly.</span>
          </h1>
        </div>

        <p className="reveal max-w-body text-lg text-muted md:text-xl">
          Auto-capture every email, meeting, and note — then sync clean, enriched data into your CRM.
        </p>

        <div className="reveal flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="primary" size="xl" className="btn-primary px-10">
            Book a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="xl" className="px-10">
            <Play className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>

        {/* Stats Cards */}
        <div ref={statsRef} className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="reveal surface-card shadow-card-strong p-6 text-left"

              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="text-3xl font-semibold text-primary">{stat.number}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.24em] text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;