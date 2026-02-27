import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gradient-gold mb-4">Daivyaura</h3>
            <p className="text-sm leading-relaxed mb-4 text-background/60">
              Your trusted companion for spiritual wellness. Divine energy products crafted with love, faith, and sacred intentions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "Shop", path: "/shop" },
                { label: "About Us", path: "/about" },
                { label: "Cart", path: "/cart" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              {["Refund & Returns", "Privacy Policy", "Shipping Policy", "Terms & Conditions"].map((p) => (
                <li key={p}>
                  <span className="hover:text-primary transition-colors cursor-pointer">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <a href="tel:+919911573173">+91 99115 73173</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <a href="mailto:daivyaura@gmail.com">daivyaura@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>23b/5 New Rohtak Road, New Delhi 110005</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-xs text-background/40">
          © {new Date().getFullYear()} Daivyaura. All rights reserved. Divine Energy for Your Spiritual Journey.
        </div>
      </div>
    </footer>
  );
}
