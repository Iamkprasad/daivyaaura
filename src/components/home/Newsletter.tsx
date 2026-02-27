import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Send } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-gradient-hero">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-background mb-4">
          Stay Connected with Divine Energy
        </h2>
        <p className="text-background/70 mb-8 max-w-md mx-auto">
          Subscribe for spiritual tips, new product launches, and exclusive offers
        </p>
        <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-background/20 border-background/30 text-background placeholder:text-background/50"
          />
          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading shrink-0">
            <Send className="w-4 h-4 mr-2" /> Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
