import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Lifestyle & Home Products",
    tagline: "Designed for quality, finish, and everyday use.",
    description:
      "We support sourcing and coordination for lifestyle and home-use products where consistency and presentation matter. Our role is to align design, material, and production feasibility with your expectations.",
    items: [
      "Home décor items",
      "Lifestyle accessories",
      "Daily-use household products",
    ],
    cta: "Share Your Requirement",
  },
  {
    name: "Textile & Carpets",
    tagline: "Material precision. Consistent quality.",
    description:
      "Textile and carpet products demand accuracy in material, design, and production handling. We ensure specifications and quality expectations are clearly aligned before execution.",
    items: [
      "Carpets and rugs",
      "Textile-based products",
      "Material-specific requirements",
    ],
    cta: "Discuss Your Requirement",
  },
  {
    name: "Packaging Solutions",
    tagline: "Practical. Scalable. Reliable.",
    description:
      "We assist businesses in accessing packaging solutions that meet functional, volume, and quality requirements — without trial and error.",
    items: [
      "Packaging materials",
      "Containers and storage solutions",
      "Commercial-use packaging items",
    ],
    cta: "Contact Us",
  },
  {
    name: "Glass, Plastic & Household Utilities",
    tagline: "Built for regular use and consistency.",
    description:
      "Utility-driven products require durability, consistency, and proper handling. We support structured sourcing and coordination for dependable everyday solutions.",
    items: [
      "Glass utility items",
      "Plastic containers",
      "Household-use products",
    ],
    cta: "Share Your Requirement",
  },
  {
    name: "Customized Product Requests",
    tagline: "When standard options aren't enough.",
    description:
      "For non-standard or specialized requirements, we provide structured evaluation and coordination — helping you assess feasibility before committing resources.",
    items: [
      "Custom designs or materials",
      "Unique functional needs",
      "Special quantity requirements",
    ],
    idealFor: true,
    cta: "Discuss Your Requirement",
  },
];

const Categories = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-16 lg:py-24 bg-secondary/30 border-b border-border">
        <div className="container-narrow text-center">
          <div className="w-12 h-px bg-accent mx-auto mb-6"></div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-primary mb-6">
            Product Categories
          </h1>
        </div>
      </section>

      {/* Categories List */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-wide">
          <div className="space-y-12 lg:space-y-16 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="p-8 lg:p-10 bg-card border border-border"
              >
                <h2 className="font-serif text-2xl lg:text-3xl font-medium text-primary mb-2">
                  {category.name}
                </h2>
                <p className="text-accent font-medium mb-6">
                  {category.tagline}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {category.description}
                </p>
                
                <div className="pt-6 border-t border-border mb-6">
                  <h3 className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                    {category.idealFor ? "Ideal for" : "We support"}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-muted-foreground mb-6">
                  If this category aligns with your requirement, let's discuss next steps.
                </p>

                <Button variant="elegant-outline" asChild>
                  <Link to="/contact">{category.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
