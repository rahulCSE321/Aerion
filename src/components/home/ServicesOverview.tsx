import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ServicesOverview() {
  const services = [
    {
      title: "Product Sourcing",
      description: "Identification and evaluation of suitable options based on quality, scale, and feasibility.",
    },
    {
      title: "Supplier Coordination",
      description: "Clear communication, confirmations, and alignment — without back-and-forth.",
    },
    {
      title: "Quality & Documentation Support",
      description: "Specification checks, documentation review, and readiness confirmation.",
    },
    {
      title: "Process & Dispatch Coordination",
      description: "Timeline monitoring and structured handling until completion.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="w-12 h-px bg-accent mx-auto mb-6"></div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
            Our End-to-End Sourcing & Coordination Support
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We manage the complete coordination process so you don't have to.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-background border border-border hover:shadow-elegant transition-all duration-300"
            >
              <h3 className="font-serif text-xl font-medium text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="elegant-outline" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
