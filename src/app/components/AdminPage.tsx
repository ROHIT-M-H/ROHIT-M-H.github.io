import { useRef, useState } from "react";
import {
  ArrowLeft,
  Plus,
  Trash2,
  Pencil,
  Upload,
  X,
  Save,
  RotateCcw,
  ImageIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import {
  formatPrice,
  useProducts,
  type Product,
} from "../data/products";

const EMPTY: Omit<Product, "id"> = {
  name: "",
  subtitle: "",
  price: 0,
  images: [],
  features: [""],
  description: "",
  stock: 1,
  rating: 0,
  reviews: 0,
  badge: "",
};

/** Read a File into a base64 data URL so it persists in localStorage. */
function fileToDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function AdminPage({ onBack }: { onBack: () => void }) {
  const { products, saveProduct, deleteProduct, nextId, resetProducts } = useProducts();
  const [editing, setEditing] = useState<Product | null>(null);
  const [creating, setCreating] = useState(false);

  const startCreate = () => {
    setEditing({ id: nextId(), ...EMPTY });
    setCreating(true);
  };
  const startEdit = (p: Product) => {
    setEditing({ ...p, features: [...p.features], images: [...p.images] });
    setCreating(false);
  };
  const close = () => {
    setEditing(null);
    setCreating(false);
  };

  return (
    <main className="relative z-10 pt-24 pb-20 md:pt-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#ff6a18] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </button>
          <button
            onClick={() => {
              if (confirm("Reset all products back to the original 4 defaults?")) {
                resetProducts();
                close();
              }
            }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/50 hover:text-white transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset to Defaults
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] tracking-[0.35em] text-white/60">
              ADMIN · PRODUCT MANAGER
            </div>
            <h1
              style={{ fontFamily: "Bebas Neue", fontSize: "clamp(36px,5vw,64px)" }}
              className="mt-3 leading-[0.95]"
            >
              MANAGE YOUR <span className="text-[#ff6a18]">CLOCKS</span>
            </h1>
            <p className="mt-2 text-sm text-white/45 max-w-md">
              Add, edit, or remove products. Everything is saved to this browser —
              upload photos, set the price, and it goes live on the shop instantly.
            </p>
          </div>
          <button
            onClick={startCreate}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff6a18] to-[#b34700] px-6 py-3 text-white shadow-[0_0_30px_rgba(255,106,24,0.45)] hover:shadow-[0_0_50px_rgba(255,106,24,0.7)] transition-shadow"
          >
            <Plus className="h-4 w-4" /> Add Product
          </button>
        </div>

        {/* Product list */}
        <div className="mt-8 space-y-3">
          {products.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-3 sm:p-4"
            >
              <div className="h-16 w-16 shrink-0 rounded-xl overflow-hidden bg-black/40 border border-white/10 grid place-items-center">
                {p.images[0] ? (
                  <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover" />
                ) : (
                  <ImageIcon className="h-5 w-5 text-white/20" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#ff6a18]/15 px-1.5 py-0.5 text-[10px] tracking-widest text-[#ff6a18]">
                    #{p.id}
                  </span>
                  <span className="truncate text-white">{p.name}</span>
                </div>
                <div className="mt-1 text-xs text-white/45">
                  {formatPrice(p.price)} · Stock {p.stock}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(p)}
                  className="grid place-items-center h-9 w-9 rounded-lg border border-white/10 bg-white/[0.03] text-white/60 hover:text-[#ff6a18] transition-colors"
                  aria-label="Edit"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Delete "${p.name}"?`)) deleteProduct(p.id);
                  }}
                  className="grid place-items-center h-9 w-9 rounded-lg border border-white/10 bg-white/[0.03] text-white/60 hover:text-rose-400 transition-colors"
                  aria-label="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {editing && (
          <EditorModal
            key="editor"
            product={editing}
            isNew={creating}
            onClose={close}
            onSave={(p) => {
              saveProduct(p);
              close();
            }}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function EditorModal({
  product,
  isNew,
  onClose,
  onSave,
}: {
  product: Product;
  isNew: boolean;
  onClose: () => void;
  onSave: (p: Product) => void;
}) {
  const [draft, setDraft] = useState<Product>(product);
  const [busy, setBusy] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const set = (patch: Partial<Product>) => setDraft((d) => ({ ...d, ...patch }));

  async function onFiles(files: FileList | null) {
    if (!files || !files.length) return;
    setBusy(true);
    try {
      const urls = await Promise.all(Array.from(files).map(fileToDataURL));
      set({ images: [...draft.images, ...urls] });
    } finally {
      setBusy(false);
      if (fileInput.current) fileInput.current.value = "";
    }
  }

  const valid = draft.name.trim() && draft.price > 0 && draft.images.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] grid place-items-end sm:place-items-center bg-black/70 backdrop-blur-sm p-0 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-white/10 bg-[#0c0d10] p-6 sm:p-8"
      >
        <div className="flex items-center justify-between">
          <h2 style={{ fontFamily: "Bebas Neue", fontSize: 32 }} className="leading-none">
            {isNew ? "NEW PRODUCT" : "EDIT PRODUCT"}
            <span className="ml-2 text-[#ff6a18]">#{draft.id}</span>
          </h2>
          <button
            onClick={onClose}
            className="grid place-items-center h-9 w-9 rounded-full border border-white/10 text-white/60 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Images */}
        <div className="mt-6">
          <FieldLabel>Product Photos</FieldLabel>
          <div className="grid grid-cols-4 gap-2">
            {draft.images.map((src, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden border border-white/10 group"
              >
                <img src={src} alt={`img-${i}`} className="h-full w-full object-cover" />
                <button
                  onClick={() => set({ images: draft.images.filter((_, j) => j !== i) })}
                  className="absolute top-1 right-1 grid place-items-center h-6 w-6 rounded-full bg-black/70 text-white/80 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-3 w-3" />
                </button>
                {i === 0 && (
                  <span className="absolute bottom-1 left-1 rounded bg-[#ff6a18]/90 px-1.5 py-0.5 text-[9px] tracking-widest text-white">
                    MAIN
                  </span>
                )}
              </div>
            ))}
            <button
              onClick={() => fileInput.current?.click()}
              className="aspect-square rounded-xl border border-dashed border-white/20 bg-white/[0.02] grid place-items-center text-white/40 hover:text-[#ff6a18] hover:border-[#ff6a18]/40 transition-colors"
            >
              {busy ? (
                <span className="text-[10px]">Loading…</span>
              ) : (
                <div className="flex flex-col items-center gap-1">
                  <Upload className="h-5 w-5" />
                  <span className="text-[10px]">Upload</span>
                </div>
              )}
            </button>
          </div>
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => onFiles(e.target.files)}
          />
          <p className="mt-2 text-[11px] text-white/35">
            First photo is the main image shown on the shop card. Tap a photo's × to remove it.
          </p>
        </div>

        {/* Text fields */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <Text label="Product Name" value={draft.name} onChange={(v) => set({ name: v })} full />
          <Text
            label="Subtitle"
            value={draft.subtitle}
            onChange={(v) => set({ subtitle: v })}
            full
          />
          <Num label="Price (₹)" value={draft.price} onChange={(v) => set({ price: v })} />
          <Num label="Stock" value={draft.stock} onChange={(v) => set({ stock: v })} />
          <Text
            label="Badge (optional)"
            value={draft.badge ?? ""}
            onChange={(v) => set({ badge: v })}
            placeholder="Bestseller / New / Limited"
          />
        </div>

        <div className="mt-4">
          <FieldLabel>Description</FieldLabel>
          <textarea
            rows={4}
            value={draft.description}
            onChange={(e) => set({ description: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#ff6a18]/60 transition-colors"
          />
        </div>

        {/* Features */}
        <div className="mt-4">
          <FieldLabel>Feature List</FieldLabel>
          <div className="space-y-2">
            {draft.features.map((f, i) => (
              <div key={i} className="flex gap-2">
                <input
                  value={f}
                  onChange={(e) => {
                    const copy = [...draft.features];
                    copy[i] = e.target.value;
                    set({ features: copy });
                  }}
                  placeholder={`Feature ${i + 1}`}
                  className="flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#ff6a18]/60 transition-colors"
                />
                <button
                  onClick={() => set({ features: draft.features.filter((_, j) => j !== i) })}
                  className="grid place-items-center h-10 w-10 shrink-0 rounded-xl border border-white/10 text-white/50 hover:text-rose-400 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
            <button
              onClick={() => set({ features: [...draft.features, ""] })}
              className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-[#ff6a18] transition-colors"
            >
              <Plus className="h-3.5 w-3.5" /> Add feature
            </button>
          </div>
        </div>

        {/* Save */}
        <div className="mt-8 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-2xl border border-white/15 bg-white/[0.03] py-3.5 text-white/80 hover:bg-white/10 transition-colors"
          >
            Cancel
          </button>
          <button
            disabled={!valid}
            onClick={() =>
              onSave({
                ...draft,
                features: draft.features.map((f) => f.trim()).filter(Boolean),
                badge: draft.badge?.trim() || undefined,
              })
            }
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff6a18] to-[#b34700] py-3.5 text-white shadow-[0_0_30px_rgba(255,106,24,0.45)] disabled:opacity-40 disabled:shadow-none transition-all"
          >
            <Save className="h-4 w-4" /> {isNew ? "Publish" : "Save Changes"}
          </button>
        </div>
        {!valid && (
          <p className="mt-2 text-center text-[11px] text-white/35">
            Add a name, a price, and at least one photo to publish.
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs tracking-[0.25em] text-white/50 mb-2">
      {String(children).toUpperCase()}
    </label>
  );
}

function Text({
  label,
  value,
  onChange,
  placeholder,
  full,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <FieldLabel>{label}</FieldLabel>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#ff6a18]/60 transition-colors"
      />
    </div>
  );
}

function Num({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        type="number"
        inputMode="numeric"
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white outline-none focus:border-[#ff6a18]/60 transition-colors"
      />
    </div>
  );
}
