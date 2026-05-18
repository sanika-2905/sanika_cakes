import { r as reactExports, W as jsxRuntimeExports } from "./server-BI3iBxa8.js";
import { u as useNavigate, C as Cake, B as Button, L as Link, t as toast } from "./router-C_HRQ0YG.js";
import { I as Input } from "./input-CoMoqtWN.js";
import { L as Label } from "./label-C6NAxv3-.js";
import { s as supabase } from "./client-J3Urszne.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function SignupPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    pw: "",
    pw2: ""
  });
  const set = (k) => (e) => setForm((f) => ({
    ...f,
    [k]: e.target.value
  }));
  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.pw !== form.pw2) {
      toast.error("Passwords don't match");
      return;
    }
    setLoading(true);
    const {
      error
    } = await supabase.auth.signUp({
      email: form.email,
      password: form.pw,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: {
          full_name: form.name,
          phone: form.phone,
          birthday: form.dob
        }
      }
    });
    setLoading(false);
    if (error) {
      toast.error("Sign up failed", {
        description: error.message
      });
      return;
    }
    toast.success("Account created!", {
      description: "Please sign in to continue 🎂"
    });
    navigate({
      to: "/login"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[80vh] overflow-hidden bg-gradient-hero", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-20 top-20 h-72 w-72 rounded-full bg-gradient-primary blur-3xl opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-gradient-primary blur-3xl opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto flex items-center justify-center px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "w-full max-w-lg space-y-5 rounded-3xl glass-strong p-8 shadow-glow animate-fade-in md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cake, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-3xl font-bold", children: "Join Sanika Cakes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Create your sweet account in seconds." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Full name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", required: true, value: form.name, onChange: set("name"), placeholder: "Sanika Sharma", className: "rounded-full" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", required: true, value: form.email, onChange: set("email"), placeholder: "you@email.com", className: "rounded-full" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "phone", type: "tel", value: form.phone, onChange: set("phone"), placeholder: "+91 98765 43210", className: "rounded-full" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dob", children: "Birthday" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "dob", type: "date", value: form.dob, onChange: set("dob"), className: "rounded-full" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "pw", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "pw", type: "password", required: true, minLength: 6, value: form.pw, onChange: set("pw"), placeholder: "••••••••", className: "rounded-full" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "pw2", children: "Confirm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "pw2", type: "password", required: true, minLength: 6, value: form.pw2, onChange: set("pw2"), placeholder: "••••••••", className: "rounded-full" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", disabled: loading, className: "w-full rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 hover:shadow-glow", children: loading ? "Creating…" : "Create account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground", children: [
        "Already have an account? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "font-medium text-primary hover:underline", children: "Sign in" })
      ] })
    ] }) })
  ] });
}
export {
  SignupPage as component
};
