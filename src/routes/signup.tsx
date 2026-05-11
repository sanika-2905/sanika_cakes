import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Cake } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign up — Sanika Cakes" }] }),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", dob: "", pw: "", pw2: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.pw !== form.pw2) {
      toast.error("Passwords don't match");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.pw,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: { full_name: form.name, phone: form.phone, birthday: form.dob },
      },
    });
    setLoading(false);
    if (error) {
      toast.error("Sign up failed", { description: error.message });
      return;
    }
    toast.success("Account created!", { description: "Please sign in to continue 🎂" });
    navigate({ to: "/login" });
  };

  return (
    <div className="relative min-h-[80vh] overflow-hidden bg-gradient-hero">
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-gradient-primary blur-3xl opacity-30" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-gradient-primary blur-3xl opacity-30" />
      <div className="container mx-auto flex items-center justify-center px-4 py-16">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-lg space-y-5 rounded-3xl glass-strong p-8 shadow-glow animate-fade-in md:p-10"
        >
          <div className="text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft"><Cake className="h-7 w-7" /></span>
            <h1 className="mt-4 font-display text-3xl font-bold">Join Sanika Cakes</h1>
            <p className="mt-1 text-sm text-muted-foreground">Create your sweet account in seconds.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" required value={form.name} onChange={set("name")} placeholder="Sanika Sharma" className="rounded-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={form.email} onChange={set("email")} placeholder="you@email.com" className="rounded-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" className="rounded-full" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="dob">Birthday</Label>
              <Input id="dob" type="date" value={form.dob} onChange={set("dob")} className="rounded-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pw">Password</Label>
              <Input id="pw" type="password" required minLength={6} value={form.pw} onChange={set("pw")} placeholder="••••••••" className="rounded-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pw2">Confirm</Label>
              <Input id="pw2" type="password" required minLength={6} value={form.pw2} onChange={set("pw2")} placeholder="••••••••" className="rounded-full" />
            </div>
          </div>
          <Button type="submit" size="lg" disabled={loading} className="w-full rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 hover:shadow-glow">
            {loading ? "Creating…" : "Create account"}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="font-medium text-primary hover:underline">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
