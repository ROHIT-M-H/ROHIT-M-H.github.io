import { useMemo, useState } from "react";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";
import { useProducts } from "../data/products";
import { ProductCard } from "./ProductCard";

type Sort = "featured" | "price-asc" | "price-desc" | "rating";

export function ShopPage({
  onBack,
  onOpen,
}: {
  onBack: () => void;
  onOpen: (id: string) => void;
}) {
  const { products } = useProducts();
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("featured");

  const visible = useMemo(() => {
    let list = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        p.id.includes(query)
    );
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return list;
  }, [products, query, sort]);

  return (
    <main className="relative z-10 pt-24 pb-20 md:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#ff6a18] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </button>
        </div>

        <div className="mt-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] tracking-[0.35em] text-white/60">
            THE SHOP
          </div>
          <h1
            style={{ fontFamily: "Bebas Neue", fontSize: "clamp(40px,6vw,84px)" }}
            className="mt-3 leading-[0.95]"
          >
            THE FULL <span className="text-[#ff6a18]">COLLECTION</span>
          </h1>
          <p className="mt-3 max-w-xl text-white/55">
            {products.length} handcrafted piston clocks — each one restored by hand,
            each one one-of-one.
          </p>
        </div>

        {/* Toolbar */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search clocks or #ID..."
              className="w-full rounded-full border border-white/10 bg-black/40 pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#ff6a18]/60 transition-colors"
            />
          </div>
          <label className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/70">
            <SlidersHorizontal className="h-4 w-4 text-white/40" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="bg-transparent outline-none text-white/80 [&>option]:bg-[#0a0a0a]"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </label>
        </div>

        {/* Grid */}
        {visible.length ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} onOpen={onOpen} />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center text-white/40">
            No products match "{query}".
          </div>
        )}
      </div>
    </main>
  );
}
