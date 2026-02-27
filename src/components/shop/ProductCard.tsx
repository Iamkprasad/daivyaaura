import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/data/products";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-gold transition-shadow duration-300 border">
          <div className="relative aspect-square overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {product.discount > 0 && (
              <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-heading font-bold px-2.5 py-1 rounded-full">
                {product.discount}% OFF
              </span>
            )}
            {product.bestseller && (
              <span className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-heading font-bold px-2.5 py-1 rounded-full">
                Bestseller
              </span>
            )}
          </div>
          <div className="p-4">
            <span className="text-xs font-heading text-muted-foreground uppercase tracking-wider">
              {product.category}
            </span>
            <h3 className="font-heading font-semibold mt-1 text-card-foreground line-clamp-2">
              {product.name}
            </h3>
            <div className="flex items-center gap-1 mt-1.5">
              <Star className="w-3.5 h-3.5 fill-primary text-primary" />
              <span className="text-xs font-medium text-muted-foreground">
                {product.rating} ({product.reviewCount})
              </span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <span className="text-lg font-heading font-bold text-foreground">
                  ₹{product.salePrice}
                </span>
                {product.discount > 0 && (
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.regularPrice}
                  </span>
                )}
              </div>
              <Button
                size="sm"
                onClick={handleAdd}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
