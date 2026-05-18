import { W as jsxRuntimeExports } from "./server-BI3iBxa8.js";
import { c as createLucideIcon, e as MapPin, P as Phone, M as Mail, B as Button, t as toast } from "./router-C_HRQ0YG.js";
import { I as Input } from "./input-CoMoqtWN.js";
import { L as Label } from "./label-C6NAxv3-.js";
import { T as Textarea } from "./textarea-DRqGQf88.js";
import { T as Truck } from "./truck-u5UyHKgY.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode);
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-primary", children: "Get in touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-4xl font-bold md:text-5xl", children: "Let's bake something sweet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "Have a custom order or a question? We'd love to hear from you." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 lg:col-span-1", children: [
        [{
          icon: MapPin,
          title: "Visit us",
          text: "R.K. Complex Boisar 401501"
        }, {
          icon: Phone,
          title: "Call us",
          text: "+91 9130249492"
        }, {
          icon: Mail,
          title: "Email",
          text: "sanikacakes20@gmail.com"
        }, {
          icon: Clock,
          title: "Business hours",
          text: "Sun-Mon: 10 AM – 11 PM "
        }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-3xl glass p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: item.text })
          ] })
        ] }, item.title)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-3xl bg-gradient-primary p-5 text-primary-foreground shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-6 w-6 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold", children: "Pickup Only" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-90", children: "Delivery is not available. Please collect from our store." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        toast.success("Message sent!", {
          description: "We'll get back to you shortly."
        });
      }, className: "space-y-5 rounded-3xl glass-strong p-8 shadow-card lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, placeholder: "Your name", className: "rounded-full" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, type: "email", placeholder: "you@email.com", className: "rounded-full" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Custom cake order", className: "rounded-full" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 6, placeholder: "Tell us about your dream cake...", className: "rounded-2xl" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", className: "rounded-full bg-gradient-primary px-8 text-primary-foreground hover:opacity-90 hover:shadow-glow", children: "Send message" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 overflow-hidden rounded-3xl shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Sanika Cakes location", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.864223403243!2d72.7618062758172!3d19.80868802816538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71f7c17369871%3A0xd7cbc9c88a00472b!2sSanika%20Cake's!5e0!3m2!1sen!2sin!4v1715421520000!5m2!1sen!2sin", className: "h-[400px] w-full border-0", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })
  ] });
}
export {
  ContactPage as component
};
