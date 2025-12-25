"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { CATEGORIES } from "@/lib/types";
import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { AIInput } from "@/components/ui/AIInput";

export default function PostGigPage() {
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert("Gig Posted Successfully! (Demo)");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto max-w-3xl pt-32 pb-20 px-4">
                <div className="text-center mb-10">
                    <h1 className="font-display text-4xl font-bold text-white mb-4">Post a Gig</h1>
                    <p className="text-zinc-400">Connect with talent in minutes.</p>
                </div>

                <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-8">

                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-white">Gig Title</label>
                            <input
                                type="text"
                                required
                                placeholder="e.g. Need a logo design for my startup"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-white">Category</label>
                                <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors appearance-none">
                                    {CATEGORIES.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-white">Budget (₹)</label>
                                <input
                                    type="number"
                                    required
                                    placeholder="e.g. 5000"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-white">Description</label>
                            <AIInput
                                placeholder="Describe what you need done... (Try 'AI Write'!)"
                                value={description}
                                onChange={setDescription}
                                onGenerate={setDescription}
                                multiline
                            />
                        </div>

                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-white">Attachments (Optional)</label>
                            <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:bg-white/5 transition-colors cursor-pointer">
                                <UploadCloud className="mx-auto h-8 w-8 text-zinc-500 mb-2" />
                                <p className="text-sm text-zinc-400">Click to upload files</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button type="submit" size="lg" className="w-full" isLoading={loading}>Post Gig Now</Button>
                        </div>

                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
