"use client";

import { useCart } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ArrowRight, User, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { IndianRupee } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const { cart, cartTotal } = useCart();
    const router = useRouter();

    if (cart.length === 0) {
        // Redirect or show empty state if accessed directly
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-bold mb-4">Your basket is empty</h1>
                    <Link href="/gigs"><Button>Browse Gigs</Button></Link>
                </div>
            </div>
        );
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/payment");
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto max-w-5xl pt-32 pb-20 px-4">

                <h1 className="font-display text-3xl font-bold text-white mb-8">Checkout</h1>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Billing Form */}
                    <div className="flex-1">
                        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
                            <h2 className="text-xl font-bold text-white mb-6">Billing Details</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-sm text-zinc-400 mb-2 block">First Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                                            <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-10 py-3 text-white focus:outline-none focus:border-primary/50" placeholder="John" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm text-zinc-400 mb-2 block">Last Name</label>
                                        <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50" placeholder="Doe" required />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm text-zinc-400 mb-2 block">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                                        <input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-10 py-3 text-white focus:outline-none focus:border-primary/50" placeholder="john@example.com" required />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm text-zinc-400 mb-2 block">Billing Address</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-3 text-zinc-500 w-4 h-4" />
                                        <textarea className="w-full bg-black/20 border border-white/10 rounded-xl px-10 py-3 text-white focus:outline-none focus:border-primary/50 min-h-[100px]" placeholder="Street Address, City, Zip Code" required />
                                    </div>
                                </div>

                                <Button type="submit" className="w-full h-12 text-lg">
                                    Continue to Payment <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Order Summary (Read Only) */}
                    <div className="lg:w-80">
                        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6 sticky top-24">
                            <h3 className="font-bold text-white text-lg mb-6">Order Summary</h3>

                            <div className="space-y-4 mb-6">
                                {cart.map(item => (
                                    <div key={item.id} className="flex justify-between items-start text-sm">
                                        <span className="text-zinc-400 line-clamp-1 w-2/3">{item.title}</span>
                                        <span className="text-white">₹{item.price}</span>
                                    </div>
                                ))}

                                <hr className="border-white/5 my-4" />

                                <div className="flex justify-between text-zinc-400 text-sm">
                                    <span>Subtotal</span>
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
                        </div>
                    </div>

                </div>

            </main>
            <Footer />
        </div>
    );
}
