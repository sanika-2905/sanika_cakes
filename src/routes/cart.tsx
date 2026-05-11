import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — Sanika Cakes" }] }),
  component: CartPage,
});

function CartPage() {
  const { items, remove, setQty, total, clear } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="mx-auto max-w-md rounded-3xl glass-strong p-10 shadow-card">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground"><ShoppingBag className="h-7 w-7" /></span>
          <h1 className="mt-4 font-display text-3xl font-bold">Your cart is empty</h1>
          <p className="mt-2 text-muted-foreground">Browse our menu and add some sweet treats.</p>
          <Button asChild size="lg" className="mt-6 rounded-full bg-gradient-primary text-primary-foreground"><Link to="/cakes">Shop cakes</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-display text-4xl font-bold md:text-5xl">Your Cart</h1>
      <p className="mt-2 text-muted-foreground">{items.length} item{items.length > 1 ? "s" : ""} ready to be picked up.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <article key={item.cake.id + item.flavor + item.weight} className="flex gap-4 rounded-3xl glass p-4 shadow-card transition-all hover:shadow-soft sm:p-5">
              <img src={item.cake.image} alt={item.cake.name} className="h-24 w-24 rounded-2xl object-cover sm:h-28 sm:w-28" />
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold">{item.cake.name}</h3>
                    <p className="text-xs text-muted-foreground">{item.flavor} • {item.weight}</p>
                    {item.message && <p className="text-xs italic text-muted-foreground">"{item.message}"</p>}
                  </div>
                  <p className="font-display text-lg font-bold gradient-text">₹{item.cake.price * item.quantity}</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="inline-flex items-center rounded-full glass p-1">
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full" onClick={() => setQty(item.cake.id, item.quantity - 1)}><Minus className="h-3 w-3" /></Button>
                    <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full" onClick={() => setQty(item.cake.id, item.quantity + 1)}><Plus className="h-3 w-3" /></Button>
                  </div>
                  <Button size="icon" variant="ghost" className="rounded-full text-muted-foreground hover:text-destructive" onClick={() => { remove(item.cake.id); toast("Removed from cart"); }}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="h-fit space-y-4 rounded-3xl glass-strong p-6 shadow-card lg:sticky lg:top-24">
          <h2 className="font-display text-2xl font-bold">Order summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>₹{total}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Pickup</span><span className="text-primary font-medium">Free</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Taxes</span><span>Included</span></div>
          </div>
          <hr />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="gradient-text font-display">₹{total}</span>
          </div>
          <div className="flex items-start gap-2 rounded-2xl bg-gradient-primary p-3 text-xs text-primary-foreground">
            <Truck className="h-4 w-4 shrink-0" />
            <p><span className="font-semibold">Pickup Only.</span> Delivery is not available.</p>
          </div>
          <Button size="lg" onClick={() => toast.success("Checkout coming soon!", { description: "Payments will be enabled shortly." })} className="w-full rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 hover:shadow-glow">
            Proceed to checkout
          </Button>
          <Button variant="ghost" onClick={clear} className="w-full rounded-full text-muted-foreground">Clear cart</Button>
        </aside>
      </div>
    </div>
  );
}
