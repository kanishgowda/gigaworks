"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { DollarSign, Briefcase, Star, Settings, User, Sparkles, ArrowRight } from "lucide-react";


export default function DashboardPage() {
    const [isReviewOpen, setIsReviewOpen] = useState(false);
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-32 pb-20 px-4">

                <div className="flex justify-between items-center mb-10">
                    <h1 className="font-display text-3xl font-bold text-white">Dashboard</h1>
                    <div className="flex gap-3">
                        <Link href="/profile/me">
                            <Button variant="outline" size="sm"><User size={16} className="mr-2" /> My Profile</Button>
                        </Link>
                        <Button variant="outline" size="sm" onClick={() => alert("Settings panel would open here.")}><Settings size={16} className="mr-2" /> Settings</Button>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <Link href="/wallet">
                        <StatsCard
                            title="Total Earnings"
                            value="₹12,450"
                            icon={<DollarSign className="text-green-400" />}
                            trend="+15% this month"
                        />
                    </Link>
                    <Link href="/gigs">
                        <StatsCard
                            title="Active Gigs"
                            value="3"
                            icon={<Briefcase className="text-blue-400" />}
                            trend="1 pending review"
                        />
                    </Link>
                    <Link href="/profile/me">
                        <StatsCard
                            title="Rating"
                            value="4.9/5"
                            icon={<Star className="text-yellow-400" />}
                            trend="Based on 12 reviews"
                        />
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Col: Activity */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* AI Match Section */}
                        <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl">🤖</div>
                            <div className="relative z-10 mb-6">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Sparkles className="text-yellow-400" size={20} /> AI Smart Match
                                </h2>
                                <p className="text-zinc-400 text-sm">Based on your skills (Design, Video), we found these gigs for you.</p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <RecommendedGigCard
                                    title="Logo Design for Startup"
                                    budget="₹2,500"
                                    match="98%"
                                />
                                <RecommendedGigCard
                                    title="Instagram Reels Edits"
                                    budget="₹1,200/reel"
                                    match="95%"
                                />
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="min-w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                        <Briefcase size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between">
                                            <h4 className="font-bold text-white">Project Completed: Logo Design</h4>
                                            <span className="text-xs text-zinc-500">2h ago</span>
                                        </div>
                                        <p className="text-sm text-zinc-400 mt-1">Client marked the milestone as complete.</p>
                                        <div className="mt-3 flex gap-2">
                                            <Button size="sm" onClick={() => setIsReviewOpen(true)}>Leave a Review</Button>
                                            <Button variant="outline" size="sm">View Invoice</Button>
                                        </div>
                                    </div>
                                </div>
                                {/* ... more items */}
                            </div>
                        </div>

                    </div>

                    {/* Right Col: Quick Actions? (Optional, or just leave empty for layout balance) */}
                    <div className="lg:col-span-1">
                        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
                            <h3 className="font-bold text-white mb-4">Your Skills</h3>
                            <div className="flex flex-wrap gap-2 text-sm text-zinc-400">
                                <span className="bg-white/5 px-3 py-1 rounded-full">Graphic Design</span>
                                <span className="bg-white/5 px-3 py-1 rounded-full">Video Editing</span>
                                <span className="border border-dashed border-white/10 px-3 py-1 rounded-full text-zinc-500 hover:text-white cursor-pointer" onClick={() => alert("Add Skill modal")}>+ Add Skill</span>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
            <Footer />
        </div>
    );
}

function StatsCard({ title, value, icon, trend }: { title: string, value: string, icon: React.ReactNode, trend: string }) {
    return (
        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors cursor-pointer h-full">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-zinc-400 text-sm">{title}</p>
                    <h3 className="text-3xl font-bold text-white mt-1">{value}</h3>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    {icon}
                </div>
            </div>
            <p className="text-xs text-zinc-500">{trend}</p>
        </div>
    );
}

function RecommendedGigCard({ title, budget, match }: { title: string, budget: string, match: string }) {
    return (
        <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-xl hover:bg-zinc-900 hover:border-primary/30 transition-all group cursor-pointer">
            <div className="flex justify-between items-start mb-2">
                <span className="bg-green-500/10 text-green-400 text-xs px-2 py-0.5 rounded border border-green-500/20">{match} Match</span>
                <span className="text-white font-bold text-sm">{budget}</span>
            </div>
            <h4 className="font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h4>
            <div className="flex items-center text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                View Details <ArrowRight size={12} className="ml-1" />
            </div>
        </div>
    );
}
