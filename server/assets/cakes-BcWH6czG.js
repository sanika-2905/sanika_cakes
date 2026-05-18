import { r as reactExports, W as jsxRuntimeExports } from "./server-BI3iBxa8.js";
import { C as CakeCard } from "./CakeCard-DriTkZpx.js";
import { I as Input } from "./input-CoMoqtWN.js";
import { c as createLucideIcon, g as cakes, h as categories } from "./router-C_HRQ0YG.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./star-B_MtuGxc.js";
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
function CakesPage() {
  const [q, setQ] = reactExports.useState("");
  const [active, setActive] = reactExports.useState("All");
  const filtered = reactExports.useMemo(() => {
    return cakes.filter((c) => {
      const matchesCat = active === "All" || c.category === active;
      const matchesQ = c.name.toLowerCase().includes(q.toLowerCase()) || c.description.toLowerCase().includes(q.toLowerCase());
      return matchesCat && matchesQ;
    });
  }, [q, active]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-primary", children: "Our menu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-4xl font-bold md:text-5xl", children: "All Cakes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "Pick your favourite. Customise the flavour, size and message on the next page." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-20 z-30 mb-8 rounded-3xl glass-strong p-3 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Search cakes...", value: q, onChange: (e) => setQ(e.target.value), className: "h-11 rounded-full border-0 bg-background/60 pl-11" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["All", ...categories].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(c), className: `rounded-full px-4 py-2 text-xs font-medium transition-all ${active === c ? "bg-gradient-primary text-primary-foreground shadow-soft" : "glass hover:bg-accent"}`, children: c }, c)) })
    ] }) }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass p-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-semibold", children: "No cakes match your search" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Try a different keyword or category." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: filtered.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(CakeCard, { cake: c }, c.id)) })
  ] });
}
export {
  CakesPage as component
};
