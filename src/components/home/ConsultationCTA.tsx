import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarCheck, Star, Moon, Sparkles, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Star,
    title: "Vedic Astrology",
    desc: "Birth chart reading, planetary insights & predictions",
    price: "₹1,500",
  },
  {
    icon: Moon,
    title: "Numerology",
    desc: "Name analysis, lucky numbers & life path guidance",
    price: "₹1,200",
  },
  {
    icon: CalendarCheck,
    title: "Kundli Matching",
    desc: "Marriage compatibility & horoscope analysis",
    price: "₹2,000",
  },
  {
    icon: Sparkles,
    title: "Spiritual Remedies",
    desc: "Personalized gemstone & mantra recommendations",
    price: "₹1,000",
  },
];

export default function ConsultationCTA() {
  return (
    <section className="py-16 md:py-24 bg-cosmic-radial cosmic-particles relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary/60" />
              <CalendarCheck className="w-4 h-4 text-primary" />
              <span className="font-heading text-sm text-primary font-semibold uppercase tracking-[0.2em]">
                Consultations
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground leading-tight mb-4">
              Get Personal <span className="text-gradient-gold">Astrology Guidance</span>
            </h2>
            <p className="text-primary-foreground/50 font-body mb-8 max-w-lg leading-relaxed">
              Book a one-on-one consultation with our experienced Vedic astrologers.
              Get personalized insights on career, relationships, health, finance and spiritual growth.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-gold text-primary-foreground hover:opacity-90 font-display text-sm tracking-wider shadow-glow px-8 py-6"
              >
                <Link to="/book-appointment">
                  Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground/70 hover:bg-primary-foreground/10 font-heading text-base px-6 py-6"
              >
                <a href="tel:+919911573173">
                  <Phone className="mr-2 w-4 h-4" /> Call Now
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-xs text-primary-foreground/40 font-body">
              <span>✓ 500+ Happy Clients</span>
              <span>✓ 10+ Years Experience</span>
              <span>✓ Online & Offline</span>
            </div>
          </motion.div>

          {/* Right - Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {services.map((s, i) => (
              <Link
                key={s.title}
                to="/book-appointment"
                className="group bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-5 border border-primary-foreground/10 hover:border-primary/40 hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-3 group-hover:bg-primary/25 transition-colors">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-sm text-primary-foreground tracking-wide">
                  {s.title}
                </h3>
                <p className="text-xs text-primary-foreground/40 font-body mt-1 line-clamp-2">
                  {s.desc}
                </p>
                <p className="text-sm font-display font-bold text-secondary mt-2">{s.price}</p>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
