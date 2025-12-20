export function ClientApproachSection() {
  const points = [
    "Transparent communication",
    "Regular updates",
    "Confidential handling of information",
    "No hidden processes or assumptions",
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="w-12 h-px bg-accent mx-auto mb-6"></div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-4">
              Client-First Approach
            </h2>
            <p className="text-lg text-muted-foreground">
              Professionalism You Can Rely On
            </p>
          </div>

          {/* Content */}
          <div className="text-center mb-10">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Strong partnerships are built on clarity and trust.
            </p>
          </div>

          {/* Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card border border-border">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                <span className="text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-center pt-8 border-t border-border">
            <p className="font-serif text-xl md:text-2xl text-primary italic">
              Your goals guide our coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
