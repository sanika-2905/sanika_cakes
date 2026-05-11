import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Sanika Cakes" }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Get in touch</p>
        <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">Let's bake something sweet</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Have a custom order or a question? We'd love to hear from you.</p>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-1">
          {[
            { icon: MapPin, title: "Visit us", text: "R.K. Complex Boisar 401501" },
            { icon: Phone, title: "Call us", text: "+91 9130249492" },
            { icon: Mail, title: "Email", text: "sanikacakes20@gmail.com" },
            { icon: Clock, title: "Business hours", text: "Sun-Mon: 10 AM – 11 PM " },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-3xl glass p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground"><item.icon className="h-5 w-5" /></span>
              <div>
                <p className="font-display text-lg font-semibold">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
          <div className="flex items-start gap-4 rounded-3xl bg-gradient-primary p-5 text-primary-foreground shadow-glow">
            <Truck className="h-6 w-6 shrink-0" />
            <div>
              <p className="font-display text-lg font-semibold">Pickup Only</p>
              <p className="text-sm opacity-90">Delivery is not available. Please collect from our store.</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); toast.success("Message sent!", { description: "We'll get back to you shortly." }); }}
          className="space-y-5 rounded-3xl glass-strong p-8 shadow-card lg:col-span-2"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2"><Label>Name</Label><Input required placeholder="Your name" className="rounded-full" /></div>
            <div className="space-y-2"><Label>Email</Label><Input required type="email" placeholder="you@email.com" className="rounded-full" /></div>
          </div>
          <div className="space-y-2"><Label>Subject</Label><Input placeholder="Custom cake order" className="rounded-full" /></div>
          <div className="space-y-2"><Label>Message</Label><Textarea rows={6} placeholder="Tell us about your dream cake..." className="rounded-2xl" /></div>
          <Button type="submit" size="lg" className="rounded-full bg-gradient-primary px-8 text-primary-foreground hover:opacity-90 hover:shadow-glow">Send message</Button>
        </form>
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl shadow-card">
        <iframe
  title="Sanika Cakes location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.864223403243!2d72.7618062758172!3d19.80868802816538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71f7c17369871%3A0xd7cbc9c88a00472b!2sSanika%20Cake&#39;s!5e0!3m2!1sen!2sin!4v1715421520000!5m2!1sen!2sin" 
  className="h-[400px] w-full border-0"
  loading="lazy"
  
  referrerPolicy="no-referrer-when-downgrade"
/>
      </div>
    </div>
  );
}
