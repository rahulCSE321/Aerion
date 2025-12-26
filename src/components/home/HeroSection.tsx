import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/hero.avif")`,
          opacity: 0.5,
        }}
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative Line */}
          <div className="w-16 h-px bg-white/80 mx-auto mb-8 animate-fade-in"></div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 animate-fade-in-up leading-tight">
            Aerion Excellence.
            <br />
            <span className="text-blue-300">Work Smarter. Effort Less.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 animate-fade-in-delay max-w-2xl mx-auto">
            Reliable sourcing and coordination support designed to simplify complex supply requirements. We help businesses connect with the right products, manage processes efficiently, and move forward with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay">
            <Button variant="hero" asChild>
              <Link to="/contact">Share Your Requirements</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/services">Get Started</Link>
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="mt-16 pt-8 border-t border-white/20 animate-fade-in-delay">
            <p className="text-sm text-white/70 tracking-widest uppercase">
              Trusted Partner for Professional Coordination
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
