"use client";

import { use, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { MOCK_GIGS } from "@/lib/data/gigs";
import { MapPin, Clock, IndianRupee, Share2, CheckCircle2, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { useCart } from "@/context/CartContext";

export default function GigDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const gig = MOCK_GIGS.find((g) => g.id === id);
    const [isApplying, setIsApplying] = useState(false);
    const { addToCart } = useCart();

    if (!gig) {
        return notFound();
    }

    const handleAddToCart = () => {
        addToCart(gig);
        setIsApplying(true);
        setTimeout(() => setIsApplying(false), 2000);
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="container mx-auto max-w-5xl pt-32 pb-20 px-4">
                <Link href="/gigs" className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Gigs
                </Link>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* MAIN COLUMN */}
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
                            <div className="flex gap-4 mb-6">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-800 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-primary/20">
                                    {gig.category === 'Creative' ? '🎨' : gig.category === 'Tech' ? '💻' : '⚡'}
                                </div>
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{gig.title}</h1>
                                    <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                                        <span className="flex items-center gap-1"><MapPin size={14} /> {gig.isRemote ? 'Remote' : gig.location}</span>
                                        <span className="flex items-center gap-1"><Clock size={14} /> Posted {new Date(gig.postedAt).toLocaleDateString()}</span>
                                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-medium">{gig.category}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3">Description</h3>
                                    <p className="text-zinc-300 leading-relaxed">{gig.description}</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3">Requirements</h3>
                                    <ul className="space-y-2">
                                        {/* Mock Requirements based on tags */}
                                        {gig.tags.map(tag => (
                                            <li key={tag} className="flex items-center gap-2 text-zinc-300">
                                                <CheckCircle2 size={16} className="text-primary" />
                                                <span>Experience with {tag}</span>
                                            </li>
                                        ))}
                                        <li className="flex items-center gap-2 text-zinc-300">
                                            <CheckCircle2 size={16} className="text-primary" />
                                            <span>Available to start immediately</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <div className="space-y-6">
                        {/* Action Card */}
                        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6 sticky top-24">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <p className="text-sm text-zinc-400">Budget</p>
                                    <p className="text-3xl font-bold text-green-400 flex items-center"><IndianRupee size={24} />{gig.price}</p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded">Fixed Price</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Button
                                    className="w-full h-12 text-lg"
                                    onClick={handleAddToCart}
                                    disabled={isApplying}
                                >
                                    {isApplying ? 'Added to Basket' : 'Add to Basket'}
                                </Button>
                                <Button variant="outline" className="w-full border-white/10 hover:bg-white/5" onClick={() => alert("Link copied to clipboard!")}>
                                    <Share2 size={16} className="mr-2" /> Share Gig
                                </Button>
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/5">
                                <h4 className="text-sm font-bold text-white mb-4">About the Client</h4>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-400">
                                        {gig.postedBy.name[0]}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white flex items-center gap-1">
                                            {gig.postedBy.name}
                                            {gig.postedBy.verified && <ShieldCheck size={14} className="text-blue-400" />}
                                        </p>
                                        <p className="text-xs text-zinc-500">Member since 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
