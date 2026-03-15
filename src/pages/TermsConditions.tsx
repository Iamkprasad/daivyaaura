import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsConditions() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-body mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Terms & <span className="text-gradient-gold">Conditions</span></h1>

        <div className="prose prose-sm max-w-none space-y-8 text-foreground/80 font-body leading-relaxed">
          <p className="text-muted-foreground">Last updated: March 2026</p>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Terms of Use</h2>
            <p>By accessing and using the Daivyaura website, you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our website.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Product Disclaimer</h2>
            <p>Our products are spiritual wellness items designed to complement your spiritual practices. While our products are crafted with genuine intentions and traditional methods, individual results may vary. Daivyaura products are not intended to replace medical advice, diagnosis, or treatment.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Astrology & Spiritual Advisory Disclaimer</h2>
            <p>Any astrological or spiritual guidance provided through our website, consultations, or product descriptions is for informational and spiritual purposes only. These should not be considered as professional medical, legal, or financial advice. Users should use their own judgment and consult qualified professionals for specific concerns.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Intellectual Property</h2>
            <p>All content on this website including text, images, logos, and product designs are the intellectual property of Daivyaura. Unauthorized use, reproduction, or distribution is prohibited.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">User Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide accurate information when placing orders</li>
              <li>Use products as directed in the instructions</li>
              <li>Not misuse or resell products without authorization</li>
              <li>Respect the spiritual nature and integrity of the products</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Limitation of Liability</h2>
            <p>Daivyaura shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Our maximum liability shall not exceed the amount paid for the specific product or service.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in New Delhi, India.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Changes to Terms</h2>
            <p>We reserve the right to update these terms at any time. Changes will be effective immediately upon posting on this page.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Contact</h2>
            <p>For questions about these terms, contact us at:<br />
            Email: <a href="mailto:daivyaura@gmail.com" className="text-primary hover:underline">daivyaura@gmail.com</a><br />
            Phone: <a href="tel:+919911573173" className="text-primary hover:underline">+91 99115 73173</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
