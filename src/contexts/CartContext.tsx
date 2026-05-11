import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import type { Cake } from "@/data/cakes";

export interface CartItem {
  cake: Cake;
  quantity: number;
  flavor: string;
  weight: string;
  message?: string;
}

interface CartCtx {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  total: number;
  count: number;
}

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem("sanika-cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("sanika-cart", JSON.stringify(items));
  }, [items]);

  const add = (item: CartItem) => {
    setItems((prev) => {
      const idx = prev.findIndex(
        (i) => i.cake.id === item.cake.id && i.flavor === item.flavor && i.weight === item.weight,
      );
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + item.quantity };
        return next;
      }
      return [...prev, item];
    });
  };
  const remove = (id: string) => setItems((p) => p.filter((i) => i.cake.id !== id));
  const setQty = (id: string, qty: number) =>
    setItems((p) => p.map((i) => (i.cake.id === id ? { ...i, quantity: Math.max(1, qty) } : i)));
  const clear = () => setItems([]);

  const total = items.reduce((s, i) => s + i.cake.price * i.quantity, 0);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <Ctx.Provider value={{ items, add, remove, setQty, clear, total, count }}>
      {children}
    </Ctx.Provider>
  );
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
};
