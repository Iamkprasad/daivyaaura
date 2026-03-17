import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Phone } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Book Appointment", path: "/book-appointment" },
  { label: "About", path: "/about" },
];

export default function Header() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top bar */}
      <div className="bg-cosmic text-primary-foreground/70 text-xs py-2">
        <div className="container flex items-center justify-between">
          <a href="tel:+919911573173" className="flex items-center gap-1.5 font-body hover:text-primary transition-colors">
            <Phone className="w-3 h-3" />
            <span>Talk to Astrologer: +91 99115 73173</span>
          </a>
          <span className="hidden sm:block font-body text-secondary/80">✨ Free Shipping on orders above ₹999</span>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImg} alt="Daivyaura logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-gold" />
            <span className="text-xl md:text-2xl font-display font-bold text-gradient-gold tracking-wider">
              DAIVYAURA
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-heading font-semibold text-base tracking-wide transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Link to="/cart" className="relative p-2.5 hover:text-primary transition-colors rounded-full hover:bg-muted">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gradient-gold text-cosmic text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-glow">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2.5 rounded-full hover:bg-muted"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border/50 bg-card"
            >
              <nav className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`font-heading font-semibold text-base py-2.5 px-4 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/60 hover:text-primary hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
