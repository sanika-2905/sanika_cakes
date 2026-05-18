import { W as jsxRuntimeExports } from "./server-BI3iBxa8.js";
import { c as createLucideIcon, g as cakes, B as Button, L as Link, H as Heart, C as Cake } from "./router-C_HRQ0YG.js";
import { C as CakeCard } from "./CakeCard-DriTkZpx.js";
import { S as Star } from "./star-B_MtuGxc.js";
import { T as Truck } from "./truck-u5UyHKgY.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
const heroImg = "/sanika_cakes/assets/hero-cake-BU0c7oCP.jpg";
const testimonials = [{
  name: "Ananya R.",
  text: "The rose bloom cake was a showstopper at my birthday — soft, beautiful and so flavourful!",
  rating: 5
}, {
  name: "Priya M.",
  text: "Our wedding cake was everything we dreamed of. Sanika's craft is pure art.",
  rating: 5
}, {
  name: "Rohan S.",
  text: "Best chocolate cake in town. The drip is unreal and the sponge is so moist.",
  rating: 5
}];
function HomePage() {
  const featured = cakes.filter((c) => c.featured);
  const trending = cakes.filter((c) => c.trending);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
          " Handcrafted with love"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl font-bold leading-[1.05] md:text-7xl", children: [
          "Order ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Sweet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Happiness"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-lg text-muted-foreground", children: "Luxurious pink bakery cakes baked fresh every morning. Birthdays, weddings, photo & custom — made just for you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "rounded-full bg-gradient-primary px-8 text-primary-foreground shadow-soft hover:opacity-90 hover:shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cakes", children: [
            "Shop Cakes ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "rounded-full px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Contact us" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold gradient-text", children: "500+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Happy clients" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold gradient-text", children: "50+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Cake designs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold gradient-text", children: "4.9★" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Avg. rating" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 rounded-full bg-gradient-primary blur-3xl opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Pink luxury cake with chocolate drip and macarons", width: 1536, height: 1280, className: "mx-auto w-full max-w-lg rounded-[2.5rem] object-cover shadow-glow", style: {
          animation: "float 6s ease-in-out infinite"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -left-4 top-10 hidden rounded-2xl glass-strong p-3 shadow-card md:flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 fill-primary text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: "Baked fresh daily" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -right-2 bottom-10 hidden rounded-2xl glass-strong p-3 shadow-card md:flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-primary text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: "5-star bakery" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex items-center justify-center gap-3 px-4 py-3 text-sm font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-4 w-4" }),
      " Pickup Only — Delivery Not Available"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-primary", children: "Featured" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl font-bold", children: "Our signature creations" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", className: "rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cakes", children: [
          "View all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: featured.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(CakeCard, { cake: c }, c.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-soft py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-primary", children: "Trending" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl font-bold", children: "Crowd favorites this week" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto flex gap-6 px-4 snap-x snap-mandatory", children: trending.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[280px] shrink-0 snap-start sm:w-[320px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CakeCard, { cake: c }) }, c.id)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto grid gap-10 px-4 py-20 md:grid-cols-2 md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 -z-10 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl glass p-2 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Sanika bakery", loading: "lazy", width: 800, height: 800, className: "rounded-2xl" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-primary", children: "About Sanika" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold", children: "A boutique bakery built on love & sugar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Sanika Cakes is a tiny pink-hued atelier where every cake is hand-piped, hand-painted and baked fresh on the morning of pickup. We use single-origin chocolate, real vanilla and seasonal fruit — never shortcuts." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-3 sm:grid-cols-2", children: ["Premium ingredients", "Eggless options", "Custom designs", "Same-day pickup"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 rounded-2xl glass px-4 py-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cake, { className: "h-4 w-4 text-primary" }),
          " ",
          f
        ] }, f)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-primary", children: "Testimonials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl font-bold", children: "Sweet words from sweet people" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex gap-1", children: Array.from({
          length: t.rating
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-primary text-primary" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display font-semibold", children: t.name })
      ] }, t.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl bg-gradient-primary p-10 text-primary-foreground shadow-glow md:p-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2 md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest opacity-80", children: "Special offer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl font-bold md:text-5xl", children: "15% off your first cake" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 max-w-md opacity-90", children: [
          "Use code ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-white/20 px-2 py-0.5 font-mono", children: "SWEET15" }),
          " at checkout. Pickup only."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex md:justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "secondary", className: "rounded-full px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cakes", children: [
        "Order now ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) }) })
    ] }) }) })
  ] });
}
export {
  HomePage as component
};
