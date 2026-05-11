import { Link } from "@tanstack/react-router";
import { Eye, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import type { Cake } from "@/data/cakes";
import { useCart } from "@/contexts/CartContext";

export function CakeCard({ cake }: { cake: Cake }) {
  const { add } = useCart();
  const handleAdd = () => {
    add({ cake, quantity: 1, flavor: cake.flavors[0], weight: cake.weights[0] });
    toast.success(`${cake.name} added to cart`, { description: `${cake.flavors[0]} • ${cake.weights[0]}` });
  };
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
      <Link to="/cakes/$cakeId" params={{ cakeId: cake.id }} className="relative block aspect-square overflow-hidden">
        <img
          src={cake.image}
          alt={cake.name}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-xs font-medium">{cake.category}</span>
        <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full glass-strong px-3 py-1 text-xs font-medium">
          <Star className="h-3 w-3 fill-primary text-primary" /> {cake.rating}
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-tight">{cake.name}</h3>
          <span className="whitespace-nowrap font-display text-lg font-bold gradient-text">₹{cake.price}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{cake.description}</p>
        <div className="mt-auto flex gap-2 pt-2">
          <Button onClick={handleAdd} className="flex-1 rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 hover:shadow-soft">
            <ShoppingBag className="h-4 w-4" /> Add
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/cakes/$cakeId" params={{ cakeId: cake.id }}>
              <Eye className="h-4 w-4" /> View
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
