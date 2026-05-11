import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { getCake } from "@/data/cakes";
import { toast } from "sonner";

export const Route = createFileRoute("/cakes/$cakeId")({
  component: CakeDetail,
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-bold">Cake not found</h1>
      <Link to="/cakes" className="mt-4 inline-block text-primary underline">Back to all cakes</Link>
    </div>
  ),
  loader: ({ params }) => {
    const cake = getCake(params.cakeId);
    if (!cake) throw notFound();
    return { cake };
  },
});

const reviews = [
  { name: "Meera", rating: 5, text: "Absolutely stunning. Tasted as good as it looked!" },
  { name: "Karan", rating: 5, text: "Best cake we've ever ordered. Highly recommend." },
  { name: "Sneha", rating: 4, text: "Beautifully decorated and very fresh." },
];

function CakeDetail() {
  const { cake } = Route.useLoaderData();
  const { add } = useCart();
  const [flavor, setFlavor] = useState(cake.flavors[0]);
  const [weight, setWeight] = useState(cake.weights[0]);
  const [qty, setQty] = useState(1);
  const [message, setMessage] = useState("");

  const handleAdd = () => {
    add({ cake, quantity: qty, flavor, weight, message });
    toast.success("Added to cart", { description: `${cake.name} • ${flavor} • ${weight}` });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link to="/cakes" className="hover:text-primary">Cakes</Link> <span className="mx-1">/</span> <span>{cake.name}</span>
      </nav>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-primary opacity-25 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] bg-card shadow-card">
            <img src={cake.image} alt={cake.name} width={800} height={800} className="w-full" />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <span className="rounded-full glass px-3 py-1 text-xs font-medium">{cake.category}</span>
            <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">{cake.name}</h1>
            <div className="mt-3 flex items-center gap-3">
              <span className="font-display text-3xl font-bold gradient-text">₹{cake.price}</span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-primary text-primary" /> {cake.rating} (124 reviews)
              </span>
            </div>
            <p className="mt-4 text-muted-foreground">{cake.description}</p>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-semibold">Flavor</Label>
            <div className="flex flex-wrap gap-2">
              {cake.flavors.map((f: string) => (
                <button key={f} onClick={() => setFlavor(f)} className={`rounded-full px-4 py-2 text-sm transition-all ${flavor === f ? "bg-gradient-primary text-primary-foreground shadow-soft" : "glass hover:bg-accent"}`}>{f}</button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-semibold">Weight</Label>
            <div className="flex flex-wrap gap-2">
              {cake.weights.map((w: string) => (
                <button key={w} onClick={() => setWeight(w)} className={`rounded-full px-4 py-2 text-sm transition-all ${weight === w ? "bg-gradient-primary text-primary-foreground shadow-soft" : "glass hover:bg-accent"}`}>{w}</button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-semibold">Quantity</Label>
            <div className="inline-flex items-center rounded-full glass p-1">
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9" onClick={() => setQty((q) => Math.max(1, q - 1))}><Minus className="h-4 w-4" /></Button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9" onClick={() => setQty((q) => q + 1)}><Plus className="h-4 w-4" /></Button>
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-semibold" htmlFor="msg">Message on cake (optional)</Label>
            <Textarea id="msg" placeholder="Happy Birthday Sanika!" value={message} onChange={(e) => setMessage(e.target.value)} className="rounded-2xl" />
          </div>

          <div className="rounded-2xl glass p-4 text-sm">
            <p><span className="font-semibold text-primary">Pickup Only.</span> Delivery is not available. Please collect from our store.</p>
          </div>

          <Button size="lg" onClick={handleAdd} className="w-full rounded-full bg-gradient-primary text-primary-foreground shadow-soft hover:opacity-90 hover:shadow-glow">
            <ShoppingBag className="h-5 w-5" /> Add to Cart — ₹{cake.price * qty}
          </Button>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="font-display text-3xl font-bold">Reviews</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-3xl glass p-6 shadow-card">
              <div className="mb-2 flex gap-1">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
              <p className="text-sm text-muted-foreground">"{r.text}"</p>
              <p className="mt-3 font-semibold">{r.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
