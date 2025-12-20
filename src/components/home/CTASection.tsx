import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-card border-t border-b border-border">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-px bg-accent mx-auto mb-8"></div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
            Ready to Simplify Your Process?
          </h2>
          
          <p className="text-muted-foreground leading-relaxed mb-10">
            Tell us what you need — we'll take it from there.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="elegant" size="lg" asChild>
              <Link to="/contact">Share Your Requirements</Link>
            </Button>
            <Button variant="elegant-outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
