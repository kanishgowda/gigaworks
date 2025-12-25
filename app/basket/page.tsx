"use client";

import { useCart } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { IndianRupee } from "lucide-react";

export default function BasketPage() {
    const { cart, removeFromCart, cartTotal } = useCart();

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto max-w-5xl pt-32 pb-20 px-4">

                <div className="flex items-center gap-3 mb-8">
                    <ShoppingBag className="text-primary h-8 w-8" />
                    <h1 className="font-display text-3xl font-bold text-white">Your Basket</h1>
                </div>

                {cart.length === 0 ? (
                    <div className="text-center py-20 bg-zinc-900 border border-white/5 rounded-2xl">
                        <ShoppingBag className="mx-auto h-12 w-12 text-zinc-600 mb-4" />
                        <h2 className="text-xl font-bold text-white mb-2">Your basket is empty</h2>
                        <p className="text-zinc-400 mb-6">Looks like you haven't booked any gigs yet.</p>
                        <Link href="/gigs">
                            <Button>Browse Gigs</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Cart Items */}
                        <div className="flex-1 space-y-4">
                            {cart.map((gig) => (
                                <div key={gig.id} className="bg-zinc-900 border border-white/5 rounded-xl p-4 flex justify-between items-center group hover:border-white/10 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg flex items-center justify-center text-2xl">
                                            {gig.category === 'Creative' ? '🎨' : '⚡'}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white group-hover:text-primary transition-colors">{gig.title}</h3>
                                            <p className="text-sm text-zinc-400">Fixed Price • {gig.isRemote ? 'Remote' : 'On-site'}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <p className="font-bold text-white text-lg flex items-center"><IndianRupee size={16} />{gig.price}</p>
                                        <button
                                            onClick={() => removeFromCart(gig.id)}
                                            className="p-2 text-zinc-500 hover:text-red-400 transition-colors"
                                            title="Remove"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="lg:w-80">
                            <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6 sticky top-24">
                                <h3 className="font-bold text-white text-lg mb-6">Summary</h3>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-zinc-400 text-sm">
                                        <span>Subtotal ({cart.length} items)</span>
                                        <span>₹{cartTotal}</span>
                                    </div>
                                    <div className="flex justify-between text-zinc-400 text-sm">
                                        <span>Service Fee (5%)</span>
                                        <span>₹{(cartTotal * 0.05).toFixed(2)}</span>
                                    </div>
                                    <div className="border-t border-white/5 pt-3 flex justify-between text-white font-bold text-lg">
                                        <span>Total</span>
                                        <span>₹{(cartTotal * 1.05).toFixed(2)}</span>
                                    </div>
                                </div>

                                <Link href="/checkout">
                                    <Button className="w-full h-12 text-lg">
                                        Checkout <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                                <p className="text-xs text-zinc-500 text-center mt-4">Safe & Secure Payment</p>
                            </div>
                        </div>

                    </div>
                )}

            </main>
            <Footer />
        </div>
    );
}
