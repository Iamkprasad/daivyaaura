import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing! 🙏");
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-muted/50 sacred-geometry">
      <div className="container text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Stay Connected with <span className="text-gradient-gold">Divine Energy</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto font-body">
            Subscribe for spiritual tips, new product launches, and exclusive offers
          </p>
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-card border-border font-body"
            />
            <Button type="submit" className="bg-gradient-gold text-cosmic hover:opacity-90 font-display text-xs tracking-wider shrink-0 shadow-gold">
              <Send className="w-4 h-4 mr-2" /> Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
