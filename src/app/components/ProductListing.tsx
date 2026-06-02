import { motion } from "motion/react";
import { Star, ShieldCheck, Truck, Cog, ArrowRight } from "lucide-react";
import { PRODUCTS, type Product } from "./ProductDetailPage";

function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`relative flex flex-col rounded-3xl border overflow-hidden cursor-pointer group transition-shadow duration-300 ${
        product.highlight
          ? "border-[#ff6a18]/40 shadow-[0_0_40px_rgba(255,106,24,0.18)] hover:shadow-[0_0_60px_rgba(255,106,24,0.32)]"
          : "border-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
      } bg-gradient-to-b from-white/[0.04] to-transparent`}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 rounded-full bg-gradient-to-r from-[#ff6a18] to-[#b34700] px-3 py-1 text-[10px] tracking-[0.25em] text-white">
          {product.badge}
        </div>
      )}
      {product.soon && (
        <div className="absolute top-4 left-4 z-10 rounded-full bg-white/10 backdrop-blur border border-white/10 px-3 py-1 text-[10px] tracking-[0.25em] text-white/60">
          COMING SOON
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-square bg-gradient-to-br from-[#161616] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,106,24,0.15),transparent_70%)]" />
        <img
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 m-auto h-[78%] w-[78%] object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_10px_40px_rgba(255,106,24,0.25)]"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-6">
        {/* Category */}
        <div className="text-[10px] tracking-[0.3em] text-white/40 mb-2">
          PISTON &amp; TIME · WALL CLOCK
        </div>

        {/* Name */}
        <h3 className="text-white leading-snug">{product.name}</h3>
        <p className="mt-1 text-xs text-white/50">{product.subtitle}</p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-3 w-3 text-white/20" fill="currentColor" />
            ))}
          </div>
          <span className="text-[10px] text-white/35">No reviews yet</span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-end gap-3">
          <div
            style={{ fontFamily: "Bebas Neue", fontSize: product.soon ? 26 : 38 }}
            className={`leading-none ${
              product.highlight
                ? "text-[#ff6a18]"
                : product.soon
                ? "text-white/50"
                : "text-white"
            }`}
          >
            {product.priceDisplay}
          </div>
          {!product.soon && (
            <div className="pb-1 text-[10px] text-white/35">incl. all taxes</div>
          )}
        </div>

        {/* Trust chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/50">
            <Truck className="h-3 w-3 text-[#ff6a18]" /> Free Shipping
          </span>
          <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/50">
            <ShieldCheck className="h-3 w-3 text-[#ff6a18]" /> Genuine Piston
          </span>
        </div>

        {/* CTA */}
        <button
          className={`mt-5 w-full flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm transition-all ${
            product.soon
              ? "border border-white/15 bg-white/[0.04] text-white/50 hover:bg-white/[0.08]"
              : product.highlight
              ? "bg-gradient-to-r from-[#ff6a18] to-[#b34700] text-white shadow-[0_0_24px_rgba(255,106,24,0.4)] hover:shadow-[0_0_40px_rgba(255,106,24,0.6)]"
              : "border border-white/20 bg-white/[0.06] text-white hover:bg-white/10"
          }`}
        >
          {product.soon ? "Notify Me" : "View Details"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}

export function ProductListing({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <section id="products" className="relative z-10 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] tracking-[0.35em] text-white/60 mb-4">
              <span className="text-[#ff6a18]">
                <Cog className="h-3.5 w-3.5" />
              </span>
              ALL PRODUCTS
            </div>
            <h2
              style={{ fontFamily: "Bebas Neue", fontSize: "clamp(34px,5vw,64px)" }}
              className="leading-[0.95]"
            >
              CHOOSE YOUR{" "}
              <span className="text-[#ff6a18]">PISTON CLOCK</span>
            </h2>
            <p className="mt-3 text-white/50 max-w-lg">
              Every piece is handmade by me in Bengaluru. Only 2 units in stock — no factory, no mass production.
            </p>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-xs text-white/40 tracking-widest">ONLY</div>
            <div
              style={{ fontFamily: "Bebas Neue", fontSize: 42 }}
              className="text-[#ff6a18] leading-none"
            >
              2
            </div>
            <div className="text-xs text-white/40 tracking-widest">PIECES MADE</div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onSelect(product.id)}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center text-xs text-white/30 tracking-wide">
          All clocks ship with a certificate of authenticity · Handmade in India · No returns needed — I stand by my work
        </div>
      </div>
    </section>
  );
}
