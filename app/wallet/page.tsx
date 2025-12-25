"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ArrowDownLeft, Wallet, Clock, CreditCard } from "lucide-react";


export default function WalletPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto max-w-5xl pt-32 pb-20 px-4">

                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="font-display text-3xl font-bold text-white">My Wallet</h1>
                        <p className="text-zinc-400">Manage your earnings and payouts</p>
                    </div>
                    <Button size="lg" onClick={() => alert("Withdrawal request initiated!")}><ArrowDownLeft className="mr-2" /> Withdraw Funds</Button>
                </div>

                {/* Balance Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-gradient-to-br from-primary/20 to-purple-900/10 border border-primary/20 rounded-2xl p-6">
                        <p className="text-zinc-400 mb-1">Available Balance</p>
                        <h2 className="text-4xl font-bold text-white">₹12,450.00</h2>
                        <p className="text-xs text-green-400 mt-2 flex items-center gap-1">
                            <ArrowUpRight size={14} /> +₹2,400 this week
                        </p>
                    </div>

                    <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
                        <p className="text-zinc-400 mb-1">Pending Clearance</p>
                        <h2 className="text-4xl font-bold text-white">₹3,200.00</h2>
                        <p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
                            <Clock size={14} /> Clear in 2-3 days
                        </p>
                    </div>

                    <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <p className="text-zinc-400">Payment Method</p>
                            <CreditCard className="text-zinc-500" />
                        </div>
                        <div>
                            <p className="text-white font-medium">HDFC Bank **** 4281</p>
                            <p className="text-xs text-zinc-500">Primary Account</p>
                        </div>
                    </div>
                </div>

                {/* Transactions */}
                <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden">
                    <div className="p-6 border-b border-white/5 flex justify-between items-center">
                        <h3 className="font-bold text-lg text-white">Transaction History</h3>
                        <Button variant="ghost" size="sm" className="text-zinc-400" onClick={() => alert("Downloading PDF statement...")}>Download Statement</Button>
                    </div>
                    <div className="divide-y divide-white/5">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${i % 2 === 0 ? 'bg-green-500/10 text-green-500' : 'bg-zinc-800 text-zinc-400'}`}>
                                        {i % 2 === 0 ? <ArrowDownLeft size={20} /> : <Wallet size={20} />}
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">{i % 2 === 0 ? 'Payment from Gig #842' : 'Withdrawal to Bank'}</p>
                                        <p className="text-sm text-zinc-500">Dec {25 - i}, 2024 • 10:30 AM</p>
                                    </div>
                                </div>
                                <span className={`font-bold ${i % 2 === 0 ? 'text-green-400' : 'text-zinc-500'}`}>
                                    {i % 2 === 0 ? '+₹1,200.00' : '-₹5,000.00'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
