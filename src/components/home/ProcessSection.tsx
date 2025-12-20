export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Share your requirement",
    },
    {
      number: "02",
      title: "We identify suitable options",
    },
    {
      number: "03",
      title: "You select the best fit",
    },
    {
      number: "04",
      title: "We coordinate specifications & documentation",
    },
    {
      number: "05",
      title: "Dispatch-stage support until completion",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="w-12 h-px bg-primary-foreground/30 mx-auto mb-6"></div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            How It Works
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed text-lg">
            Simple. Structured. Efficient.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-6 lg:gap-10 py-6 border-b border-primary-foreground/10 last:border-b-0"
            >
              <span className="flex-shrink-0 font-serif text-3xl lg:text-4xl font-medium text-primary-foreground/30">
                {step.number}
              </span>
              <h3 className="font-serif text-xl lg:text-2xl font-medium">
                {step.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="max-w-2xl mx-auto text-center mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="font-serif text-xl text-primary-foreground/80 italic">
            Your time saved. Your work simplified.
          </p>
        </div>
      </div>
    </section>
  );
}
