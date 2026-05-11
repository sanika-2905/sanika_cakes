import { Link, useRouterState } from "@tanstack/react-router";
import { Cake, Menu, Moon, ShoppingBag, Sun, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useTheme } from "@/contexts/ThemeContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/cakes", label: "Cakes" },
  { to: "/contact", label: "Contact" },
  { to: "/login", label: "Login" },
];

export function Header() {
  const { count } = useCart();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  return (
    <header className="sticky top-0 z-50 glass-strong">
      <div className="container mx-auto flex h-18 items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-soft">
            <Cake className="h-5 w-5" />
          </span>
          <span className="gradient-text">Sanika Cakes</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = location.pathname === l.to || (l.to !== "/" && location.pathname.startsWith(l.to));
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-accent ${active ? "bg-accent text-accent-foreground" : "text-foreground/80"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme" className="rounded-full">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" aria-label="Cart" className="rounded-full">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gradient-primary px-1 text-xs font-semibold text-primary-foreground shadow-soft">
                {count}
              </span>
            )}
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden rounded-full" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {open && (
        <div className="border-t md:hidden animate-fade-in">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/signup" onClick={() => setOpen(false)} className="rounded-xl bg-gradient-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground">
              Sign up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
