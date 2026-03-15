import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-body mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Privacy <span className="text-gradient-gold">Policy</span></h1>

        <div className="prose prose-sm max-w-none space-y-8 text-foreground/80 font-body leading-relaxed">
          <p className="text-muted-foreground">Last updated: March 2026</p>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Information We Collect</h2>
            <p>When you place an order or subscribe to our newsletter, we collect personal information including your name, email address, phone number, and shipping address. This information is necessary to process your orders and communicate with you about your purchases.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">How We Use Your Data</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Processing and fulfilling your orders</li>
              <li>Sending order confirmations and shipping updates</li>
              <li>Responding to customer service inquiries</li>
              <li>Sending promotional emails (with your consent)</li>
              <li>Improving our products and website experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Payment Security</h2>
            <p>We do not store any payment card information. Payments are processed through secure third-party payment gateways (UPI, bank transfer) or Cash on Delivery. Your financial data is never stored on our servers.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Cookies</h2>
            <p>Our website uses localStorage to maintain your shopping cart. We do not use tracking cookies. Any analytics data collected is anonymized and used solely to improve our services.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Third-Party Services</h2>
            <p>We use Formspree to process order forms. Your submitted information is transmitted securely to our email. We do not share your personal data with any other third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information at any time. Contact us at <a href="mailto:daivyaura@gmail.com" className="text-primary hover:underline">daivyaura@gmail.com</a> to exercise your rights.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Contact</h2>
            <p>For privacy-related concerns, contact us at:<br />
            Email: <a href="mailto:daivyaura@gmail.com" className="text-primary hover:underline">daivyaura@gmail.com</a><br />
            Phone: <a href="tel:+919911573173" className="text-primary hover:underline">+91 99115 73173</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
