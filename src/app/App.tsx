import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Flame,
  Recycle,
  Award,
  Clock,
  Hammer,
  Leaf,
  ShieldCheck,
  Star,
  Quote,
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Cog,
  Truck,
  Heart,
  Gift,
  ArrowLeftRight,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import pistonBefore from "../imports/dirty_piston.png";
import pistonAfter from "../imports/image-3.png";
import img4433 from "../imports/IMG_4433.jpg";
import img4433_1 from "../imports/IMG_4433-1.jpg";
import img4436 from "../imports/IMG_4436-1.jpg";
import img4439 from "../imports/IMG_4439.jpg";
import img4440 from "../imports/IMG_4440.jpg";
import img4446 from "../imports/IMG_4446-1.jpg";
const HERO_IMG =
  "https://images.unsplash.com/photo-1722928566496-4def9304441a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600";
const PRODUCT_IMG =
  "https://images.unsplash.com/photo-1621235219059-1e4ba9a1041c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1400";
const WORKSHOP_IMG =
  "https://images.unsplash.com/photo-1622129710676-16a6b2014aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1400";
const ENGINE_IMG =
  "https://images.unsplash.com/photo-1771503816991-60897f47f40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1400";
const METAL_IMG =
  "https://images.unsplash.com/photo-1773939005477-4cdeab332d77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1400";

const NAV = [
  "Home",
  "Story",
  "Shop",
  "Craftsmanship",
  "Sustainability",
  "Journey",
  "Gallery",
  "FAQ",
  "Contact",
];

import { createContext, useContext } from "react";
import { ProductDetailPage } from "./components/ProductDetailPage";

type Page = "home" | "gallery" | "product";
const RouterCtx = createContext<{
  page: Page;
  go: (p: Page) => void;
  productId: string | null;
  openProduct: (id: string) => void;
}>({
  page: "home",
  go: () => {},
  productId: null,
  openProduct: () => {},
});
const useRouter = () => useContext(RouterCtx);

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [productId, setProductId] = useState<string | null>(null);
  const go = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openProduct = (id: string) => {
    setProductId(id);
    setPage("product");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <RouterCtx.Provider value={{ page, go, productId, openProduct }}>
      <div
        className="min-h-screen bg-[#08090b] text-white antialiased overflow-x-hidden"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <AmbientBackdrop />
        <Header />
        {page === "home" && <HomePage />}
        {page === "gallery" && <GalleryPage />}
        {page === "product" && (
          <ProductDetailPage onBack={() => go("home")} />
        )}
        {page !== "product" && (
          <>
            <Footer />
            <StickyBuy />
          </>
        )}
      </div>
    </RouterCtx.Provider>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BrandStory />
      <ProductShowcase />
      <FeatureGrid />
      <BeforeAfter />
      <WhyLove />
      <Craftsmanship />
      <Sustainability />
      <Journey />
      <Stats />
      <Reviews />
      <Pricing />
      <InstagramGallery />
      <FAQ />
      <Urgency />
      <Contact />
    </>
  );
}

function AmbientBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="hidden sm:block absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#ff6a18]/8 blur-[120px]" />
      <div className="hidden sm:block absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-[#ff8c00]/8 blur-[140px]" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { page, go, openProduct } = useRouter();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <button onClick={() => go("home")} className="flex items-center gap-2 group cursor-pointer">
          <div className="relative h-9 w-9 rounded-full bg-gradient-to-br from-[#ff6a18] via-[#b34700] to-[#1a1a1a] grid place-items-center shadow-[0_0_30px_rgba(255,106,24,0.5)]">
            <Cog className="h-5 w-5 text-white" />
          </div>
          <div className="leading-none">
            <div
              className="tracking-[0.25em]"
              style={{ fontFamily: "Bebas Neue", fontSize: 18 }}
            >
              PISTON & TIME
            </div>
            <div className="text-[10px] tracking-[0.3em] text-white/40">
              FORGED · REBORN
            </div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-white/70">
          {NAV.map((n) => {
            const handler = (e: React.MouseEvent) => {
              e.preventDefault();
              if (n === "Gallery") {
                go("gallery");
              } else if (n === "Shop") {
                openProduct("black-piston");
              } else {
                if (page !== "home") {
                  go("home");
                  setTimeout(() => document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: "smooth" }), 80);
                } else {
                  document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                }
              }
            };
            return (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                onClick={handler}
                className={`hover:text-white transition relative group ${n === "Shop" ? "text-[#ff6a18]" : ""}`}
              >
                {n}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#ff6a18] transition-all group-hover:w-full" />
              </a>
            );
          })}
          <button
            onClick={() => openProduct("black-piston")}
            className="ml-2 rounded-full bg-gradient-to-r from-[#ff6a18] to-[#c84800] px-5 py-2.5 text-white shadow-[0_0_25px_rgba(255,106,24,0.45)] hover:shadow-[0_0_40px_rgba(255,106,24,0.7)] transition"
          >
            Buy Now
          </button>
        </nav>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV.map((n) => (
                <a
                  key={n}
                  href={`#${n.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    if (n === "Gallery") {
                      go("gallery");
                    } else if (n === "Shop") {
                      openProduct("black-piston");
                    } else {
                      if (page !== "home") {
                        go("home");
                        setTimeout(() => document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: "smooth" }), 80);
                      } else {
                        document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                  className={`hover:text-[#ff6a18] transition ${n === "Shop" ? "text-[#ff6a18]" : "text-white/80"}`}
                >
                  {n}
                </a>
              ))}
              <button
                onClick={() => { setOpen(false); openProduct("black-piston"); }}
                className="rounded-full bg-gradient-to-r from-[#ff6a18] to-[#c84800] px-5 py-3 text-white text-center"
              >
                Buy Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const { openProduct } = useRouter();
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-[0.25em] text-white/70 backdrop-blur">
            <Flame className="h-3.5 w-3.5 text-[#ff6a18]" />
            HANDCRAFTED · LIMITED EDITION · 2026
          </div>

          <h1
            className="mt-5 text-white leading-[0.95] tracking-tight"
            style={{ fontFamily: "Bebas Neue", fontSize: "clamp(42px,7vw,108px)" }}
          >
            FORGED FROM{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb277] via-[#ff6a18] to-[#a83400]">
              POWER.
            </span>
            <br />
            REBORN AS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8e8e8] via-[#a8a8a8] to-[#5a5a5a]">
              TIME.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-white/60 leading-relaxed">
            Handcrafted luxury wall clocks created from real engine pistons.
            Built for those who respect machines, art, and legacy.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => openProduct("black-piston")}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff6a18] to-[#b34700] px-6 py-3.5 sm:px-7 sm:py-4 text-white shadow-[0_0_40px_rgba(255,106,24,0.45)] active:scale-95 transition-all"
            >
              Buy Now
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 sm:px-7 sm:py-4 text-white/90 active:scale-95 transition-all"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {[
              "Real car pistons",
              "Premium craft",
              "Recycled metal art",
              "Limited pieces",
            ].map((t) => (
              <div
                key={t}
                className="flex items-center gap-2 text-xs text-white/60"
              >
                <span className="grid place-items-center h-5 w-5 rounded-full bg-[#ff6a18]/20 text-[#ff6a18]">
                  ✓
                </span>
                {t}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 relative mt-8 lg:mt-0"
        >
          <div className="relative aspect-square rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] shadow-[0_30px_120px_rgba(255,106,24,0.25)]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,106,24,0.35),transparent_60%)]" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 grid place-items-center p-8"
            >
              <img
                src={img4433_1}
                alt="Piston Clock"
                className="h-full w-full object-cover object-center drop-shadow-[0_20px_40px_rgba(255,106,24,0.35)]"
              />
            </motion.div>
            <div
              className="absolute -inset-10 pointer-events-none"
              style={{ animation: "spin 18s linear infinite", willChange: "transform" }}
            >
              <div className="absolute inset-0 rounded-full border border-dashed border-white/5" />
            </div>
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/60 backdrop-blur px-3 py-1.5 text-[11px] tracking-widest text-white/80 border border-white/10">
              <Sparkles className="h-3 w-3 text-[#ff6a18]" /> EDITION 01 / 02
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-2xl border border-white/10 bg-black/70 backdrop-blur px-5 py-4 shadow-2xl">
            <Award className="h-5 w-5 text-[#ff6a18]" />
            <div>
              <div className="text-sm text-white">Authentic engine part</div>
              <div className="text-xs text-white/50">Verified by craftsman</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ClockOverlay() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const seconds = time.getSeconds() * 6;
  const minutes = time.getMinutes() * 6 + time.getSeconds() * 0.1;
  const hours = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;
  return (
    <div className="absolute inset-0 grid place-items-center pointer-events-none">
      <div className="relative h-[55%] w-[55%] rounded-full">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[#ff6a18] shadow-[0_0_10px_rgba(255,106,24,0.9)]"
            style={{
              transform: `rotate(${i * 30}deg) translate(0, -110px)`,
            }}
          />
        ))}
        <div
          className="absolute left-1/2 top-1/2 h-[35%] w-1 bg-white rounded-full"
          style={{
            transform: `translate(-50%, -100%) rotate(${hours}deg)`,
            transformOrigin: "50% 100%",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[45%] w-0.5 bg-white/80 rounded-full"
          style={{
            transform: `translate(-50%, -100%) rotate(${minutes}deg)`,
            transformOrigin: "50% 100%",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[48%] w-px bg-[#ff6a18] shadow-[0_0_8px_rgba(255,106,24,0.9)]"
          style={{
            transform: `translate(-50%, -100%) rotate(${seconds}deg)`,
            transformOrigin: "50% 100%",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6a18] shadow-[0_0_15px_rgba(255,106,24,1)]" />
      </div>
    </div>
  );
}

function TrustBar() {
  const items = [
    "AS SEEN IN GARAGES",
    "SHIPPED WORLDWIDE",
    "HANDMADE IN INDIA",
    "ECO CERTIFIED",
    "PREMIUM EDITION",
    "1-YEAR WARRANTY",
  ];
  return (
    <section className="relative z-10 border-y border-white/5 bg-black/40 backdrop-blur py-5 overflow-hidden">
      <div
        style={{ animation: "marquee 30s linear infinite", willChange: "transform" }}
        className="flex gap-12 whitespace-nowrap text-white/40 text-xs tracking-[0.4em]"
      >
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            {it}
            <Flame className="h-3 w-3 text-[#ff6a18]/50" />
          </span>
        ))}
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section id="story" className="relative z-10 py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative">
            <ImageWithFallback
              src={WORKSHOP_IMG}
              alt="Workshop"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs tracking-[0.3em] text-[#ff6a18]">
                EST · 2026
              </div>
              <div
                style={{ fontFamily: "Bebas Neue", fontSize: 28 }}
                className="text-white"
              >
                A CS STUDENT FROM BENGALURU · 2 PIECES SO FAR
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <SectionLabel icon={<Flame />} text="THE STORY" />
          <h2
            style={{ fontFamily: "Bebas Neue", fontSize: "clamp(36px,5vw,72px)" }}
            className="leading-[0.95] mt-4"
          >
            Built from <span className="text-[#ff6a18]">passion</span>,
            <br /> forged with <span className="text-[#ff6a18]">grit</span>.
          </h2>
          <p className="mt-6 text-white/60 leading-relaxed">
            I'm a Computer Science student from Bengaluru, where technology
            shapes the future. But beyond coding and computers, machines have
            always had a special place in my heart. Since childhood, I've
            admired engines, metal craftsmanship, and the power hidden inside
            automotive parts.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed">
            That passion inspired me to begin this journey — transforming real
            engine pistons into premium handcrafted wall clocks. I want to
            build products that carry soul, history, and mechanical beauty.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed">
            This is only the beginning. Right now, I have created just{" "}
            <span className="text-[#ff6a18]">2 pieces</span>, but many more
            creative machine-based products are planned for the future. My
            dream is to build a brand where forgotten machines are reborn into
            timeless art.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
            {[
              { k: "Based in", v: "Bengaluru" },
              { k: "Pieces", v: "Only 2 made" },
              { k: "Future", v: "Many more" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
              >
                <div className="text-[10px] tracking-[0.3em] text-white/40">
                  {s.k.toUpperCase()}
                </div>
                <div className="mt-1 text-white">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductShowcase() {
  const [zoom, setZoom] = useState(false);
  return (
    <section
      id="product"
      className="relative z-10 py-16 md:py-28 bg-gradient-to-b from-transparent via-[#0c0d10] to-transparent"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel icon={<Cog />} text="THE PRODUCT" centered />
          <h2
            style={{ fontFamily: "Bebas Neue", fontSize: "clamp(36px,5vw,72px)" }}
            className="leading-[0.95] mt-4"
          >
            ONE PISTON. ONE CLOCK.
            <br /> <span className="text-[#ff6a18]">ONE OF ONE.</span>
          </h2>
          <p className="mt-5 text-white/60">
            A heavyweight piece of automotive history transformed into
            precision-tuned, functional sculpture. No two are alike — yours
            will be unmistakably yours.
          </p>
        </div>

        <div className="mt-10 md:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div
            className="relative aspect-square rounded-[32px] overflow-hidden border border-white/10 cursor-zoom-in group bg-gradient-to-br from-[#161616] to-[#0a0a0a]"
            onClick={() => setZoom(!zoom)}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,106,24,0.25),transparent_70%)]" />
            <img
              src={img4433_1}
              alt="Product"
              className={`absolute inset-0 m-auto h-[85%] w-[85%] object-cover transition-transform duration-700 drop-shadow-[0_20px_50px_rgba(255,106,24,0.35)] ${
                zoom ? "scale-150" : "scale-100 group-hover:scale-110"
              }`}
            />
            <div className="absolute bottom-4 right-4 rounded-full bg-black/70 backdrop-blur border border-white/10 px-3 py-1.5 text-xs text-white/70">
              {zoom ? "Click to reset" : "Click to zoom"}
            </div>
          </div>

          <div className="space-y-5">
            {[
              {
                icon: <Cog />,
                t: "Genuine Engine Piston",
                d: "Sourced from real, retired automobile engines.",
              },
              {
                icon: <ShieldCheck />,
                t: "Heavy Durable Body",
                d: "Solid metal weight you can feel in your hand.",
              },
              {
                icon: <Clock />,
                t: "Precision Mechanism",
                d: "Silent quartz movement engineered for accuracy.",
              },
              {
                icon: <Sparkles />,
                t: "Hand-Polished Finish",
                d: "Mirror-grade surface treatment, every inch.",
              },
              {
                icon: <Flame />,
                t: "Raw Industrial Soul",
                d: "Marks of the road preserved. Imperfections honored.",
              },
              {
                icon: <Award />,
                t: "Truly One-of-One",
                d: "Each piece carries a serial-numbered identity.",
              },
            ].map((f) => (
              <motion.div
                key={f.t}
                whileHover={{ x: 8 }}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-[#ff6a18]/40 transition"
              >
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-[#ff6a18]/20 to-transparent border border-[#ff6a18]/30 text-[#ff6a18] shrink-0">
                  {f.icon}
                </div>
                <div>
                  <div className="text-white">{f.t}</div>
                  <div className="text-sm text-white/50 mt-1">{f.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  const items = [
    { icon: <Cog />, t: "Real Engine Part" },
    { icon: <Hammer />, t: "Handmade Finish" },
    { icon: <Clock />, t: "Functional Clock" },
    { icon: <Award />, t: "Collector Piece" },
    { icon: <Leaf />, t: "Eco Friendly" },
    { icon: <ShieldCheck />, t: "Built to Last" },
  ];
  return (
    <section className="relative z-10 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 text-center hover:border-[#ff6a18]/40 hover:shadow-[0_0_40px_rgba(255,106,24,0.15)] transition"
            >
              <div className="mx-auto grid place-items-center h-12 w-12 rounded-xl bg-[#ff6a18]/10 text-[#ff6a18] group-hover:bg-[#ff6a18]/20 transition">
                {it.icon}
              </div>
              <div className="mt-3 text-sm text-white/80">{it.t}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <section className="relative z-10 py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel icon={<Recycle />} text="RESTORATION" centered />
          <h2
            style={{ fontFamily: "Bebas Neue", fontSize: "clamp(34px,5vw,64px)" }}
            className="mt-4 leading-[0.95]"
          >
            FROM <span className="text-white/40">SCRAP</span> TO{" "}
            <span className="text-[#ff6a18]">SCULPTURE</span>
          </h2>
          <p className="mt-4 text-white/60">
            Drag the slider to witness the transformation.
          </p>
        </div>

        <div className="mt-8 md:mt-12 relative aspect-[4/3] sm:aspect-[16/9] max-w-6xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 select-none bg-[#0a0a0a] cursor-ew-resize touch-none">
          {/* AFTER image — full size, always visible underneath */}
          <img
            src={pistonAfter}
            alt="After - Polished Piston Clock"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ imageRendering: "auto", willChange: "auto" }}
          />

          {/* BEFORE image — full size, clipped from the right via clipPath */}
          <img
            src={pistonBefore}
            alt="Before - Raw Dirty Piston"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              clipPath: `inset(0 ${100 - pos}% 0 0)`,
              imageRendering: "auto",
              willChange: "clip-path",
            }}
          />

          {/* Labels */}
          <div className="absolute top-4 left-4 rounded-full bg-black/70 backdrop-blur-sm px-3 py-1 text-xs tracking-widest border border-white/10 text-white pointer-events-none">
            BEFORE
          </div>
          <div className="absolute top-4 right-4 rounded-full bg-[#ff6a18]/90 px-3 py-1 text-xs tracking-widest text-white pointer-events-none">
            AFTER
          </div>

          {/* Divider line + handle */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute inset-y-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#ff6a18] to-transparent shadow-[0_0_16px_rgba(255,106,24,0.9)]" />
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-white text-black shadow-2xl border-2 border-[#ff6a18]">
              <ArrowLeftRight className="h-5 w-5" />
            </div>
          </div>

          {/* Invisible range input for interaction */}
          <input
            type="range"
            min={1}
            max={99}
            value={pos}
            onChange={(e) => setPos(+e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          />
        </div>
      </div>
    </section>
  );
}

function WhyLove() {
  const items = [
    {
      icon: <Heart />,
      t: "Premium Wall Décor",
      d: "Bedroom, office, garage, showroom — instant character.",
    },
    {
      icon: <Gift />,
      t: "Unforgettable Gift",
      d: "Birthdays, anniversaries, Father's Day, retirements.",
    },
    {
      icon: <MessageCircle />,
      t: "Conversation Starter",
      d: "Every guest will ask the same question. You'll smile.",
    },
    {
      icon: <Sparkles />,
      t: "Masculine Styling",
      d: "Industrial elegance with chrome, bronze and matte black.",
    },
    {
      icon: <Flame />,
      t: "Power & Motion",
      d: "A daily reminder that fuel still runs through your veins.",
    },
    {
      icon: <Cog />,
      t: "Emotional Anchor",
      d: "For petrolheads who feel what others only watch.",
    },
  ];
  return (
    <section className="relative z-10 py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel icon={<Heart />} text="WHY THEY LOVE IT" centered />
          <h2
            style={{ fontFamily: "Bebas Neue", fontSize: "clamp(34px,5vw,64px)" }}
            className="mt-4 leading-[0.95]"
          >
            BEYOND DECOR. <span className="text-[#ff6a18]">A FEELING.</span>
          </h2>
        </div>
        <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((i) => (
            <div
              key={i.t}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 md:p-7 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#ff6a18]/10 blur-3xl" />
              <div className="relative grid place-items-center h-12 w-12 rounded-xl bg-[#ff6a18]/15 text-[#ff6a18]">
                {i.icon}
              </div>
              <div className="relative mt-5 text-white">{i.t}</div>
              <div className="relative mt-2 text-sm text-white/55">{i.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Craftsmanship() {
  const steps = [
    { n: "01", t: "Selecting Genuine Automotive Parts", d: "Carefully sourced junk car parts, discarded engine pistons, and waste metal that would otherwise be forgotten." },
    { n: "02", t: "Deep Cleaning", d: "Removing oil, rust, and dirt buildup layer by layer." },
    { n: "03", t: "Surface Grinding & Restoration", d: "Bringing the metal back to life — sanded, smoothed, restored." },
    { n: "04", t: "Safe Treatment & Polishing", d: "Protective treatment and a hand-polished, premium finish." },
    { n: "05", t: "Precision Clock Fitting", d: "A silent quartz mechanism fitted with hand-tuned tolerance." },
    { n: "06", t: "Final Handcrafted Finishing", d: "Signed, inspected, ready for your wall." },
  ];
  return (
    <section
      id="craftsmanship"
      className="relative z-10 py-16 md:py-28 bg-gradient-to-b from-transparent via-[#0a0b0e] to-transparent"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <SectionLabel icon={<Hammer />} text="CRAFTSMANSHIP" />
            <h2
              style={{
                fontFamily: "Bebas Neue",
                fontSize: "clamp(36px,5vw,72px)",
              }}
              className="mt-4 leading-[0.95]"
            >
              SIX STEPS.
              <br /> <span className="text-[#ff6a18]">ZERO SHORTCUTS.</span>
            </h2>
            <p className="mt-5 text-white/60">
              Every product begins with carefully sourced junk car parts and
              forgotten engine components. Each piece takes time, effort,
              patience, and respect for the machine it once belonged to.
            </p>
            <div className="mt-8 aspect-video rounded-2xl overflow-hidden border border-white/10 relative">
              <ImageWithFallback
                src={ENGINE_IMG}
                alt="Engine"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-[#ff6a18]/0 via-[#ff6a18]/60 to-[#ff6a18]/0" />
            <div className="space-y-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="relative flex gap-4 md:gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4 md:p-6 hover:border-[#ff6a18]/40 transition"
                >
                  <div
                    className="relative grid place-items-center h-14 w-14 shrink-0 rounded-full bg-gradient-to-br from-[#1a1a1a] to-black border border-[#ff6a18]/40 text-[#ff6a18] shadow-[0_0_30px_rgba(255,106,24,0.3)]"
                    style={{ fontFamily: "Bebas Neue" }}
                  >
                    {s.n}
                  </div>
                  <div>
                    <div className="text-white">{s.t}</div>
                    <div className="text-sm text-white/55 mt-1">{s.d}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sustainability() {
  return (
    <section id="sustainability" className="relative z-10 py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative rounded-[28px] md:rounded-[40px] overflow-hidden border border-white/10 p-7 sm:p-10 md:p-16 bg-gradient-to-br from-[#0e0f12] via-[#0b0c0e] to-black">
          <div className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-[#ff6a18]/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionLabel icon={<Leaf />} text="SUSTAINABILITY" />
              <h2
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: "clamp(34px,5vw,72px)",
                }}
                className="mt-4 leading-[0.95]"
              >
                WASTE SHOULD NOT
                <br />
                <span className="text-[#ff6a18]">
                  ALWAYS BE THROWN AWAY.
                </span>
              </h2>
              <p className="mt-6 text-white/60">
                It can be reborn. By using junk car parts and discarded engine
                components, we help reduce unnecessary metal waste and give
                materials a second life. When you buy from us, you're not just
                buying decor — you're supporting sustainability, craftsmanship,
                and a cleaner future.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {[
                  "Reusing valuable metal resources",
                  "Reducing scrap waste in landfills",
                  "Encouraging creative recycling",
                  "Turning industrial waste into art",
                  "Inspiring responsible consumption",
                  "Honest, hand-made craftsmanship",
                ].map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-2 text-sm text-white/75"
                  >
                    <Leaf className="h-4 w-4 text-emerald-400" /> {p}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
              <ImageWithFallback
                src={METAL_IMG}
                alt="Sustainability"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-[#ff6a18]/20" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                <div className="grid place-items-center h-12 w-12 rounded-full bg-white/10 backdrop-blur border border-white/20">
                  <Recycle className="h-5 w-5 text-emerald-300" />
                </div>
                <div className="text-sm text-white/85">
                  100% upcycled material — verified sourcing.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: 2, l: "Pieces Crafted", s: "" },
    { v: 100, l: "Percent Handmade", s: "%" },
    { v: 0, l: "Mass Production", s: "" },
    { v: 1, l: "Founder · 1 Vision", s: "" },
  ];
  return (
    <section className="relative z-10 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {stats.map((s) => (
          <Counter key={s.l} {...s} />
        ))}
      </div>
    </section>
  );
}
function Counter({ v, l, s }: { v: number; l: string; s: string }) {
  const [n, setN] = useState(0);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!seen) return;
    const start = Date.now();
    const dur = 1800;
    const tick = () => {
      const p = Math.min(1, (Date.now() - start) / dur);
      setN(Math.floor(p * v));
      if (p < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [seen, v]);
  return (
    <motion.div
      onViewportEnter={() => setSeen(true)}
      viewport={{ once: true }}
      className="rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 md:p-7 text-center hover:border-[#ff6a18]/40 transition"
    >
      <div
        style={{ fontFamily: "Bebas Neue", fontSize: 56 }}
        className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none"
      >
        {n.toLocaleString()}
        {s}
      </div>
      <div className="text-xs tracking-[0.25em] text-white/50 mt-2">
        {l.toUpperCase()}
      </div>
    </motion.div>
  );
}

function ReviewsBuyButton() {
  const { openProduct } = useRouter();
  return (
    <button
      onClick={() => openProduct("black-piston")}
      className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#ff6a18]/40 bg-[#ff6a18]/10 px-6 py-3 text-white hover:bg-[#ff6a18]/20 transition"
    >
      Buy This Clock <ArrowRight className="h-4 w-4" />
    </button>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="relative z-10 py-16 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <SectionLabel icon={<Star />} text="REVIEWS" centered />
        <h2
          style={{ fontFamily: "Bebas Neue", fontSize: "clamp(34px,5vw,64px)" }}
          className="mt-4 leading-[0.95]"
        >
          BE AMONG THE <span className="text-[#ff6a18]">FIRST</span> SUPPORTERS
        </h2>
        <div className="mt-8 rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 md:p-10 relative overflow-hidden">
          <Quote className="absolute top-6 right-6 h-8 w-8 text-[#ff6a18]/25" />
          <div className="grid place-items-center mx-auto h-14 w-14 rounded-full bg-[#ff6a18]/15 text-[#ff6a18]">
            <Heart className="h-6 w-6" />
          </div>
          <p className="mt-6 text-white/75 leading-relaxed">
            Currently, customer reviews are not available because the journey
            has just begun. As orders grow, verified buyers will be able to
            share ratings, photos, and comments here in the future.
          </p>
          <p className="mt-4 text-[#ff6a18]">
            Be among the first supporters of this brand.
          </p>
          <ReviewsBuyButton />
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const { openProduct } = useRouter();
  const features = [
    "Genuine retired automobile engine piston",
    "Hand-painted matte black finish",
    "Deep-cleaned & restored by hand",
    "Reliable clock movement",
    "Certificate of authenticity included",
  ];
  return (
    <section id="shop" className="relative z-10 py-16 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <SectionLabel icon={<Award />} text="THE PRODUCT" centered />
          <h2
            style={{ fontFamily: "Bebas Neue", fontSize: "clamp(34px,5vw,64px)" }}
            className="mt-4 leading-[0.95]"
          >
            ONE CLOCK. ONE{" "}
            <span className="text-[#ff6a18]">PRICE.</span>
          </h2>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs tracking-widest text-white/60">
            <Truck className="h-3.5 w-3.5 text-[#ff6a18]" /> ONLY 2 PIECES MADE · HONEST PRICING · BUILT TO LAST
          </div>
        </div>

        <div className="relative rounded-2xl md:rounded-3xl border border-[#ff6a18]/40 bg-gradient-to-b from-[#ff6a18]/10 to-transparent p-6 sm:p-8 md:p-12 shadow-[0_0_80px_rgba(255,106,24,0.2)]">
          <div className="grid md:grid-cols-2 gap-7 md:gap-8 items-center">
            <div>
              <div className="text-xs tracking-[0.3em] text-white/40 mb-3">PISTON CLOCK</div>
              <div
                style={{ fontFamily: "Bebas Neue", fontSize: "clamp(48px,6vw,80px)" }}
                className="leading-none text-white"
              >
                ₹4,999
              </div>
              <div className="mt-1 text-xs text-white/40">Inclusive of all taxes · Free shipping in India</div>

              <ul className="mt-7 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/75">
                    <span className="mt-0.5 grid place-items-center h-5 w-5 shrink-0 rounded-full bg-[#ff6a18]/20 text-[#ff6a18] text-[10px]">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openProduct("black-piston")}
                  className="flex-1 rounded-2xl border border-white/20 bg-white/[0.05] py-4 text-white hover:bg-white/10 transition flex items-center justify-center gap-2"
                >
                  View Full Details
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="https://ig.me/m/mjb_garage_creations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-2xl bg-gradient-to-r from-[#ff6a18] to-[#b34700] py-4 text-white shadow-[0_0_30px_rgba(255,106,24,0.5)] hover:shadow-[0_0_50px_rgba(255,106,24,0.8)] transition flex items-center justify-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  Order on Instagram
                </a>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#161616] to-[#0a0a0a]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,106,24,0.2),transparent_65%)]" />
              <img
                src={img4433}
                alt="Piston Clock"
                className="absolute inset-0 m-auto h-full w-full object-cover drop-shadow-[0_10px_40px_rgba(255,106,24,0.3)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramGallery() {
  const { go } = useRouter();
  const imgs = [img4433, img4436, img4439, img4446];
  return (
    <section className="relative z-10 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <SectionLabel icon={<Sparkles />} text="THE COLLECTION" />
            <h3
              style={{
                fontFamily: "Bebas Neue",
                fontSize: "clamp(28px,4vw,52px)",
              }}
              className="mt-2 leading-[0.95]"
            >
              EVERY ANGLE OF THE PISTON
            </h3>
          </div>
          <button onClick={() => go("gallery")} className="text-sm text-white/60 hover:text-[#ff6a18] inline-flex items-center gap-2">
            Open Full Gallery <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-6 md:mt-8 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {imgs.map((src, i) => (
            <button
              key={i}
              onClick={() => go("gallery")}
              className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden border border-white/10 group bg-gradient-to-br from-[#141416] to-[#08090b] active:scale-95 transition-transform"
            >
              <img
                src={src}
                alt={`feed-${i}`}
                className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition grid place-items-center">
                <ArrowRight className="opacity-0 group-hover:opacity-100 h-6 w-6 text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Is it really made from a real piston?",
      a: "Yes — each clock starts as an authentic, retired automobile piston, sourced ethically from workshops and scrapyards.",
    },
    {
      q: "Does the clock work silently?",
      a: "Absolutely. We use Premium Clock Movements, Showing accurate timekeeping.",
    },
    {
      q: "Is each piece unique?",
      a: "Every piston has its own marks, story and serial number. Yours will not look like anyone else's.",
    },
    {
      q: "Can I customize my clock?",
      a: "Yes — After successful launch of the product, we will offer customization options.",
    },
    {
      q: "How long does delivery take?",
      a: "Standard orders: 7–10 business days. Worldwide shipping included.",
    },
    {
      q: "Is it heavy?",
      a: "It's a real piece of engine. Expect a solid, premium weight — typically 1.2–2 kg depending on the edition.",
    },
    {
      q: "What battery does it require?",
      a: "A single AA battery (included). Average life: 12+ months.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative z-10 py-16 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <SectionLabel icon={<ShieldCheck />} text="QUESTIONS" centered />
          <h2
            style={{ fontFamily: "Bebas Neue", fontSize: "clamp(34px,5vw,64px)" }}
            className="mt-4 leading-[0.95]"
          >
            EVERYTHING YOU WANT TO KNOW
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border transition ${
                  isOpen
                    ? "border-[#ff6a18]/40 bg-[#ff6a18]/5"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-white">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#ff6a18] transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-white/65 text-sm leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Urgency() {
  const { openProduct } = useRouter();
  return (
    <section className="relative z-10 py-12 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-[#ff6a18]/30 bg-gradient-to-r from-[#ff6a18]/15 via-black to-[#ff6a18]/10 p-7 sm:p-10 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,106,24,0.25),transparent_70%)]" />
          <div className="relative">
            <Flame className="mx-auto h-8 w-8 text-[#ff6a18]" />
            <h3
              style={{
                fontFamily: "Bebas Neue",
                fontSize: "clamp(28px,4.5vw,56px)",
              }}
              className="mt-3 leading-[0.95]"
            >
              ONLY{" "}
              <span className="text-[#ff6a18]">LIMITED HANDMADE PIECES</span>{" "}
              AVAILABLE EACH MONTH
            </h3>
            <p className="mt-3 text-white/65">
              When the batch ends, the next one waits weeks. Reserve yours now.
            </p>
            <button
              onClick={() => openProduct("black-piston")}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff6a18] to-[#b34700] px-7 py-4 text-white shadow-[0_0_40px_rgba(255,106,24,0.5)] hover:shadow-[0_0_60px_rgba(255,106,24,0.8)] transition"
            >
              Reserve My Clock <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative z-10 py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-10">
        <div>
          <SectionLabel icon={<Mail />} text="CONTACT" />
          <h2
            style={{ fontFamily: "Bebas Neue", fontSize: "clamp(34px,5vw,64px)" }}
            className="mt-4 leading-[0.95]"
          >
            LET'S BUILD YOUR <span className="text-[#ff6a18]">LEGACY</span>
          </h2>
          <p className="mt-5 text-white/60 max-w-md">
            Ready to order, customize, or just say hi? Reach out — your message
            lands directly in my inbox.
          </p>
          <div className="mt-8 space-y-3">
            {[
              { i: <Instagram />, l: "Instagram (Orders)", v: "@mjb_garage_creations" },
              { i: <Mail />, l: "Email", v: "rrtrail5176@gmail.com" },
              { i: <Phone />, l: "Phone", v: "+91 78926 08485" },
              { i: <MapPin />, l: "Workshop", v: "Bengaluru, Karnataka · India" },
            ].map((c) => (
              <div
                key={c.l}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-[#ff6a18]/40 transition"
              >
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-[#ff6a18]/15 text-[#ff6a18]">
                  {c.i}
                </div>
                <div>
                  <div className="text-xs text-white/40 tracking-widest">
                    {c.l.toUpperCase()}
                  </div>
                  <div className="text-white">{c.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 backdrop-blur"
        >
          <div className="text-xs tracking-[0.3em] text-white/40">
            ORDER INQUIRY
          </div>
          <div
            className="mt-1 text-white"
            style={{ fontFamily: "Bebas Neue", fontSize: 36 }}
          >
            TELL ME ABOUT YOUR DREAM PIECE
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Your Name" placeholder="John Doe" />
            <Field label="Email" placeholder="you@email.com" type="email" />
            <Field label="Phone" placeholder="+91 ..." />
            <Field
              label="Edition"
              placeholder="Standard / Polished / Custom"
            />
          </div>
          <div className="mt-4">
            <label className="block text-xs tracking-[0.25em] text-white/50 mb-2">
              MESSAGE
            </label>
            <textarea
              rows={4}
              placeholder="Tell me what you have in mind..."
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-[#ff6a18]/60 transition"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-gradient-to-r from-[#ff6a18] to-[#b34700] px-6 py-4 text-white shadow-[0_0_30px_rgba(255,106,24,0.45)] hover:shadow-[0_0_50px_rgba(255,106,24,0.75)] transition"
          >
            {sent ? "✓ Message sent — talk soon" : "Send Inquiry"}
          </button>
        </form> */}
      </div>
    </section>
  );
}
function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs tracking-[0.25em] text-white/50 mb-2">
        {label.toUpperCase()}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-[#ff6a18]/60 transition"
      />
    </div>
  );
}

function Footer() {
  const { go, page } = useRouter();
  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/60 backdrop-blur pt-12 md:pt-16 pb-8 mt-8 md:mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#ff6a18] to-[#1a1a1a] grid place-items-center">
              <Cog className="h-5 w-5 text-white" />
            </div>
            <div
              style={{ fontFamily: "Bebas Neue", fontSize: 22 }}
              className="tracking-[0.2em]"
            >
              PISTON & TIME
            </div>
          </div>
          <p className="mt-5 text-white/55 max-w-md leading-relaxed">
            Built with passion, engineering spirit, and respect for the planet.
            One piston, one clock, one story at a time.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, MessageCircle, Mail, Phone].map((I, i) => (
              <a
                key={i}
                href="#"
                className="grid place-items-center h-10 w-10 rounded-full border border-white/10 bg-white/[0.03] text-white/70 hover:text-[#ff6a18] hover:border-[#ff6a18]/40 transition"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs tracking-[0.3em] text-white/40">EXPLORE</div>
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            {NAV.map((n) => (
              <li key={n}>
                <a
                  href={`#${n.toLowerCase()}`}
                  onClick={(e) => {
                    if (n === "Gallery") {
                      e.preventDefault();
                      go("gallery");
                    } else if (page !== "home") {
                      e.preventDefault();
                      go("home");
                      setTimeout(() => document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: "smooth" }), 50);
                    }
                  }}
                  className="hover:text-[#ff6a18] cursor-pointer"
                >
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.3em] text-white/40">SUPPORT</div>
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            <li>Shipping & Returns</li>
            <li>Care Instructions</li>
            <li>Warranty</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/40">
        <div>© 2026 Piston & Time. All rights reserved.</div>
        <div>Forged in India · Loved worldwide</div>
      </div>
    </footer>
  );
}

function StickyBuy() {
  const { openProduct, page } = useRouter();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (page === "product") return null;
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={() => openProduct("black-piston")}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-[#ff6a18] to-[#b34700] pl-2 pr-5 sm:pr-6 py-2 text-white shadow-[0_0_40px_rgba(255,106,24,0.6)] text-sm"
        >
          <span className="grid place-items-center h-10 w-10 rounded-full bg-black/30">
            <Flame className="h-5 w-5" />
          </span>
          <span className="hidden sm:inline">Buy the Black Painted Piston Clock</span>
          <span className="sm:hidden">Buy Now — ₹3,999</span>
          <ArrowRight className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
function JourneyShopButton() {
  const { openProduct } = useRouter();
  return (
    <button
      onClick={() => openProduct("black-piston")}
      className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition"
    >
      Buy the Clock
    </button>
  );
}

function Journey() {
  const { go } = useRouter();
  return (
    <section id="journey" className="relative z-10 py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-center rounded-[28px] md:rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0d0e11] to-black p-6 sm:p-8 md:p-14 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#ff6a18]/10 blur-3xl" />
          <div className="lg:col-span-7 relative">
            <SectionLabel icon={<Flame />} text="THE JOURNEY" />
            <h2
              style={{ fontFamily: "Bebas Neue", fontSize: "clamp(34px,5vw,64px)" }}
              className="mt-4 leading-[0.95]"
            >
              FIRST STEP OF A <span className="text-[#ff6a18]">MUCH BIGGER</span> JOURNEY.
            </h2>
            <p className="mt-6 text-white/65 leading-relaxed">
              This brand has just started. Only{" "}
              <span className="text-white">2 handcrafted pieces</span> have been
              created so far. No fake mass production, no cheap duplicate
              materials, and no shortcuts. Every future product will be made
              with honesty, quality, and real effort.
            </p>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#ff6a18]/30 bg-[#ff6a18]/10 px-4 py-2 text-xs tracking-[0.25em] text-[#ffb277]">
              <Sparkles className="h-3.5 w-3.5" /> BUILT BY PASSION · POWERED BY
              MACHINES · CREATED WITH HONESTY
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => go("gallery")}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff6a18] to-[#b34700] px-6 py-3 text-white shadow-[0_0_30px_rgba(255,106,24,0.45)] hover:shadow-[0_0_50px_rgba(255,106,24,0.75)] transition"
              >
                See the Gallery <ArrowRight className="h-4 w-4" />
              </button>
              <JourneyShopButton />
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-black grid place-items-center p-8">
              <img
                src={img4433_1}
                alt="Piston Clock"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/80 backdrop-blur border border-white/10 px-4 py-2 text-xs tracking-widest text-white/80">
              EDITION 01 / 02
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryPage() {
  const { go, openProduct } = useRouter();
  const shots = [
    { label: "FRONT", img: img4433 },
    { label: "BACK",  img: img4436 },
    { label: "LEFT",  img: img4439 },
    { label: "RIGHT", img: img4446 },
  ];
  return (
    <main className="relative z-10 pt-28 pb-16 md:pt-32 md:pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <button
          onClick={() => go("home")}
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#ff6a18] transition"
        >
          <ArrowRight className="h-4 w-4 rotate-180" /> Back to Home
        </button>
        <div className="mt-6 flex items-end justify-between flex-wrap gap-6">
          <div>
            <SectionLabel icon={<Sparkles />} text="THE GALLERY" />
            <h1
              style={{ fontFamily: "Bebas Neue", fontSize: "clamp(44px,7vw,96px)" }}
              className="mt-3 leading-[0.95]"
            >
              EVERY ANGLE.
              <br /> <span className="text-[#ff6a18]">ONE CLOCK.</span>
            </h1>
            <p className="mt-4 max-w-xl text-white/60">
              Handcrafted from a real engine piston. See it from every angle —
              built with care, built to last.
            </p>
          </div>
          <button
            onClick={() => openProduct("black-piston")}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff6a18] to-[#b34700] px-6 py-3 text-white shadow-[0_0_30px_rgba(255,106,24,0.45)]"
          >
            Buy This Clock <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {shots.map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] aspect-[3/4]"
            >
              <img
                src={s.img}
                alt={s.label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent pt-8 pb-4 px-4">
                <div className="text-[10px] tracking-[0.35em] text-white/70">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-[32px] border border-[#ff6a18]/30 bg-gradient-to-r from-[#ff6a18]/15 via-black to-[#ff6a18]/10 p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,106,24,0.25),transparent_70%)]" />
          <div className="relative">
            <h3
              style={{ fontFamily: "Bebas Neue", fontSize: "clamp(28px,4.5vw,52px)" }}
              className="leading-[0.95]"
            >
              READY TO OWN A <span className="text-[#ff6a18]">PIECE OF HISTORY?</span>
            </h3>
            <p className="mt-3 text-white/65">Only 2 made. Many more coming. Reserve yours today.</p>
            <button
              onClick={() => openProduct("black-piston")}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff6a18] to-[#b34700] px-7 py-4 text-white shadow-[0_0_40px_rgba(255,106,24,0.5)]"
            >
              Buy This Clock <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionLabel({
  icon,
  text,
  centered,
}: {
  icon: React.ReactNode;
  text: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] tracking-[0.35em] text-white/60 ${
        centered ? "mx-auto" : ""
      }`}
    >
      <span className="text-[#ff6a18] [&>svg]:h-3.5 [&>svg]:w-3.5">{icon}</span>
      {text}
    </div>
  );
}
