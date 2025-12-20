import { Layout } from "@/components/layout/Layout";

const About = () => {
  const values = [
    {
      title: "Integrity",
      description: "Responsible and ethical operations",
    },
    {
      title: "Quality",
      description: "Consistent standards and verification",
    },
    {
      title: "Efficiency",
      description: "Structured coordination and timelines",
    },
    {
      title: "Confidentiality",
      description: "Protecting client and supplier information",
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-16 lg:py-24 bg-secondary/30 border-b border-border">
        <div className="container-narrow text-center">
          <div className="w-12 h-px bg-accent mx-auto mb-6"></div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-primary mb-6">
            About Us
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-narrow">
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Aerion Excellence is a professional sourcing and coordination partner supporting businesses across diverse product requirements. We specialize in supplier coordination, requirement alignment, and operational clarity — ensuring smooth execution without confusion.
              </p>
            </div>

            <div className="w-16 h-px bg-border"></div>

            {/* Our Mission */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To simplify sourcing processes while maintaining integrity, efficiency, and confidentiality at every stage.
              </p>
            </div>

            <div className="w-16 h-px bg-border"></div>

            {/* Our Values */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-8">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="p-6 bg-card border border-border">
                    <h3 className="font-serif text-xl font-medium text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
