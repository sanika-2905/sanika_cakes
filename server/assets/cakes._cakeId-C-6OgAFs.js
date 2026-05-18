import { r as reactExports, W as jsxRuntimeExports } from "./server-BI3iBxa8.js";
import { R as Route, f as useCart, L as Link, B as Button, S as ShoppingBag, t as toast } from "./router-C_HRQ0YG.js";
import { L as Label } from "./label-C6NAxv3-.js";
import { T as Textarea } from "./textarea-DRqGQf88.js";
import { S as Star } from "./star-B_MtuGxc.js";
import { M as Minus, P as Plus } from "./plus-DfdPOy-l.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const reviews = [{
  name: "Meera",
  rating: 5,
  text: "Absolutely stunning. Tasted as good as it looked!"
}, {
  name: "Karan",
  rating: 5,
  text: "Best cake we've ever ordered. Highly recommend."
}, {
  name: "Sneha",
  rating: 4,
  text: "Beautifully decorated and very fresh."
}];
function CakeDetail() {
  const {
    cake
  } = Route.useLoaderData();
  const {
    add
  } = useCart();
  const [flavor, setFlavor] = reactExports.useState(cake.flavors[0]);
  const [weight, setWeight] = reactExports.useState(cake.weights[0]);
  const [qty, setQty] = reactExports.useState(1);
  const [message, setMessage] = reactExports.useState("");
  const handleAdd = () => {
    add({
      cake,
      quantity: qty,
      flavor,
      weight,
      message
    });
    toast.success("Added to cart", {
      description: `${cake.name} • ${flavor} • ${weight}`
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mb-6 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cakes", className: "hover:text-primary", children: "Cakes" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1", children: "/" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cake.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-primary opacity-25 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-[2rem] bg-card shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cake.image, alt: cake.name, width: 800, height: 800, className: "w-full" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full glass px-3 py-1 text-xs font-medium", children: cake.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: cake.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-3xl font-bold gradient-text", children: [
              "₹",
              cake.price
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-primary text-primary" }),
              " ",
              cake.rating,
              " (124 reviews)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: cake.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Flavor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: cake.flavors.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFlavor(f), className: `rounded-full px-4 py-2 text-sm transition-all ${flavor === f ? "bg-gradient-primary text-primary-foreground shadow-soft" : "glass hover:bg-accent"}`, children: f }, f)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Weight" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: cake.weights.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setWeight(w), className: `rounded-full px-4 py-2 text-sm transition-all ${weight === w ? "bg-gradient-primary text-primary-foreground shadow-soft" : "glass hover:bg-accent"}`, children: w }, w)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Quantity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center rounded-full glass p-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "rounded-full h-9 w-9", onClick: () => setQty((q) => Math.max(1, q - 1)), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 text-center font-semibold", children: qty }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "rounded-full h-9 w-9", onClick: () => setQty((q) => q + 1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", htmlFor: "msg", children: "Message on cake (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "msg", placeholder: "Happy Birthday Sanika!", value: message, onChange: (e) => setMessage(e.target.value), className: "rounded-2xl" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl glass p-4 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "Pickup Only." }),
          " Delivery is not available. Please collect from our store."
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", onClick: handleAdd, className: "w-full rounded-full bg-gradient-primary text-primary-foreground shadow-soft hover:opacity-90 hover:shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5" }),
          " Add to Cart — ₹",
          cake.price * qty
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold", children: "Reviews" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 md:grid-cols-3", children: reviews.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass p-6 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 flex gap-1", children: Array.from({
          length: r.rating
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-primary text-primary" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          '"',
          r.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-semibold", children: r.name })
      ] }, r.name)) })
    ] })
  ] });
}
export {
  CakeDetail as component
};
