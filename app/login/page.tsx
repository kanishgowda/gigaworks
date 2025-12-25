"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Mail, Lock, Github, CheckCircle, ScanFace } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate network request
        setTimeout(() => {
            setIsLoading(false);
            router.push("/dashboard");
        }, 1500);
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-background text-foreground">

            {/* LEFT SIDE: Visuals */}
            <div className="hidden lg:flex flex-col justify-between p-12 relative overflow-hidden bg-zinc-900 border-r border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

                <div className="relative z-10">
                    <Link href="/" className="flex items-center gap-2 mb-12">
                        <span className="font-display text-2xl font-bold tracking-tight text-white">
                            Giga<span className="text-primary">Works</span>
                        </span>
                    </Link>

                    <h1 className="font-display text-5xl font-bold text-white mb-6 leading-tight">
                        Welcome back to the <span className="text-primary">future of work.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-md">
                        Connect with opportunities, earn on your terms, and build your career from day one.
                    </p>
                </div>

                <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-4 text-zinc-300">
                        <CheckCircle className="text-primary" size={20} />
                        <span>Verified Student Workforce</span>
                    </div>
                    <div className="flex items-center gap-4 text-zinc-300">
                        <CheckCircle className="text-primary" size={20} />
                        <span>Instant Payments</span>
                    </div>
                    <div className="flex items-center gap-4 text-zinc-300">
                        <CheckCircle className="text-primary" size={20} />
                        <span>Skill-Based Matching</span>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Form */}
            <div className="flex items-center justify-center p-6 lg:p-12 relative">
                <div className="absolute top-6 left-6 lg:hidden">
                    <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                        <ArrowLeft size={20} /> Back
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md space-y-8"
                >
                    <div className="text-center">
                        <h2 className="font-display text-3xl font-bold text-white">Sign In</h2>
                        <p className="mt-2 text-sm text-zinc-400">
                            Don&apos;t have an account? <Link href="/signup" className="font-medium text-primary hover:text-primary/90">Sign up</Link>
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-4">
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 h-5 w-5" />
                                <input
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    className="w-full bg-secondary border border-white/5 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/50 transition-colors"
                                />
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 h-5 w-5" />
                                <input
                                    type="password"
                                    required
                                    placeholder="Password"
                                    className="w-full bg-secondary border border-white/5 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/50 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-zinc-400 cursor-pointer">
                                <input type="checkbox" className="rounded border-zinc-700 bg-zinc-800 text-primary focus:ring-primary" />
                                Remember me
                            </label>
                            <Link href="#" className="font-medium text-primary hover:text-primary/90">Forgot password?</Link>
                        </div>

                        <Button type="submit" className="w-full h-12 text-base" isLoading={isLoading}>
                            Sign in
                        </Button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-white/10" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-zinc-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button
                            type="button"
                            variant="outline"
                            className="h-12 border-white/10 hover:bg-white/5 hover:text-white"
                            onClick={() => router.push("/dashboard")}
                        >
                            <Github className="mr-2 h-4 w-4" /> Github
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className="h-12 border-white/10 hover:bg-white/5 hover:text-white"
                            onClick={() => router.push("/dashboard")}
                        >
                            Google
                        </Button>
                    </div>

                    <div className="text-center">
                        <div className="relative group cursor-pointer inline-block" onClick={() => {
                            // Mock FaceID Animation
                            const btn = document.getElementById('face-scan-overlay');
                            if (btn) btn.style.display = 'flex';
                            setTimeout(() => {
                                router.push("/dashboard");
                            }, 2000);
                        }}>
                            <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-primary/50 transition-colors">
                                <ScanFace size={24} className="text-zinc-400 group-hover:text-primary transition-colors" />
                            </div>
                            <p className="text-xs text-zinc-500 mt-2 font-medium group-hover:text-primary transition-colors">Login with FaceID</p>
                        </div>
                    </div>
                </motion.div>

                {/* FaceID Overlay */}
                <div id="face-scan-overlay" className="fixed inset-0 z-50 bg-black/90 hidden items-center justify-center flex-col">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative w-64 h-64 border-2 border-primary/30 rounded-full flex items-center justify-center"
                    >
                        <motion.div
                            animate={{ y: [-100, 100, -100] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute w-full h-1 bg-primary/80 blur-md shadow-[0_0_20px_rgba(124,58,237,0.8)]"
                        />
                        <ScanFace size={80} className="text-primary/50" />
                    </motion.div>
                    <p className="text-white mt-8 font-display text-xl animate-pulse">Scanning...</p>
                </div>
            </motion.div>
        </div>
        </div >
    );
}
