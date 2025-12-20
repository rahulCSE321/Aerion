import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Product Sourcing",
    details: [
      "Requirement-based supplier identification",
      "Feasibility and suitability evaluation",
      "Sample coordination when required",
    ],
  },
  {
    title: "Supplier Communication & Coordination",
    details: [
      "Professional communication handling",
      "Clear requirement alignment",
      "Timeline and specification confirmation",
    ],
  },
  {
    title: "Quality & Documentation Support",
    details: [
      "Specification verification",
      "Documentation review",
      "Pre-dispatch readiness checks",
    ],
  },
  {
    title: "Order & Process Management",
    details: [
      "Continuous coordination between parties",
      "Timeline and progress monitoring",
      "Dispatch-stage support",
    ],
  },
  {
    title: "Custom Requirements",
    description: "Have a unique or non-standard product need? We manage tailored sourcing and specialized searches.",
    details: [],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-16 lg:py-24 bg-secondary/30 border-b border-border">
        <div className="container-narrow text-center">
          <div className="w-12 h-px bg-accent mx-auto mb-6"></div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-primary mb-6">
            Our Solutions
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-wide">
          <div className="space-y-10 lg:space-y-12 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 lg:p-10 bg-card border border-border"
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-sm text-accent font-medium tracking-wider">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-medium text-primary">
                    {service.title}
                  </h2>
                </div>
                
                {service.description && (
                  <p className="text-muted-foreground leading-relaxed mb-6 ml-10">
                    {service.description}
                  </p>
                )}
                
                {service.details.length > 0 && (
                  <ul className="space-y-3 ml-10">
                    {service.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-secondary/30 border-t border-border">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-6">
            Ready to Discuss Your Requirements?
          </h2>
          <Button variant="elegant" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
