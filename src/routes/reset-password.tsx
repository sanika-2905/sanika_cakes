import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Cake, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  head: () => ({ meta: [{ title: "Reset password — Sanika Cakes" }] }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Supabase parses the recovery token from URL hash automatically.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") setReady(true);
    });
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setReady(true);
    });
    return () => subscription.unsubscribe();
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pw !== pw2) {
      toast.error("Passwords don't match");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: pw });
    setLoading(false);
    if (error) {
      toast.error("Could not update password", { description: error.message });
      return;
    }
    toast.success("Password updated!", { description: "Please sign in with your new password." });
    await supabase.auth.signOut();
    navigate({ to: "/login" });
  };

  return (
    <div className="relative min-h-[80vh] overflow-hidden bg-gradient-hero">
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-gradient-primary blur-3xl opacity-30" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-gradient-primary blur-3xl opacity-30" />
      <div className="container mx-auto flex items-center justify-center px-4 py-16">
        <form onSubmit={onSubmit} className="w-full max-w-md space-y-6 rounded-3xl glass-strong p-8 shadow-glow animate-fade-in md:p-10">
          <div className="text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft"><Cake className="h-7 w-7" /></span>
            <h1 className="mt-4 font-display text-3xl font-bold">Set new password</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {ready ? "Choose a new password for your account." : "Validating your reset link…"}
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="pw">New password</Label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="pw" type="password" required minLength={6} value={pw} onChange={(e) => setPw(e.target.value)} placeholder="••••••••" className="rounded-full pl-10" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="pw2">Confirm password</Label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="pw2" type="password" required minLength={6} value={pw2} onChange={(e) => setPw2(e.target.value)} placeholder="••••••••" className="rounded-full pl-10" />
            </div>
          </div>
          <Button type="submit" size="lg" disabled={loading || !ready} className="w-full rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 hover:shadow-glow">
            {loading ? "Updating…" : "Update password"}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            <Link to="/login" className="font-medium text-primary hover:underline">Back to sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
