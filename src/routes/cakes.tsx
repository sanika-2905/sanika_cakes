import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { CakeCard } from "@/components/site/CakeCard";
import { Input } from "@/components/ui/input";
import { cakes, categories, type CakeCategory } from "@/data/cakes";

export const Route = createFileRoute("/cakes")({
  head: () => ({
    meta: [
      { title: "All Cakes — Sanika Cakes" },
      { name: "description", content: "Browse birthday, wedding, chocolate, photo, cupcake and custom cakes from Sanika Cakes." },
    ],
  }),
  component: CakesPage,
});

function CakesPage() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<CakeCategory | "All">("All");

  const filtered = useMemo(() => {
    return cakes.filter((c) => {
      const matchesCat = active === "All" || c.category === active;
      const matchesQ = c.name.toLowerCase().includes(q.toLowerCase()) || c.description.toLowerCase().includes(q.toLowerCase());
      return matchesCat && matchesQ;
    });
  }, [q, active]);

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our menu</p>
        <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">All Cakes</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Pick your favourite. Customise the flavour, size and message on the next page.</p>
      </header>

      <div className="sticky top-20 z-30 mb-8 rounded-3xl glass-strong p-3 shadow-card">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search cakes..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="h-11 rounded-full border-0 bg-background/60 pl-11"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(["All", ...categories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${active === c ? "bg-gradient-primary text-primary-foreground shadow-soft" : "glass hover:bg-accent"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl glass p-12 text-center">
          <p className="font-display text-2xl font-semibold">No cakes match your search</p>
          <p className="mt-2 text-muted-foreground">Try a different keyword or category.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => <CakeCard key={c.id} cake={c} />)}
        </div>
      )}
    </div>
  );
}
