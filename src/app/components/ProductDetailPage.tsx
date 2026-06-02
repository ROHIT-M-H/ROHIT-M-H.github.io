import { useState } from "react";
import {
  ArrowLeft,
  Star,
  ShieldCheck,
  Truck,
  Clock,
  Cog,
  Sparkles,
  Hammer,
  Leaf,
  ChevronRight,
  Heart,
  Share2,
  Check,
  Info,
  Instagram,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import img4433 from "../../imports/IMG_4433-1.jpg";
import img4436 from "../../imports/IMG_4436-1.jpg";
import img4440 from "../../imports/IMG_4440.jpg";
import img4446 from "../../imports/IMG_4446.jpg";

export const PRODUCT = {
  id: "black-piston",
  name: "Piston Clock",
  subtitle: "Real engine piston · Hand-painted matte black · Silent quartz movement",
  price: 4999,
  priceDisplay: "₹4,999",
  images: [img4433, img4436, img4440, img4446],
  features: [
    "Genuine retired automobile engine piston",
    "Hand-painted matte black finish",
    "Deep-cleaned & restored by hand",
    "Reliable clock movement",
    "Certificate of authenticity included",
  ],
  description:
    "Each clock starts as a genuine, retired automobile piston — pulled from scrapyards and workshops. I clean it by hand, treat it for rust, coat it in a hand-applied matte black paint, and press a precision silent-quartz movement into the crown. The black finish gives it a raw, industrial character — bold enough for a garage, refined enough for a living room. No two pistons are identical. Yours will be unmistakably yours.",
};

export function ProductDetailPage({
  onBack,
}: {
  onBack: () => void;
}) {
  const product = PRODUCT;
  const [activeImg, setActiveImg] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const [likeToast, setLikeToast] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [shareLabel, setShareLabel] = useState<"idle" | "copied">("idle");

  function handleLike() {
    if (!wishlist) {
      setWishlist(true);
      setLikeToast(true);
      setTimeout(() => setLikeToast(false), 2200);
    } else {
      setWishlist(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen pt-24 pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 text-sm text-white/40 hover:text-[#ff6a18] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </button>

        <div className="grid lg:grid-cols-2 gap-8 xl:gap-16">
          {/* LEFT: image gallery */}
          <div className="space-y-3">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#161616] to-[#0a0a0a]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,106,24,0.18),transparent_70%)]" />
              <motion.img
                key={activeImg}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={product.images[activeImg]}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative h-16 w-16 sm:h-20 sm:w-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all ${
                    activeImg === i
                      ? "border-[#ff6a18] shadow-[0_0_16px_rgba(255,106,24,0.5)]"
                      : "border-white/10 opacity-50 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`View ${i + 1}`} className="h-full w-full object-cover object-center" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: product info */}
          <div className="flex flex-col gap-5">
            {/* Breadcrumb trail */}
            <div className="text-[10px] tracking-[0.3em] text-white/35 flex items-center gap-1">
              <span>Piston &amp; Time</span>
              <ChevronRight className="h-3 w-3" />
              <span>Wall Clocks</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/55">Piston Clock</span>
            </div>

            {/* Title */}
            <div>
              <h1
                style={{ fontFamily: "Bebas Neue", fontSize: "clamp(28px,4vw,48px)" }}
                className="leading-[1]"
              >
                {product.name}
              </h1>
              <p className="mt-2 text-white/45 text-sm">{product.subtitle}</p>
            </div>

            {/* Rating — interactive */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    onClick={() => setRating(s)}
                    onMouseEnter={() => setHoverRating(s)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-125 active:scale-110"
                    aria-label={`Rate ${s} star`}
                  >
                    <Star
                      className={`h-4 w-4 transition-colors ${
                        s <= (hoverRating || rating)
                          ? "text-[#ff6a18] drop-shadow-[0_0_6px_rgba(255,106,24,0.8)]"
                          : "text-white/15"
                      }`}
                      fill="currentColor"
                    />
                  </button>
                ))}
              </div>
              <span className="text-xs text-white/35">
                {rating > 0 ? `You rated ${rating}/5 — thank you!` : "No reviews yet — be the first"}
              </span>
            </div>

            {/* Price block */}
            <div className="rounded-2xl border border-[#ff6a18]/25 bg-[#ff6a18]/5 p-5">
              <div
                style={{ fontFamily: "Bebas Neue", fontSize: "clamp(42px,8vw,56px)" }}
                className="leading-none text-white"
              >
                {product.priceDisplay}
              </div>
              <div className="mt-1 text-xs text-white/40">
                🔥 Launch Price: ₹4,999<br></br>
                Only 26 pieces available at this price. Once sold out, the price will increase.<br></br>
                Inclusive of all taxes • Free shipping across India
                {/* Inclusive of all taxes · Free shipping anywhere in India */}
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-2.5">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-0.5 grid place-items-center h-5 w-5 shrink-0 rounded-full bg-[#ff6a18]/20 text-[#ff6a18]">
                    <Check className="h-3 w-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Stock warning */}
            <div className="flex items-center gap-2 text-xs text-[#ff6a18]">
              <Info className="h-3.5 w-3.5 shrink-0" />
              Only 1 unit available — handmade, not mass produced
            </div>

            {/* CTAs */}
            <div className="relative flex flex-col gap-3 mt-1">
              <a
                href="https://ig.me/m/mjb_garage_creations"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff6a18] to-[#b34700] py-4 text-white shadow-[0_0_30px_rgba(255,106,24,0.4)] hover:shadow-[0_0_50px_rgba(255,106,24,0.65)] transition-all"
              >
                <Instagram className="h-4 w-4" />
                Order on Instagram
              </a>
              <div className="rounded-xl border border-white/8 bg-white/[0.02] px-4 py-2.5 text-[11px] text-white/40 leading-relaxed">
                Tap above → DM opens → send: <span className="text-white/65 italic">"Hi, I want to order the Piston Clock (₹4,999)"</span>
              </div>

              <div className="flex gap-3">
                {/* Like button with bounce + toast */}
                <div className="relative flex-1">
                  <motion.button
                    onClick={handleLike}
                    whileTap={{ scale: 0.85 }}
                    animate={wishlist ? { scale: [1, 1.35, 0.9, 1.15, 1] } : { scale: 1 }}
                    transition={{ duration: 0.4, times: [0, 0.2, 0.5, 0.75, 1] }}
                    className={`w-full h-[54px] flex items-center justify-center gap-2 rounded-2xl border transition-all ${
                      wishlist
                        ? "border-rose-500 bg-rose-500/20 text-rose-400"
                        : "border-white/20 bg-white/[0.05] text-white/50 hover:text-white"
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${wishlist ? "fill-current" : ""}`} />
                    <span className="text-xs">{wishlist ? "Saved" : "Save"}</span>
                  </motion.button>

                  <AnimatePresence>
                    {likeToast && (
                      <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.9 }}
                        animate={{ opacity: 1, y: -8, scale: 1 }}
                        exit={{ opacity: 0, y: -16, scale: 0.85 }}
                        transition={{ duration: 0.22 }}
                        className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-rose-500 px-3 py-1 text-[11px] text-white shadow-lg pointer-events-none"
                      >
                        +1 saved
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Share button */}
                <button
                  onClick={async () => {
                    const igUrl = "https://www.instagram.com/mjb_garage_creations/";
                    const data = {
                      title: "Piston & Time — Piston Clock",
                      text: "Check out this handmade piston wall clock from Bengaluru! Order via @mjb_garage_creations",
                      url: igUrl,
                    };
                    let success = false;
                    if (typeof navigator !== "undefined" && navigator.share) {
                      try { await navigator.share(data); success = true; } catch (_) {}
                    }
                    if (!success && typeof navigator !== "undefined" && navigator.clipboard) {
                      try {
                        await navigator.clipboard.writeText(igUrl);
                        success = true;
                      } catch (_) {}
                    }
                    setShareLabel("copied");
                    setTimeout(() => setShareLabel("idle"), 2200);
                  }}
                  className={`h-[54px] flex-1 flex items-center justify-center gap-2 rounded-2xl border transition-all ${
                    shareLabel === "copied"
                      ? "border-[#ff6a18]/60 bg-[#ff6a18]/15 text-[#ff6a18]"
                      : "border-white/20 bg-white/[0.05] text-white/50 hover:text-white"
                  }`}
                >
                  <Share2 className="h-4 w-4" />
                  <span className="text-xs">{shareLabel === "copied" ? "Copied!" : "Share"}</span>
                </button>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
              {[
                { icon: <Truck className="h-4 w-4" />, label: "Free Shipping to Metropolitan Areas", sub: "Pan India" },
                { icon: <ShieldCheck className="h-4 w-4" />, label: "Genuine Parts", sub: "Verified piston" },
                { icon: <Hammer className="h-4 w-4" />, label: "Handmade", sub: "By the maker" },
              ].map((b) => (
                <div key={b.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-center">
                  <div className="flex justify-center text-[#ff6a18]">{b.icon}</div>
                  <div className="mt-1 text-[11px] text-white">{b.label}</div>
                  <div className="text-[10px] text-white/35">{b.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-10 md:mt-16 border-t border-white/10 pt-8 md:pt-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] tracking-[0.35em] text-white/60 mb-8">
            <Cog className="h-3.5 w-3.5 text-[#ff6a18]" />
            ABOUT THIS PIECE
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-white/65 leading-relaxed">{product.description}</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: <Cog className="h-5 w-5" />, t: "Real Automotive Part", d: "Sourced from retired engines, not factories." },
                { icon: <Leaf className="h-5 w-5" />, t: "Eco Conscious", d: "Salvaged metal — zero new raw material." },
                { icon: <Sparkles className="h-5 w-5" />, t: "One of One", d: "Your piston's story. Nobody else's." },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="text-[#ff6a18]">{c.icon}</div>
                  <div className="mt-3 text-sm text-white">{c.t}</div>
                  <div className="mt-1 text-xs text-white/45">{c.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
