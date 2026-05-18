import { W as jsxRuntimeExports } from "./server-BI3iBxa8.js";
import { c as createLucideIcon, f as useCart, S as ShoppingBag, B as Button, L as Link, t as toast } from "./router-C_HRQ0YG.js";
import { M as Minus, P as Plus } from "./plus-DfdPOy-l.js";
import { T as Truck } from "./truck-u5UyHKgY.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function CartPage() {
  const {
    items,
    remove,
    setQty,
    total,
    clear
  } = useCart();
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-24 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md rounded-3xl glass-strong p-10 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-7 w-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-3xl font-bold", children: "Your cart is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Browse our menu and add some sweet treats." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "mt-6 rounded-full bg-gradient-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cakes", children: "Shop cakes" }) })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold md:text-5xl", children: "Your Cart" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-muted-foreground", children: [
      items.length,
      " item",
      items.length > 1 ? "s" : "",
      " ready to be picked up."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-8 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 lg:col-span-2", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "flex gap-4 rounded-3xl glass p-4 shadow-card transition-all hover:shadow-soft sm:p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.cake.image, alt: item.cake.name, className: "h-24 w-24 rounded-2xl object-cover sm:h-28 sm:w-28" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: item.cake.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                item.flavor,
                " • ",
                item.weight
              ] }),
              item.message && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs italic text-muted-foreground", children: [
                '"',
                item.message,
                '"'
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-lg font-bold gradient-text", children: [
              "₹",
              item.cake.price * item.quantity
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center rounded-full glass p-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-8 w-8 rounded-full", onClick: () => setQty(item.cake.id, item.quantity - 1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3 w-3" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center text-sm font-semibold", children: item.quantity }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-8 w-8 rounded-full", onClick: () => setQty(item.cake.id, item.quantity + 1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "rounded-full text-muted-foreground hover:text-destructive", onClick: () => {
              remove(item.cake.id);
              toast("Removed from cart");
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
          ] })
        ] })
      ] }, item.cake.id + item.flavor + item.weight)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "h-fit space-y-4 rounded-3xl glass-strong p-6 shadow-card lg:sticky lg:top-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Order summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "₹",
              total
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Pickup" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium", children: "Free" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Taxes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Included" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-lg font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "gradient-text font-display", children: [
            "₹",
            total
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 rounded-2xl bg-gradient-primary p-3 text-xs text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-4 w-4 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Pickup Only." }),
            " Delivery is not available."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", onClick: () => toast.success("Checkout coming soon!", {
          description: "Payments will be enabled shortly."
        }), className: "w-full rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 hover:shadow-glow", children: "Proceed to checkout" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: clear, className: "w-full rounded-full text-muted-foreground", children: "Clear cart" })
      ] })
    ] })
  ] });
}
export {
  CartPage as component
};
