import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function RefundReturns() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-body mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Refund & <span className="text-gradient-gold">Returns</span></h1>

        <div className="prose prose-sm max-w-none space-y-8 text-foreground/80 font-body leading-relaxed">
          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Return Eligibility</h2>
            <p>We accept returns within 7 days of delivery for products that are:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Damaged during shipping</li>
              <li>Received in a defective condition</li>
              <li>Incorrect product delivered</li>
            </ul>
            <p className="mt-3">Due to the spiritual and personal nature of our products, we do not accept returns for change of mind or personal preference.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Refund Process</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Contact us within 7 days of receiving your order</li>
              <li>Provide your order details and photos of the issue</li>
              <li>Our team will review your request within 48 hours</li>
              <li>Approved refunds will be processed within 5-7 business days</li>
              <li>Refund will be credited to the original payment method</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Damaged Products</h2>
            <p>If you receive a damaged product, please contact us immediately with photographs. We will arrange a free replacement or full refund at our discretion.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Non-Returnable Items</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Opened or used products (sprays, tilaks, oils)</li>
              <li>Products damaged due to misuse</li>
              <li>Items not in original packaging</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Exchange Policy</h2>
            <p>We offer exchanges for damaged or defective products only. To initiate an exchange, contact our customer support team with your order details.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Contact for Returns</h2>
            <p>Email: <a href="mailto:daivyaura@gmail.com" className="text-primary hover:underline">daivyaura@gmail.com</a><br />
            Phone: <a href="tel:+919911573173" className="text-primary hover:underline">+91 99115 73173</a><br />
            WhatsApp: <a href="https://wa.me/919911573173" className="text-primary hover:underline">+91 99115 73173</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
