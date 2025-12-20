import { Link } from "react-router-dom";

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Product Focus", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "WhatsApp", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-semibold mb-2">
                Aerion Excellence
              </h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md mb-6">
              Reliable Sourcing • Clear Coordination • Professional Execution
            </p>
            <div className="w-16 h-px bg-primary-foreground/20"></div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-5">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-5">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Aerion Excellence
            </p>
            <p className="text-primary-foreground/50 text-xs tracking-wide">
              Reliable Sourcing • Clear Coordination • Professional Execution
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
