import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/shop/ProductCard";
import { products, categories } from "@/data/products";
import { motion } from "framer-motion";

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [sortBy, setSortBy] = useState("popularity");

  const filtered = useMemo(() => {
    let list = selectedCategory === "All" ? [...products] : products.filter((p) => p.category === selectedCategory);
    switch (sortBy) {
      case "price-low": list.sort((a, b) => a.salePrice - b.salePrice); break;
      case "price-high": list.sort((a, b) => b.salePrice - a.salePrice); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      default: list.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    return list;
  }, [selectedCategory, sortBy]);

  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
            Our <span className="text-gradient-gold">Products</span>
          </h1>
          <p className="text-muted-foreground mb-8">Discover divine energy products for your spiritual journey</p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-heading font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-gold"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 rounded-lg border bg-card text-sm font-heading"
          >
            <option value="popularity">Sort by Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No products found in this category.</p>
        )}
      </div>
    </section>
  );
}
