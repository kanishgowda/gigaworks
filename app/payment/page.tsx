"use client";

import { useCart } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { CreditCard, Lock, Smartphone, Building } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentPage() {
    const { cart, cartTotal, clearCart } = useCart();
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);
    const [method, setMethod] = useState<'card' | 'upi'>('card');

    const total = (cartTotal * 1.05).toFixed(2);

    const handlePayment = () => {
        setIsProcessing(true);

        // Simulate API call
        setTimeout(() => {
            alert(`Payment of ₹${total} successful! Check your email for receipt.`);
            clearCart();
            router.push("/dashboard");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto max-w-xl pt-32 pb-20 px-4">

                <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="font-display text-2xl font-bold text-white">Payment</h1>
                        <p className="text-zinc-400">Complete your purchase</p>
                        <div className="mt-4 text-3xl font-bold text-white">₹{total}</div>
                    </div>

                    {/* Payment Methods */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <button
                            onClick={() => setMethod('card')}
                            className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${method === 'card' ? 'bg-primary/20 border-primary text-white' : 'bg-black/20 border-white/5 text-zinc-500 hover:bg-white/5'}`}
                        >
                            <CreditCard className="w-6 h-6" />
                            <span className="text-sm font-medium">Card</span>
                        </button>
                        <button
                            onClick={() => setMethod('upi')}
                            className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${method === 'upi' ? 'bg-primary/20 border-primary text-white' : 'bg-black/20 border-white/5 text-zinc-500 hover:bg-white/5'}`}
                        >
                            <Smartphone className="w-6 h-6" />
                            <span className="text-sm font-medium">UPI</span>
                        </button>
                    </div>

                    {/* Card Form */}
                    {method === 'card' && (
                        <div className="space-y-4 mb-8 animate-in fade-in slide-in-from-top-2">
                            <div>
                                <label className="text-xs uppercase font-bold text-zinc-500 mb-1 block">Card Number</label>
                                <div className="relative">
                                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-10 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/20" placeholder="0000 0000 0000 0000" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs uppercase font-bold text-zinc-500 mb-1 block">Expiry</label>
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/20" placeholder="MM/YY" />
                                </div>
                                <div>
                                    <label className="text-xs uppercase font-bold text-zinc-500 mb-1 block">CVV</label>
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/20" placeholder="123" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs uppercase font-bold text-zinc-500 mb-1 block">Cardholder Name</label>
                                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/20" placeholder="Name on card" />
                            </div>
                        </div>
                    )}

                    {/* UPI Form */}
                    {method === 'upi' && (
                        <div className="space-y-4 mb-8 animate-in fade-in slide-in-from-top-2">
                            <div>
                                <label className="text-xs uppercase font-bold text-zinc-500 mb-1 block">UPI ID</label>
                                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/20" placeholder="username@upi" />
                            </div>
                            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-400 text-sm">
                                Open your UPI app to approve the request after clicking Pay.
                            </div>
                        </div>
                    )}

                    <Button
                        onClick={handlePayment}
                        className="w-full h-12 text-lg font-bold"
                        isLoading={isProcessing}
                    >
                        {isProcessing ? 'Processing...' : `Pay ₹${total}`}
                    </Button>

                    <p className="text-center text-zinc-500 text-xs mt-4 flex items-center justify-center gap-1">
                        <Lock size={12} /> Encrypted & Secure
                    </p>

                </div>

            </main>
            <Footer />
        </div>
    );
}
