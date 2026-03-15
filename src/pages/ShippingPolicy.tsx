import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ShippingPolicy() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-body mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Shipping <span className="text-gradient-gold">Policy</span></h1>

        <div className="prose prose-sm max-w-none space-y-8 text-foreground/80 font-body leading-relaxed">
          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Order Processing</h2>
            <p>All orders are processed within 1-2 business days after confirmation. Orders placed on weekends or public holidays will be processed on the next business day.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Shipping Coverage</h2>
            <p>We currently ship across all major cities and towns in India. Our delivery network covers all serviceable PIN codes through our logistics partners.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Shipping Charges</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Standard Shipping:</strong> ₹50 (5-7 business days)</li>
              <li><strong>Express Shipping:</strong> ₹100 (2-3 business days)</li>
              <li><strong>Free Shipping:</strong> On all orders above ₹999</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Delivery Partners</h2>
            <p>We partner with trusted delivery services including India Post, DTDC, and BlueDart to ensure your products reach you safely and on time.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Delivery Delays</h2>
            <p>While we strive to deliver within the estimated timeframe, delays may occur due to unforeseen circumstances such as weather conditions, natural disasters, or logistical issues. We will notify you of any significant delays.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Packaging</h2>
            <p>All spiritual products are carefully packaged with protective materials and sacred wrapping to ensure they reach you in perfect condition, preserving their energized properties.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Contact</h2>
            <p>For shipping inquiries, contact us at:<br />
            Email: <a href="mailto:daivyaura@gmail.com" className="text-primary hover:underline">daivyaura@gmail.com</a><br />
            Phone: <a href="tel:+919911573173" className="text-primary hover:underline">+91 99115 73173</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
