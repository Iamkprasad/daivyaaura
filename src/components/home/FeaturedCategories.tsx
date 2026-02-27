import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplets, CircleDot, Flame, Heart } from "lucide-react";

const cats = [
  { name: "Sprays", icon: Droplets, count: 5, desc: "Energized spiritual sprays" },
  { name: "Tilaks", icon: CircleDot, count: 3, desc: "Sacred sacred tilaks" },
  { name: "Oils", icon: Flame, count: 1, desc: "Essential oils" },
  { name: "Wellness", icon: Heart, count: 1, desc: "Wellness tools" },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Shop by <span className="text-gradient-gold">Category</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Explore our curated collection of spiritual wellness products
          </p>
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
                className="block bg-card rounded-xl p-6 text-center border hover:shadow-gold hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{cat.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{cat.count} products</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
