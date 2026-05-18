import { r as reactExports, W as jsxRuntimeExports } from "./server-BI3iBxa8.js";
import { u as useNavigate, C as Cake, B as Button, L as Link, t as toast } from "./router-C_HRQ0YG.js";
import { I as Input } from "./input-CoMoqtWN.js";
import { L as Label } from "./label-C6NAxv3-.js";
import { s as supabase } from "./client-J3Urszne.js";
import { L as Lock } from "./lock-BelRO_Bo.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ResetPasswordPage() {
  const navigate = useNavigate();
  const [pw, setPw] = reactExports.useState("");
  const [pw2, setPw2] = reactExports.useState("");
  const [ready, setReady] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const {
      data: {
        subscription
      }
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") setReady(true);
    });
    supabase.auth.getSession().then(({
      data
    }) => {
      if (data.session) setReady(true);
    });
    return () => subscription.unsubscribe();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (pw !== pw2) {
      toast.error("Passwords don't match");
      return;
    }
    setLoading(true);
    const {
      error
    } = await supabase.auth.updateUser({
      password: pw
    });
    setLoading(false);
    if (error) {
      toast.error("Could not update password", {
        description: error.message
      });
      return;
    }
    toast.success("Password updated!", {
      description: "Please sign in with your new password."
    });
    await supabase.auth.signOut();
    navigate({
      to: "/login"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[80vh] overflow-hidden bg-gradient-hero", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-20 top-20 h-72 w-72 rounded-full bg-gradient-primary blur-3xl opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-gradient-primary blur-3xl opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto flex items-center justify-center px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "w-full max-w-md space-y-6 rounded-3xl glass-strong p-8 shadow-glow animate-fade-in md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cake, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-3xl font-bold", children: "Set new password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: ready ? "Choose a new password for your account." : "Validating your reset link…" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "pw", children: "New password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "pw", type: "password", required: true, minLength: 6, value: pw, onChange: (e) => setPw(e.target.value), placeholder: "••••••••", className: "rounded-full pl-10" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "pw2", children: "Confirm password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "pw2", type: "password", required: true, minLength: 6, value: pw2, onChange: (e) => setPw2(e.target.value), placeholder: "••••••••", className: "rounded-full pl-10" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", disabled: loading || !ready, className: "w-full rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 hover:shadow-glow", children: loading ? "Updating…" : "Update password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "font-medium text-primary hover:underline", children: "Back to sign in" }) })
    ] }) })
  ] });
}
export {
  ResetPasswordPage as component
};
