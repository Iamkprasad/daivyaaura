import { Star } from "lucide-react";
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
    <section className="py-16 md:py-24 bg-cream">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            What Our <span className="text-gradient-gold">Customers</span> Say
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Real experiences from our blessed community
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-6 border shadow-card"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
