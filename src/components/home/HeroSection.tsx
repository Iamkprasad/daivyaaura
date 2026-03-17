import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center overflow-hidden bg-cosmic cosmic-particles">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Daivyaura divine energy astrology and spiritual products"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic via-cosmic/90 to-cosmic/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic via-transparent to-cosmic/40" />
      </div>

      {/* Sacred geometry overlays */}
      <div className="absolute inset-0 sacred-geometry" />

      {/* Glow accents */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-[16%] w-64 h-64 rounded-full bg-secondary/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="h-px w-8 bg-primary/60" />
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-heading text-xs sm:text-sm text-primary font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                Divine Energy Products
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.15] mb-4 md:mb-6">
              Divine Energy for{" "}
              <span className="text-gradient-gold">Your Spiritual</span>{" "}
              Journey
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-primary-foreground/60 font-body mb-6 md:mb-8 max-w-lg leading-relaxed">
              Discover energized sprays, sacred tilaks, and wellness products crafted to bring prosperity, protection, and peace to your life.
            </p>

            {/* CTA Buttons - stack on very small screens */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4">
              <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 font-display text-sm tracking-wider shadow-glow px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                <Link to="/shop">
                  Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-secondary/90 text-secondary-foreground hover:bg-secondary font-display text-sm tracking-wider px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                <Link to="/book-appointment">
                  <CalendarCheck className="mr-2 w-4 h-4" /> Book Consultation
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground/70 hover:bg-primary-foreground/10 font-heading text-sm sm:text-base font-semibold px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                <a href="tel:+919911573173">
                  <Phone className="mr-2 w-4 h-4" /> Talk to Astrologer
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-4 sm:gap-6 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-primary-foreground/10">
              {[
                { num: "10+", label: "Products" },
                { num: "500+", label: "Happy Customers" },
                { num: "4.8★", label: "Average Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-base sm:text-lg font-display font-bold text-primary">{stat.num}</p>
                  <p className="text-[10px] sm:text-xs text-primary-foreground/40 font-body">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Decorative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden md:flex items-center justify-center relative"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Glowing rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-glow" />
              <div className="absolute inset-4 rounded-full border border-primary/15 animate-pulse-glow" style={{ animationDelay: '1s' }} />
              <div className="absolute inset-8 rounded-full border border-primary/10 animate-pulse-glow" style={{ animationDelay: '2s' }} />

              {/* Center product showcase */}
              <div className="absolute inset-12 rounded-full overflow-hidden shadow-glow">
                <img src={heroBanner} alt="Sacred spiritual products collection" className="w-full h-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic/60 to-transparent" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center animate-float">
                <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <div className="absolute -bottom-2 -left-6 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/20 animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
