"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Rocket, Search, PlusCircle, Mail, Phone, MapPin } from "lucide-react";

interface Gig {
  id: string;
  title: string;
  category: string;
  location: string;
  pay: string;
  description: string;
  contact_email: string;
  created_at: string;
}

export default function HomePage() {
  const [gigs, setGigs] = useState<Gig[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ title: "", category: "Design", location: "Remote", pay: "", description: "", contactEmail: "" });
  const [contact, setContact] = useState({ name: "", email: "", message: "" });

  useEffect(() => { (async () => {
    const res = await fetch("/api/gigs");
    const data = await res.json();
    setGigs(data);
  })(); }, []);

  async function postGig(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/gigs", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    const data = await res.json();
    if (res.ok) setGigs([data, ...gigs]);
    setLoading(false);
  }

  async function sendContact(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(contact) });
    alert("Message sent!");
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <div className="sticky top-0 z-50 backdrop-blur border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow"><Rocket className="h-4 w-4" /></div>
            <span className="text-lg font-extrabold tracking-tight">GigaWorks</span>
          </a>
          <div className="hidden md:flex gap-4 text-sm">
            <a href="#board">Find Gigs</a>
            <a href="#post">Post</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold">Connecting Students with Gigs</h1>
        <p className="mt-4 text-muted-foreground">Hyperlocal tasks & freelance work with verified student workforce.</p>
      </section>

      {/* Gig Board */}
      <section id="board" className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Search className="h-5 w-5"/> Find Gigs</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {gigs.map((gig) => (
            <Card key={gig.id}>
              <CardContent className="p-4 space-y-2">
                <div className="text-xs text-muted-foreground">{gig.category} • {gig.location}</div>
                <h3 className="font-semibold">{gig.title}</h3>
                <p className="text-sm text-muted-foreground">{gig.description}</p>
                <div className="text-xs font-semibold">{gig.pay}</div>
                <Button asChild><a href={`mailto:${gig.contact_email}?subject=Gig Application: ${gig.title}`}>Apply</a></Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Post a Gig */}
      <section id="post" className="py-12 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><PlusCircle className="h-5 w-5"/> Post a Gig</h2>
        <form onSubmit={postGig} className="grid gap-4">
          <Input placeholder="Title" value={form.title} onChange={(e)=>setForm({...form, title: e.target.value})} />
          <Input placeholder="Pay" value={form.pay} onChange={(e)=>setForm({...form, pay: e.target.value})} />
          <Textarea placeholder="Description" value={form.description} onChange={(e)=>setForm({...form, description: e.target.value})} />
          <Input placeholder="Contact Email" value={form.contactEmail} onChange={(e)=>setForm({...form, contactEmail: e.target.value})} />
          <Button type="submit" disabled={loading}>{loading?"Publishing...":"Publish"}</Button>
        </form>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={sendContact} className="grid gap-4">
          <Input placeholder="Your Name" value={contact.name} onChange={(e)=>setContact({...contact, name: e.target.value})} />
          <Input placeholder="Email" value={contact.email} onChange={(e)=>setContact({...contact, email: e.target.value})} />
          <Textarea placeholder="Message" value={contact.message} onChange={(e)=>setContact({...contact, message: e.target.value})} />
          <Button type="submit">Send</Button>
        </form>
        <div className="mt-4 text-sm text-muted-foreground flex flex-col gap-2">
          <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> gigaworks.in@gmail.com</div>
          <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> 7899215715</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> India • Remote</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} GigaWorks. All rights reserved.</footer>
    </div>
  );
}
