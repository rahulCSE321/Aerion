export function ChallengeSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="w-12 h-px bg-accent mx-auto mb-6"></div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
            The Challenge We Solve — And How We Do It
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Managing suppliers, specifications, and timelines often becomes fragmented and time-consuming. Multiple touchpoints, unclear communication, and inconsistent updates slow businesses down and create unnecessary effort.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aerion Excellence brings structure, clarity, and professional coordination — acting as a single point of support between your requirement and execution. The result: minimal effort from your side and reliable outcomes.
          </p>

          <div className="pt-6">
            <p className="font-serif text-xl md:text-2xl text-primary italic">
              No complexity. No unnecessary follow-ups. Just smooth execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
