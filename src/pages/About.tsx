import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Star, Truck, Heart, ArrowRight, Sparkles } from "lucide-react";
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
      <section className="bg-cosmic-radial cosmic-particles py-20 md:py-28 text-center">
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">About Daivyaura</h1>
            <p className="text-lg text-primary-foreground/50 max-w-xl mx-auto font-heading">Your Trusted Spiritual Companion</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <span className="font-heading text-sm text-primary font-semibold uppercase tracking-[0.2em]">Our Journey</span>
          <h2 className="text-3xl font-display font-bold mt-2 mb-8">Our <span className="text-gradient-gold">Story</span></h2>
          <div className="space-y-6 text-foreground/70 leading-relaxed font-body">
            <p>
              At Daivyaura, we believe that every individual deserves access to authentic spiritual wellness products. Founded with a vision to bring divine energy into everyday life, our brand combines ancient Vedic wisdom with modern accessibility.
            </p>
            <p>
              Each product in our collection is carefully crafted, blessed, and energized by experienced astrologers and spiritual practitioners. From our prosperity sprays to sacred tilaks, every item carries the intention of positivity, protection, and growth.
            </p>
            <p>
              Our mission is simple — to make powerful spiritual tools accessible to everyone, helping them navigate life with confidence, clarity, and divine blessings.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/50 sacred-geometry">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="font-heading text-sm text-primary font-semibold uppercase tracking-[0.2em]">Our Values</span>
            <h2 className="text-3xl font-display font-bold mt-2">Why Choose <span className="text-gradient-gold">Us</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 text-center border border-border/50 hover:shadow-glow hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-base mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center">
        <div className="container">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Begin Your <span className="text-gradient-gold">Spiritual Journey?</span></h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto font-body">Explore our curated collection of divine energy products</p>
          <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground font-display text-sm tracking-wider shadow-glow px-8">
            <Link to="/shop">Shop Our Products <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
