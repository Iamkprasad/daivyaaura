import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Daivyaura spiritual products" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-heading text-sm text-primary font-medium uppercase tracking-widest">
              Divine Energy Products
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-background leading-tight mb-6">
            Divine Energy for Your{" "}
            <span className="text-gradient-gold">Spiritual Journey</span>
          </h1>
          <p className="text-lg text-background/70 font-body mb-8 max-w-md">
            Discover energized sprays, sacred tilaks, and wellness products crafted to bring prosperity, protection, and peace to your life.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading shadow-gold">
              <Link to="/shop">
                Shop Now <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10 font-heading">
              <a href="tel:+919911573173">Talk to Astrologer</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
