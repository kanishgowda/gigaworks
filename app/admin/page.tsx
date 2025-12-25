"use client";

import { useState } from "react";
import Link from "next/link";
import {
    LayoutDashboard, Users, Briefcase, Settings, LogOut,
    TrendingUp, AlertCircle, CheckCircle2, XCircle, Search, MoreVertical
} from "lucide-react";
import { Button } from "@/components/ui/Button";

// MOCK DATA
const USERS = [
    { id: 1, name: "Rahul Sharma", role: "Freelancer", status: "Active", joined: "2 days ago" },
    { id: 2, name: "TechStart Inc.", role: "Client", status: "Verified", joined: "5 days ago" },
    { id: 3, name: "Priya Singh", role: "Freelancer", status: "Pending", joined: "1 week ago" },
    { id: 4, name: "Coffee & Co.", role: "Client", status: "Active", joined: "2 weeks ago" },
];

const GIGS = [
    { id: 1, title: "Logo Design needed for Startup", client: "TechStart Inc.", budget: "₹5,000", status: "Pending Approval" },
    { id: 2, title: "Dog Walker for weekend", client: "Mrs. Rao", budget: "₹500", status: "Active" },
    { id: 3, title: "React Developer for fix", client: "Dev Corp", budget: "₹2,000", status: "Flagged" },
];

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-zinc-950 text-foreground flex">

            {/* SIDEBAR */}
            <aside className="w-64 border-r border-white/5 bg-zinc-900/50 hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-white/5">
                    <span className="font-display text-xl font-bold text-white">Giga<span className="text-red-500">Admin</span></span>
                </div>

                <nav className="flex-1 p-4 espacio-y-2">
                    <NavItem icon={<LayoutDashboard size={18} />} label="Overview" active />
                    <NavItem icon={<Users size={18} />} label="User Management" />
                    <NavItem icon={<Briefcase size={18} />} label="Gigs & Jobs" />
                    <NavItem icon={<AlertCircle size={18} />} label="Disputes" badge="3" />
                    <NavItem icon={<Settings size={18} />} label="Settings" />
                </nav>

                <div className="p-4 border-t border-white/5">
                    <Link href="/admin/login" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm">
                        <LogOut size={18} /> Sign Out
                    </Link>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 overflow-auto">
                <header className="h-16 border-b border-white/5 bg-zinc-900/50 flex items-center justify-between px-8 sticky top-0 z-10 backdrop-blur-md">
                    <h1 className="font-bold text-white">Dashboard Overview</h1>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                            <input type="text" placeholder="Search..." className="bg-black/20 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-sm w-64 focus:outline-none focus:border-white/20" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold text-xs border border-red-500/20">
                            AD
                        </div>
                    </div>
                </header>

                <div className="p-8 max-w-7xl mx-auto space-y-8">

                    {/* STATS */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <StatCard label="Total Users" value="1,284" change="+12%" icon={<Users className="text-blue-400" />} />
                        <StatCard label="Active Gigs" value="342" change="+8.5%" icon={<Briefcase className="text-purple-400" />} />
                        <StatCard label="Total Revenue" value="₹4.2L" change="+24%" icon={<TrendingUp className="text-green-400" />} />
                        <StatCard label="Platform Issues" value="3" change="-2" icon={<AlertCircle className="text-red-400" />} />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* USER TABLE */}
                        <div className="lg:col-span-2 bg-zinc-900 border border-white/5 rounded-2xl p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-white">Recent Users</h3>
                                <Button variant="ghost" size="sm" className="text-zinc-500">View All</Button>
                            </div>
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-zinc-500 uppercase border-b border-white/5">
                                    <tr>
                                        <th className="pb-3 pl-2">User</th>
                                        <th className="pb-3">Role</th>
                                        <th className="pb-3">Status</th>
                                        <th className="pb-3 text-right pr-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {USERS.map(user => (
                                        <tr key={user.id} className="group hover:bg-white/5 transition-colors">
                                            <td className="py-3 pl-2 font-medium text-white">{user.name}</td>
                                            <td className="py-3 text-zinc-400">{user.role}</td>
                                            <td className="py-3">
                                                <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${user.status === 'Verified' ? 'bg-green-500/10 text-green-400' :
                                                        user.status === 'Active' ? 'bg-blue-500/10 text-blue-400' : 'bg-yellow-500/10 text-yellow-400'
                                                    }`}>
                                                    {user.status}
                                                </span>
                                            </td>
                                            <td className="py-3 text-right pr-2">
                                                <button className="text-zinc-500 hover:text-white"><MoreVertical size={16} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* MODERATION */}
                        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
                            <h3 className="font-bold text-white mb-6">Gig Moderation</h3>
                            <div className="space-y-4">
                                {GIGS.map(gig => (
                                    <div key={gig.id} className="p-4 bg-black/20 rounded-xl border border-white/5">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-medium text-white text-sm line-clamp-1">{gig.title}</h4>
                                            <span className={`text-[10px] px-1.5 py-0.5 rounded ${gig.status === 'Flagged' ? 'bg-red-500/10 text-red-400' :
                                                    gig.status === 'Pending Approval' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-green-500/10 text-green-400'
                                                }`}>{gig.status}</span>
                                        </div>
                                        <p className="text-xs text-zinc-500 mb-3">{gig.client} • {gig.budget}</p>
                                        <div className="flex gap-2">
                                            <Button size="sm" className="flex-1 h-8 text-xs bg-green-600 hover:bg-green-700 border-0" onClick={() => alert("Gig Approved")}>
                                                <CheckCircle2 size={12} className="mr-1" /> Approve
                                            </Button>
                                            <Button size="sm" variant="outline" className="flex-1 h-8 text-xs border-red-500/20 text-red-400 hover:bg-red-500/10 hover:text-red-300" onClick={() => alert("Gig Rejected")}>
                                                <XCircle size={12} className="mr-1" /> Reject
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

function NavItem({ icon, label, badge, active }: { icon: React.ReactNode, label: string, badge?: string, active?: boolean }) {
    return (
        <a href="#" className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm mb-1 transition-all ${active ? 'bg-red-600/10 text-red-500 font-medium' : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}>
            <div className="flex items-center gap-3">
                {icon}
                <span>{label}</span>
            </div>
            {badge && <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">{badge}</span>}
        </a>
    )
}

function StatCard({ label, value, change, icon }: { label: string, value: string, change: string, icon: React.ReactNode }) {
    const isPositive = change.startsWith('+');
    return (
        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-zinc-400 text-sm">{label}</p>
                    <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
                </div>
                <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                    {icon}
                </div>
            </div>
            <p className={`text-xs font-medium ${isPositive ? 'text-green-400' : 'text-red-400'} flex items-center`}>
                {change} <span className="text-zinc-500 ml-1 font-normal">from last month</span>
            </p>
        </div>
    )
}
