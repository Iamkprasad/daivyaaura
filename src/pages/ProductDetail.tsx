import { useParams, Link } from "react-router-dom";
import { getProductBySlug, products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Minus, Plus, ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import ProductCard from "@/components/shop/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-display font-bold mb-4">Product Not Found</h1>
        <Button asChild><Link to="/shop">Back to Shop</Link></Button>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addToCart(product, qty);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <section className="py-8 md:py-16">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 font-heading">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square rounded-xl overflow-hidden bg-muted border"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-xs font-heading text-muted-foreground uppercase tracking-wider">{product.category} • {product.sku}</span>
            <h1 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-3">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-heading font-bold text-foreground">₹{product.salePrice}</span>
              {product.discount > 0 && (
                <>
                  <span className="text-lg text-muted-foreground line-through">₹{product.regularPrice}</span>
                  <span className="bg-accent/10 text-accent font-heading font-bold text-sm px-2.5 py-1 rounded-full">
                    Save {product.discount}%
                  </span>
                </>
              )}
            </div>

            <p className="text-foreground/70 mb-6">{product.shortDescription}</p>

            {/* Quantity & Add */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-lg">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 hover:bg-muted transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 font-heading font-medium">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-3 hover:bg-muted transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button onClick={handleAdd} size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-heading shadow-gold">
                <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
              </Button>
            </div>

            <Button asChild variant="outline" size="lg" className="w-full font-heading mb-6">
              <Link to="/checkout">Buy Now</Link>
            </Button>

            {/* Benefits list */}
            <div className="space-y-2">
              {product.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="description" className="mt-12">
          <TabsList className="w-full justify-start border-b bg-transparent p-0 gap-6">
            <TabsTrigger value="description" className="font-heading data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-3 px-0">Description</TabsTrigger>
            <TabsTrigger value="ingredients" className="font-heading data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-3 px-0">Ingredients</TabsTrigger>
            <TabsTrigger value="usage" className="font-heading data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-3 px-0">How to Use</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-6 text-foreground/80 leading-relaxed">
            {product.fullDescription}
          </TabsContent>
          <TabsContent value="ingredients" className="pt-6 text-foreground/80">
            {product.ingredients}
          </TabsContent>
          <TabsContent value="usage" className="pt-6 text-foreground/80">
            {product.usage}
          </TabsContent>
        </Tabs>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-display font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
