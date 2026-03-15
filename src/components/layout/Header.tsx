import { useState, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, Phone, Search } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
];

export default function Header() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    ).slice(0, 5);
  }, [searchQuery]);

  const handleSelectProduct = (slug: string) => {
    setSearchQuery("");
    setSearchOpen(false);
    navigate(`/product/${slug}`);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-cosmic text-primary-foreground/70 text-xs py-2">
        <div className="container flex items-center justify-between">
          <a href="tel:+919911573173" className="flex items-center gap-1.5 font-body hover:text-primary transition-colors">
            <Phone className="w-3 h-3" />
            <span>Talk to Astrologer: +91 99115 73173</span>
          </a>
          <span className="hidden sm:block font-body text-primary/80">✨ Free Shipping on orders above ₹999</span>
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
            {/* Search toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 hover:text-primary transition-colors rounded-full hover:bg-muted"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

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

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border/50 bg-card"
            >
              <div className="container py-3 relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
                    autoFocus
                  />
                </div>
                {searchResults.length > 0 && (
                  <div className="absolute left-0 right-0 mx-4 mt-1 bg-card border rounded-lg shadow-lg z-50 overflow-hidden">
                    {searchResults.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => handleSelectProduct(p.slug)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors text-left"
                      >
                        <img src={p.image} alt={p.name} className="w-10 h-10 rounded object-cover" />
                        <div>
                          <p className="text-sm font-heading font-semibold">{p.name}</p>
                          <p className="text-xs text-muted-foreground">₹{p.salePrice}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
