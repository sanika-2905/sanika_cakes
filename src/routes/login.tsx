import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Cake, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — Sanika Cakes" }] }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast.error("Sign in failed", { description: error.message });
      return;
    }
    toast.success("Welcome back!", { description: email });
    navigate({ to: "/" });
  };

  return (
    <div className="relative min-h-[80vh] overflow-hidden bg-gradient-hero">
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-gradient-primary blur-3xl opacity-30" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-gradient-primary blur-3xl opacity-30" />
      <div className="container mx-auto flex items-center justify-center px-4 py-16">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md space-y-6 rounded-3xl glass-strong p-8 shadow-glow animate-fade-in md:p-10"
        >
          <div className="text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft"><Cake className="h-7 w-7" /></span>
            <h1 className="mt-4 font-display text-3xl font-bold">Welcome back</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to continue ordering sweet happiness.</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className="rounded-full pl-10" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="rounded-full pl-10" />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2"><Checkbox /> <span>Remember me</span></label>
            <Link to="/forgot-password" className="text-primary hover:underline">Forgot password?</Link>
          </div>
          <Button type="submit" size="lg" disabled={loading} className="w-full rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 hover:shadow-glow">
            {loading ? "Signing in…" : "Sign in"}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            New here? <Link to="/signup" className="font-medium text-primary hover:underline">Create account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
