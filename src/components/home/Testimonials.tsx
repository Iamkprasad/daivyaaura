import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "The Money Attraction Spray has genuinely changed my financial outlook. Within weeks of using it, I noticed new opportunities coming my way!",
    rating: 5,
    location: "Mumbai",
  },
  {
    name: "Rahul Verma",
    text: "I was skeptical at first, but the Business Booster Spray really helped. My shop's footfall increased noticeably. Highly recommended!",
    rating: 5,
    location: "Delhi",
  },
  {
    name: "Anita Gupta",
    text: "The Negativity Removal Spray made our home feel so much lighter and peaceful. The energy shift was noticeable from day one.",
    rating: 5,
    location: "Bangalore",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cosmic-radial cosmic-particles">
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="font-heading text-sm text-primary font-semibold uppercase tracking-[0.2em]">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mt-2">
              What Our <span className="text-gradient-gold">Customers</span> Say
            </h2>
            <p className="mt-3 text-primary-foreground/50 max-w-md mx-auto font-body">
              Real experiences from our blessed community
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:border-primary/30 transition-colors duration-300"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-5 font-body">"{t.text}"</p>
              <div className="border-t border-primary-foreground/10 pt-4">
                <p className="font-display font-bold text-sm text-primary-foreground">{t.name}</p>
                <p className="text-xs text-primary-foreground/40 font-body">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
