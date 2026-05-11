import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cake as CakeIcon, Heart, Sparkles, Star, Truck } from "lucide-react";
import heroImg from "@/assets/hero-cake.jpg";
import { Button } from "@/components/ui/button";
import { CakeCard } from "@/components/site/CakeCard";
import { cakes } from "@/data/cakes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanika Cakes — Order Sweet Happiness" },
      { name: "description", content: "Luxurious handcrafted pink bakery cakes for birthdays, weddings and more. Pickup only." },
    ],
  }),
  component: HomePage,
});

const testimonials = [
  { name: "Ananya R.", text: "The rose bloom cake was a showstopper at my birthday — soft, beautiful and so flavourful!", rating: 5 },
  { name: "Priya M.", text: "Our wedding cake was everything we dreamed of. Sanika's craft is pure art.", rating: 5 },
  { name: "Rohan S.", text: "Best chocolate cake in town. The drip is unreal and the sponge is so moist.", rating: 5 },
];

function HomePage() {
  const featured = cakes.filter((c) => c.featured);
  const trending = cakes.filter((c) => c.trending);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-hero">
        <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div className="space-y-6 animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Handcrafted with love
            </span>
            <h1 className="font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Order <span className="gradient-text">Sweet</span><br />
              Happiness
            </h1>
            <p className="max-w-md text-lg text-muted-foreground">
              Luxurious pink bakery cakes baked fresh every morning. Birthdays, weddings, photo & custom — made just for you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-gradient-primary px-8 text-primary-foreground shadow-soft hover:opacity-90 hover:shadow-glow">
                <Link to="/cakes">Shop Cakes <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
            <div className="flex gap-6 pt-4">
              <div><p className="font-display text-2xl font-bold gradient-text">500+</p><p className="text-xs text-muted-foreground">Happy clients</p></div>
              <div><p className="font-display text-2xl font-bold gradient-text">50+</p><p className="text-xs text-muted-foreground">Cake designs</p></div>
              <div><p className="font-display text-2xl font-bold gradient-text">4.9★</p><p className="text-xs text-muted-foreground">Avg. rating</p></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-primary blur-3xl opacity-40" />
            <img
              src={heroImg}
              alt="Pink luxury cake with chocolate drip and macarons"
              width={1536}
              height={1280}
              className="mx-auto w-full max-w-lg rounded-[2.5rem] object-cover shadow-glow"
              style={{ animation: "float 6s ease-in-out infinite" }}
            />
            <div className="absolute -left-4 top-10 hidden rounded-2xl glass-strong p-3 shadow-card md:flex items-center gap-2">
              <Heart className="h-4 w-4 fill-primary text-primary" />
              <span className="text-xs font-medium">Baked fresh daily</span>
            </div>
            <div className="absolute -right-2 bottom-10 hidden rounded-2xl glass-strong p-3 shadow-card md:flex items-center gap-2">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-xs font-medium">5-star bakery</span>
            </div>
          </div>
        </div>
      </section>

      {/* PICKUP NOTICE BAR */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto flex items-center justify-center gap-3 px-4 py-3 text-sm font-medium">
          <Truck className="h-4 w-4" /> Pickup Only — Delivery Not Available
        </div>
      </div>

      {/* FEATURED */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Featured</p>
            <h2 className="mt-2 font-display text-4xl font-bold">Our signature creations</h2>
          </div>
          <Button asChild variant="ghost" className="rounded-full">
            <Link to="/cakes">View all <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => <CakeCard key={c.id} cake={c} />)}
        </div>
      </section>

      {/* TRENDING CAROUSEL */}
      <section className="bg-gradient-soft py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Trending</p>
            <h2 className="mt-2 font-display text-4xl font-bold">Crowd favorites this week</h2>
          </div>
        </div>
        <div className="overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="container mx-auto flex gap-6 px-4 snap-x snap-mandatory">
            {trending.map((c) => (
              <div key={c.id} className="w-[280px] shrink-0 snap-start sm:w-[320px]">
                <CakeCard cake={c} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container mx-auto grid gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
          <div className="rounded-3xl glass p-2 shadow-card">
            <img src={heroImg} alt="Sanika bakery" loading="lazy" width={800} height={800} className="rounded-2xl" />
          </div>
        </div>
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Sanika</p>
          <h2 className="font-display text-4xl font-bold">A boutique bakery built on love & sugar</h2>
          <p className="text-muted-foreground">
            Sanika Cakes is a tiny pink-hued atelier where every cake is hand-piped, hand-painted and baked fresh on the morning of pickup. We use single-origin chocolate, real vanilla and seasonal fruit — never shortcuts.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {["Premium ingredients", "Eggless options", "Custom designs", "Same-day pickup"].map((f) => (
              <li key={f} className="flex items-center gap-2 rounded-2xl glass px-4 py-3 text-sm">
                <CakeIcon className="h-4 w-4 text-primary" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="mt-2 font-display text-4xl font-bold">Sweet words from sweet people</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl glass p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-3 flex gap-1">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
              <p className="text-sm text-muted-foreground">"{t.text}"</p>
              <p className="mt-4 font-display font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFFERS */}
      <section className="container mx-auto px-4 pb-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-primary p-10 text-primary-foreground shadow-glow md:p-16">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest opacity-80">Special offer</p>
              <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">15% off your first cake</h2>
              <p className="mt-3 max-w-md opacity-90">Use code <span className="rounded-md bg-white/20 px-2 py-0.5 font-mono">SWEET15</span> at checkout. Pickup only.</p>
            </div>
            <div className="flex md:justify-end">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                <Link to="/cakes">Order now <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
