import { Link } from "@tanstack/react-router";
import { Cake, Facebook, Instagram, MapPin, Phone, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-gradient-soft">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4">
        <div className="space-y-3">
          <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground"><Cake className="h-5 w-5" /></span>
            <span className="gradient-text">Sanika Cakes</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Handcrafted cakes baked with love. Order sweet happiness today.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="https://www.instagram.com/_sanika.cakes_?igsh=M3J1d21id2t1aXNm" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-gradient-primary hover:text-primary-foreground transition-all"><Instagram className="h-4 w-4" /></a>
            <a href="https://www.facebook.com/share/19syC5zBkU/" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-gradient-primary hover:text-primary-foreground transition-all"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/cakes" className="hover:text-primary">Cakes</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/cart" className="hover:text-primary">Cart</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> R.K Complex, Boisar</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +91 9130249492</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Notice</h4>
          <div className="rounded-2xl glass p-4 text-sm">
            <p className="font-semibold text-primary">Pickup Only</p>
            <p className="text-muted-foreground mt-1">Delivery is not available. Please collect your cake from our store.</p>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Sanika Cakes. All rights reserved.</p>
          <p className="flex items-center gap-1">Baked with <Heart className="h-3 w-3 fill-primary text-primary" /> in Boisar</p>
        </div>
      </div>
    </footer>
  );
}
