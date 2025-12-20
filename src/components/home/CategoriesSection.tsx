import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CategoriesSection() {
  const categories = [
    {
      name: "Lifestyle & Home Products",
    },
    {
      name: "Textile & Carpets",
    },
    {
      name: "Packaging Solutions",
    },
    {
      name: "Glass, Plastic & Household Utilities",
    },
    {
      name: "Customized Product Requirements",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="w-12 h-px bg-accent mx-auto mb-6"></div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
            Product Categories We Support
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our network spans multiple product segments, allowing flexible and reliable support.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 max-w-5xl mx-auto mb-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-6 lg:p-8 text-center border border-border bg-card hover:border-accent/40 transition-colors duration-300"
            >
              <h3 className="font-serif text-base lg:text-lg font-medium text-primary">
                {category.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional Text */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground">
            If your requirement fits one of these categories, we can support it with the same structured approach.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="elegant-outline" size="lg" asChild>
            <Link to="/categories">Explore All Categories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
