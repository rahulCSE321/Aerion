import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productRequirement: "",
    quantity: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description:
        "Thank you for your inquiry. We will respond within one business day.",
    });

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      productRequirement: "",
      quantity: "",
      notes: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-16 lg:py-24 bg-secondary/30 border-b border-border">
        <div className="container-narrow text-center">
          <div className="w-12 h-px bg-accent mx-auto mb-6"></div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-primary mb-4">
            Aerion Excellence
          </h1>
          <p className="text-lg text-accent font-medium mb-4">
            Work Smarter. Effort Less.
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tell us what you need — we'll handle the coordination.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-medium text-primary mb-8">
                Contact Form
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="productRequirement" className="text-sm font-medium text-foreground">
                    Product Requirement *
                  </Label>
                  <Textarea
                    id="productRequirement"
                    name="productRequirement"
                    required
                    rows={3}
                    value={formData.productRequirement}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary resize-none"
                    placeholder="Describe the product you need..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-sm font-medium text-foreground">
                    Quantity (Approx.)
                  </Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="text"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary"
                    placeholder="Estimated quantity"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-sm font-medium text-foreground">
                    Additional Notes
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary resize-none"
                    placeholder="Any additional information..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="elegant"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-2xl font-medium text-primary mb-8">
                Direct Contact
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-lg font-medium text-primary mb-3">
                    Email
                  </h3>
                  <a
                    href="mailto:info@aerionexcellence.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@aerionexcellence.com
                  </a>
                </div>

                <div className="w-12 h-px bg-border"></div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-primary mb-3">
                    Phone
                  </h3>
                  <p className="text-muted-foreground">
                    +91 XXXXX XXXXX
                  </p>
                </div>

                <div className="w-12 h-px bg-border"></div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-primary mb-3">
                    Business Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Mon–Sat | 10 AM – 7 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
