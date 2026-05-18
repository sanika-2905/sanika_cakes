import { r as reactExports, W as jsxRuntimeExports } from "./server-BI3iBxa8.js";
import { C as Cake, M as Mail, B as Button, L as Link, t as toast } from "./router-C_HRQ0YG.js";
import { I as Input } from "./input-CoMoqtWN.js";
import { L as Label } from "./label-C6NAxv3-.js";
import { s as supabase } from "./client-J3Urszne.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ForgotPasswordPage() {
  const [email, setEmail] = reactExports.useState("");
  const [sent, setSent] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const {
      error
    } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    });
    setLoading(false);
    if (error) {
      toast.error("Could not send email", {
        description: error.message
      });
      return;
    }
    setSent(true);
    toast.success("Reset link sent!", {
      description: "Check your inbox."
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[80vh] overflow-hidden bg-gradient-hero", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-20 top-20 h-72 w-72 rounded-full bg-gradient-primary blur-3xl opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-gradient-primary blur-3xl opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto flex items-center justify-center px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "w-full max-w-md space-y-6 rounded-3xl glass-strong p-8 shadow-glow animate-fade-in md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cake, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-3xl font-bold", children: "Forgot password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: sent ? "We've sent a reset link to your email." : "Enter your email and we'll send a reset link." })
      ] }),
      !sent && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "you@email.com", className: "rounded-full pl-10" })
        ] })
      ] }),
      !sent && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", disabled: loading, className: "w-full rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 hover:shadow-glow", children: loading ? "Sending…" : "Send reset link" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground", children: [
        "Remembered it? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "font-medium text-primary hover:underline", children: "Back to sign in" })
      ] })
    ] }) })
  ] });
}
export {
  ForgotPasswordPage as component
};
