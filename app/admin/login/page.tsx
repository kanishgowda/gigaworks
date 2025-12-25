"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ShieldAlert, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock auth
        setTimeout(() => {
            router.push("/admin");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-zinc-900 border border-red-900/20 rounded-2xl p-8 shadow-2xl shadow-red-900/10">
                <div className="text-center mb-8">
                    <div className="mx-auto w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 text-red-500">
                        <ShieldAlert size={24} />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">Admin Portal</h1>
                    <p className="text-zinc-500 text-sm">Restricted Access. Authorized Personnel Only.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="text-xs uppercase font-bold text-zinc-500 mb-1 block">Admin ID</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 w-4 h-4" />
                            <input
                                type="email"
                                className="w-full bg-black/40 border border-white/5 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-red-500/50 transition-colors"
                                placeholder="admin@gigaworks.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs uppercase font-bold text-zinc-500 mb-1 block">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 w-4 h-4" />
                            <input
                                type="password"
                                className="w-full bg-black/40 border border-white/5 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-red-500/50 transition-colors"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <Button
                        className="w-full h-11 bg-red-600 hover:bg-red-700 text-white border-0"
                        isLoading={isLoading}
                    >
                        Authenticate
                    </Button>
                </form>

                <div className="mt-6 text-center">
                    <Link href="/" className="text-zinc-600 hover:text-white text-xs transition-colors">
                        ← Return to Public Site
                    </Link>
                </div>
            </div>
        </div>
    );
}
