import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CATALOG } from "./catalog";

export type Product = {
  id: string; // "001", "002", ...
  name: string;
  subtitle: string;
  price: number;
  images: string[]; // imported photos (URLs) or base64 data URLs
  features: string[];
  description: string;
  stock: number;
  badge?: string; // e.g. "Bestseller", "New", "Limited Edition"
  rating?: number; // 0..5 — optional, defaults to 0 (no reviews yet)
  reviews?: number; // optional, defaults to 0
};

export const IG_ORDER_URL = "https://ig.me/m/mjb_garage_creations";

export const formatPrice = (n: number) => "₹" + n.toLocaleString("en-IN");

/**
 * The product catalog comes straight from src/app/data/catalog.ts (your code).
 * That means it is the single source of truth: whatever is in that file is what
 * every visitor sees online, and no visitor can change it.
 *
 * The (hidden) admin panel still lets you preview edits, but those live only in
 * the current browser session — to change what customers see, edit catalog.ts
 * and redeploy.
 */
export const DEFAULT_PRODUCTS: Product[] = CATALOG;

type ProductsCtx = {
  products: Product[];
  getProduct: (id: string) => Product | undefined;
  saveProduct: (p: Product) => void;
  deleteProduct: (id: string) => void;
  nextId: () => string;
  resetProducts: () => void;
};

const Ctx = createContext<ProductsCtx | null>(null);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(CATALOG);

  const getProduct = useCallback(
    (id: string) => products.find((p) => p.id === id),
    [products]
  );

  const saveProduct = useCallback((p: Product) => {
    setProducts((prev) => {
      const idx = prev.findIndex((x) => x.id === p.id);
      if (idx === -1) return [...prev, p];
      const copy = [...prev];
      copy[idx] = p;
      return copy;
    });
  }, []);

  const deleteProduct = useCallback((id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const nextId = useCallback(() => {
    const max = products.reduce((m, p) => {
      const n = parseInt(p.id, 10);
      return Number.isFinite(n) && n > m ? n : m;
    }, 0);
    return String(max + 1).padStart(3, "0");
  }, [products]);

  const resetProducts = useCallback(() => setProducts(CATALOG), []);

  const value = useMemo(
    () => ({ products, getProduct, saveProduct, deleteProduct, nextId, resetProducts }),
    [products, getProduct, saveProduct, deleteProduct, nextId, resetProducts]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useProducts() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useProducts must be used within ProductsProvider");
  return ctx;
}
