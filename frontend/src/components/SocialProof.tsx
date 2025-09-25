import React from "react";

const SocialProof = () => {
  const logos = [
    "Onyx", "Fern", "Cartage", "Zentura", "Axiom", "Pulse"
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid-accent opacity-40" />

      <div className="container relative text-center">
        <p className="reveal mx-auto max-w-body text-sm font-semibold uppercase tracking-[0.28em] text-muted">
          Trusted by leading teams and backed by industry leaders
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-6">
          {logos.map((logo, index) => (
            <div
              key={logo}
              className="reveal surface-card flex h-20 items-center justify-center rounded-card border border-border/60 text-lg font-semibold text-muted transition duration-hover ease-fluid hover:border-primary/60 hover:text-text"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;