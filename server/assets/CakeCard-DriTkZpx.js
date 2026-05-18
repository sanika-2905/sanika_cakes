import { W as jsxRuntimeExports } from "./server-BI3iBxa8.js";
import { c as createLucideIcon, f as useCart, L as Link, B as Button, S as ShoppingBag, t as toast } from "./router-C_HRQ0YG.js";
import { S as Star } from "./star-B_MtuGxc.js";
const __iconNode = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode);
function CakeCard({ cake }) {
  const { add } = useCart();
  const handleAdd = () => {
    add({ cake, quantity: 1, flavor: cake.flavors[0], weight: cake.weights[0] });
    toast.success(`${cake.name} added to cart`, { description: `${cake.flavors[0]} • ${cake.weights[0]}` });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cakes/$cakeId", params: { cakeId: cake.id }, className: "relative block aspect-square overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: cake.image,
          alt: cake.name,
          loading: "lazy",
          width: 800,
          height: 800,
          className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-xs font-medium", children: cake.category }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute right-4 top-4 flex items-center gap-1 rounded-full glass-strong px-3 py-1 text-xs font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-primary text-primary" }),
        " ",
        cake.rating
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-3 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold leading-tight", children: cake.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "whitespace-nowrap font-display text-lg font-bold gradient-text", children: [
          "₹",
          cake.price
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: cake.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleAdd, className: "flex-1 rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 hover:shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4" }),
          " Add"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cakes/$cakeId", params: { cakeId: cake.id }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }),
          " View"
        ] }) })
      ] })
    ] })
  ] });
}
export {
  CakeCard as C
};
