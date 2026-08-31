import { Star, ArrowRight, Flame } from "lucide-react";
import { motion } from "motion/react";
import { formatPrice, type Product } from "../data/products";

/**
 * Reusable Amazon-style product card.
 * Used on the Shop grid and can be dropped anywhere a product needs a tile.
 */
export function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: (id: string) => void;
}) {
  const soldOut = product.stock <= 0;
  return (
    <motion.button
      type="button"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      onClick={() => onOpen(product.id)}
      className="group flex flex-col text-left rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent overflow-hidden hover:border-[#ff6a18]/40 hover:shadow-[0_0_50px_rgba(255,106,24,0.18)] transition-colors active:scale-[0.98] touch-manipulation"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#161616] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,106,24,0.16),transparent_70%)]" />
        {/* <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        /> */}
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-[#ff6a18]/90 px-2.5 py-1 text-[10px] tracking-widest text-white">
            <Flame className="h-3 w-3" />
            {product.badge.toUpperCase()}
          </div>
        )}
        <div className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur px-2.5 py-1 text-[10px] tracking-widest text-white/70 border border-white/10">
          #{product.id}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="text-white leading-snug line-clamp-2">{product.name}</div>
        <div className="mt-1 text-xs text-white/45 line-clamp-2">{product.subtitle}</div>

        {/* Rating row (Amazon-style) */}
        <div className="mt-auto pt-3 flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className={`h-3.5 w-3.5 ${
                  s <= Math.round(product.rating ?? 0) ? "text-[#ff6a18]" : "text-white/15"
                }`}
                fill="currentColor"
              />
            ))}
          </div>
          <span className="text-[11px] text-white/40">
            {(product.reviews ?? 0) > 0 ? `(${product.reviews})` : "New"}
          </span>
        </div>

        {/* Price + stock */}
        <div className="mt-2 flex items-end justify-between gap-3">
          <div
            style={{ fontFamily: "Bebas Neue", fontSize: 30 }}
            className="leading-none text-white"
          >
            {formatPrice(product.price)}
          </div>
          <div className={`text-[11px] ${soldOut ? "text-white/40" : "text-emerald-400"}`}>
            {soldOut ? "Sold out" : `In stock: ${product.stock}`}
          </div>
        </div>

        <div className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff6a18] to-[#b34700] py-2.5 text-sm text-white shadow-[0_0_25px_rgba(255,106,24,0.35)] group-hover:shadow-[0_0_40px_rgba(255,106,24,0.6)] transition-shadow">
          View Details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.button>
  );
}
