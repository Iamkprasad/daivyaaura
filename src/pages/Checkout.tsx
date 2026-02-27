import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { ShoppingBag, ArrowLeft } from "lucide-react";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const shipping = totalPrice >= 999 ? 0 : 50;

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
        <h1 className="text-2xl font-display font-bold mb-2">No items to checkout</h1>
        <Button asChild className="bg-primary text-primary-foreground font-heading mt-4">
          <Link to="/shop">Browse Products</Link>
        </Button>
      </div>
    );
  }

  const orderSummary = items.map((i) => `${i.product.name} x${i.quantity} = ₹${i.product.salePrice * i.quantity}`).join(" | ");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("_order_items", orderSummary);
    formData.append("_order_total", `₹${totalPrice + shipping}`);

    try {
      const res = await fetch("https://formspree.io/f/xykdvjdg", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        toast.success("Order placed successfully! 🙏 We will contact you soon.");
        clearCart();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-4xl">
        <Button asChild variant="ghost" className="mb-4 font-heading text-muted-foreground">
          <Link to="/cart"><ArrowLeft className="w-4 h-4 mr-1" /> Back to Cart</Link>
        </Button>
        <h1 className="text-3xl font-display font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-3 space-y-6">
            {/* Contact */}
            <div className="bg-card rounded-xl border p-6">
              <h2 className="font-heading font-semibold text-lg mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><Label className="font-heading text-sm">Full Name *</Label><Input name="name" required className="mt-1" /></div>
                <div><Label className="font-heading text-sm">Email *</Label><Input name="email" type="email" required className="mt-1" /></div>
                <div><Label className="font-heading text-sm">Phone *</Label><Input name="phone" type="tel" required placeholder="+91" className="mt-1" /></div>
                <div><Label className="font-heading text-sm">WhatsApp</Label><Input name="whatsapp" type="tel" placeholder="Same as phone?" className="mt-1" /></div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-card rounded-xl border p-6">
              <h2 className="font-heading font-semibold text-lg mb-4">Shipping Address</h2>
              <div className="space-y-4">
                <div><Label className="font-heading text-sm">Street Address *</Label><Input name="address" required className="mt-1" /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><Label className="font-heading text-sm">City *</Label><Input name="city" required className="mt-1" /></div>
                  <div>
                    <Label className="font-heading text-sm">State *</Label>
                    <select name="state" required className="mt-1 w-full rounded-lg border bg-card px-3 py-2 text-sm">
                      <option value="">Select State</option>
                      {indianStates.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><Label className="font-heading text-sm">PIN Code *</Label><Input name="pincode" required pattern="[0-9]{6}" maxLength={6} className="mt-1" /></div>
                  <div><Label className="font-heading text-sm">Country</Label><Input value="India" disabled className="mt-1" /></div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-card rounded-xl border p-6">
              <h2 className="font-heading font-semibold text-lg mb-4">Payment Method</h2>
              <div className="space-y-3">
                {["Cash on Delivery (COD)", "UPI Payment", "Bank Transfer"].map((m) => (
                  <label key={m} className="flex items-center gap-3 p-3 rounded-lg border hover:border-primary/30 cursor-pointer transition-colors">
                    <input type="radio" name="payment_method" value={m} required className="accent-primary" defaultChecked={m.includes("COD")} />
                    <span className="font-heading text-sm">{m}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="bg-card rounded-xl border p-6">
              <h2 className="font-heading font-semibold text-lg mb-4">Additional Notes</h2>
              <Textarea name="notes" placeholder="Any special instructions..." rows={3} />
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-2">
            <div className="bg-card rounded-xl border p-6 sticky top-24">
              <h2 className="font-heading font-semibold text-lg mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.product.name} ×{item.quantity}</span>
                    <span className="font-medium">₹{item.product.salePrice * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-3 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>₹{totalPrice}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "Free" : `₹${shipping}`}</span></div>
                <div className="border-t pt-2 flex justify-between font-heading font-bold text-lg">
                  <span>Total</span><span>₹{totalPrice + shipping}</span>
                </div>
              </div>
              <Button type="submit" size="lg" disabled={submitting} className="w-full mt-6 bg-primary text-primary-foreground font-heading shadow-gold">
                {submitting ? "Placing Order..." : "Place Order"}
              </Button>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                By placing this order, you agree to our Terms & Conditions
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
