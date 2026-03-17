import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplets, CircleDot, Flame, Heart } from "lucide-react";

const cats = [
  { name: "Sprays", icon: Droplets, count: 5, desc: "Energized spiritual sprays", color: "from-primary/20 to-primary/5" },
  { name: "Tilaks", icon: CircleDot, count: 3, desc: "Sacred blessed tilaks", color: "from-secondary/20 to-secondary/5" },
  { name: "Oils", icon: Flame, count: 1, desc: "Pure essential oils", color: "from-primary/15 to-secondary/10" },
  { name: "Wellness", icon: Heart, count: 1, desc: "Spiritual wellness tools", color: "from-secondary/15 to-primary/10" },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 md:py-24 bg-muted/50 sacred-geometry">
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="font-heading text-sm text-primary font-semibold uppercase tracking-[0.2em]">Collections</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
              Shop by <span className="text-gradient-gold">Category</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto font-body">
              Explore our curated collection of spiritual wellness products
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {cats.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/shop?category=${cat.name}`}
                className="block bg-card rounded-xl p-6 md:p-8 text-center border border-border/50 hover:shadow-glow hover:border-primary/30 transition-all duration-500 group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <cat.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg tracking-wide">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 font-body">{cat.count} products</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
