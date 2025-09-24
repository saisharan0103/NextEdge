import React from "react";
import { Separator } from "./ui/separator";
import { Linkedin, Twitter, Instagram, Youtube, Facebook, Github } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: ["Product", "Integrations", "Pricing", "Security"],
    legal: ["Contact", "Privacy Policy", "Terms"],
  };
  const socials = [
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Twitter, label: "Twitter" },
    { icon: Instagram, label: "Instagram" },
    { icon: Youtube, label: "YouTube" },
    { icon: Facebook, label: "Facebook" },
    { icon: Github, label: "GitHub" },
  ];

  return (
    <footer className="border-t border-border/60 bg-surface/60 text-muted">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="reveal md:col-span-2 space-y-3">
            <div className="text-2xl font-semibold text-text">NextEdge</div>
            <p className="text-sm text-muted">CRM that works, without the work</p>
          </div>

          {/* Links */}
          <div className="reveal space-y-3" style={{ transitionDelay: "80ms" }}>
            <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">Product</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.product.map((link) => (
                <li key={link}>
                  <a href="#" className="transition duration-hover ease-fluid hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal space-y-3" style={{ transitionDelay: "160ms" }}>
            <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">Legal</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="transition duration-hover ease-fluid hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="reveal flex flex-col items-center justify-between gap-6 text-sm text-muted md:flex-row" style={{ transitionDelay: "240ms" }}>
          <div>© 2025 NextEdge. All rights reserved.</div>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, label }, index) => (
              <a
                key={label}
                href="#"
                className="reveal transition duration-hover ease-fluid hover:text-primary"
                style={{ transitionDelay: `${300 + index * 40}ms` }}
              >
                <span className="sr-only">{label}</span>
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;