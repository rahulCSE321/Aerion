export function WhyChooseSection() {
  const reasons = [
    {
      title: "Verified supplier network",
    },
    {
      title: "Professional coordination",
    },
    {
      title: "Transparent documentation support",
    },
    {
      title: "Time-saving processes",
    },
    {
      title: "Multi-category flexibility",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="w-12 h-px bg-accent mx-auto mb-6"></div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-4">
            Why Aerion Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-2">
            Smart Workflows. Clear Communication. Reliable Outcomes.
          </p>
          <p className="text-muted-foreground">
            Because sourcing support should feel professional — not stressful.
          </p>
        </div>

        {/* Reasons List */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-background border border-border">
                <div className="w-1 h-8 bg-accent flex-shrink-0"></div>
                <h3 className="font-serif text-lg font-medium text-primary">
                  {reason.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            We make complex sourcing feel simple — helping you achieve more with less effort.
          </p>
        </div>
      </div>
    </section>
  );
}
