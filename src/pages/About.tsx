import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Star, Truck, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: Shield, title: "Authenticity", desc: "Every product is genuine and energized with sacred rituals" },
  { icon: Star, title: "Spiritual Integrity", desc: "Crafted by experienced astrologers and spiritual practitioners" },
  { icon: Heart, title: "Customer First", desc: "Your satisfaction and spiritual growth is our top priority" },
  { icon: Truck, title: "Fast Shipping", desc: "Quick delivery across India with careful handling" },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-20 md:py-28 text-center">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-background mb-4">About Daivyaura</h1>
            <p className="text-lg text-background/70 max-w-xl mx-auto">Your Trusted Spiritual Companion</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Our <span className="text-gradient-gold">Story</span></h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            At Daivyaura, we believe that every individual deserves access to authentic spiritual wellness products. Founded with a vision to bring divine energy into everyday life, our brand combines ancient Vedic wisdom with modern accessibility.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Each product in our collection is carefully crafted, blessed, and energized by experienced astrologers and spiritual practitioners. From our prosperity sprays to sacred tilaks, every item carries the intention of positivity, protection, and growth.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Our mission is simple — to make powerful spiritual tools accessible to everyone, helping them navigate life with confidence, clarity, and divine blessings.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Why Choose <span className="text-gradient-gold">Us</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 text-center border"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center">
        <div className="container">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Begin Your Spiritual Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Explore our curated collection of divine energy products</p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground font-heading shadow-gold">
            <Link to="/shop">Shop Our Products <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
