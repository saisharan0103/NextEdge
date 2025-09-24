import React from "react";
import { Button } from "./ui/button-enhanced";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/75">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/lovable-uploads/adc57d85-0a2e-43b2-91d1-45cf3e175ec3.png"
            alt="NEXTEDGE"
            className="h-8 w-auto drop-shadow-[0_6px_18px_rgba(91,140,255,0.25)]"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          <a href="#product" className="text-sm font-medium text-muted transition duration-hover ease-fluid hover:text-text">
            Product
          </a>
          <a href="#integrations" className="text-sm font-medium text-muted transition duration-hover ease-fluid hover:text-text">
            Integrations
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted transition duration-hover ease-fluid hover:text-text">
            Pricing
          </a>
          <a href="#security" className="text-sm font-medium text-muted transition duration-hover ease-fluid hover:text-text">
            Security
          </a>
          <a href="#contact" className="text-sm font-medium text-muted transition duration-hover ease-fluid hover:text-text">
            Contact
          </a>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center space-x-3 md:flex">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="nav" size="sm">
                Login
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant="outline" size="sm" className="rounded-pill px-6">
                Sign Up
              </Button>
            </SignUpButton>
            <Button variant="primary" size="sm" className="btn-primary px-6">
              Book a Demo
            </Button>
          </SignedOut>
          <SignedIn>
            <Button variant="primary" size="sm" className="btn-primary px-6">
              Book a Demo
            </Button>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="rounded-button p-2 text-muted transition duration-hover ease-fluid hover:text-text md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border/60 bg-bg/95 backdrop-blur md:hidden">
          <nav className="container space-y-4 py-4">
            <a href="#product" className="block text-sm font-medium text-muted transition duration-hover ease-fluid hover:text-text">
              Product
            </a>
            <a href="#integrations" className="block text-sm font-medium text-muted transition duration-hover ease-fluid hover:text-text">
              Integrations
            </a>
            <a href="#pricing" className="block text-sm font-medium text-muted transition duration-hover ease-fluid hover:text-text">
              Pricing
            </a>
            <a href="#security" className="block text-sm font-medium text-muted transition duration-hover ease-fluid hover:text-text">
              Security
            </a>
            <a href="#contact" className="block text-sm font-medium text-muted transition duration-hover ease-fluid hover:text-text">
              Contact
            </a>
            <div className="flex flex-col space-y-3 border-t border-border/60 pt-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="nav" size="sm">
                    Login
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button variant="outline" size="sm" className="rounded-pill">
                    Sign Up
                  </Button>
                </SignUpButton>
                <Button variant="primary" size="sm" className="btn-primary">
                  Book a Demo
                </Button>
              </SignedOut>
              <SignedIn>
                <Button variant="primary" size="sm" className="btn-primary">
                  Book a Demo
                </Button>
                <div className="flex items-center">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;