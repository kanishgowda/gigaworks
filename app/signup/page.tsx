"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Mail, Lock, User, Briefcase, GraduationCap, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function SignupPage() {
    const router = useRouter();
    const [role, setRole] = useState<'student' | 'client'>('student');
    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.push("/onboarding");
        }, 1500);
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-background text-foreground">

            {/* LEFT SIDE: Visuals */}
            <div className="hidden lg:flex flex-col justify-between p-12 relative overflow-hidden bg-zinc-900 border-r border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

                <div className="relative z-10">
                    <Link href="/" className="flex items-center gap-2 mb-12">
                        <span className="font-display text-2xl font-bold tracking-tight text-white">
                            Giga<span className="text-primary">Works</span>
                        </span>
                    </Link>

                    <h1 className="font-display text-5xl font-bold text-white mb-6 leading-tight">
                        Start your journey <br /> with <span className="text-primary">GigaWorks.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-md">
                        Join thousands of students and businesses building the future of work together.
                    </p>
                </div>

                <div className="relative z-10">
                    {/* Abstract visual or testimonial could go here */}
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
                        <h2 className="font-display text-3xl font-bold text-white">Create Account</h2>
                        <p className="mt-2 text-sm text-zinc-400">
                            Already have an account? <Link href="/login" className="font-medium text-primary hover:text-primary/90">Log in</Link>
                        </p>
                    </div>

                    <form onSubmit={handleSignup} className="space-y-6">

                        {/* Role Selection */}
                        <div className="grid grid-cols-2 gap-4 p-1 bg-secondary rounded-xl border border-white/5">
                            <button
                                type="button"
                                onClick={() => setRole('student')}
                                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition-all ${role === 'student' ? 'bg-primary text-white shadow-lg' : 'text-zinc-400 hover:text-white'}`}
                            >
                                <GraduationCap size={24} />
                                <span className="font-medium text-sm">I&apos;m a Student</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole('client')}
                                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition-all ${role === 'client' ? 'bg-primary text-white shadow-lg' : 'text-zinc-400 hover:text-white'}`}
                            >
                                <Briefcase size={24} />
                                <span className="font-medium text-sm">I want to Hire</span>
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 h-5 w-5" />
                                <input
                                    type="text"
                                    required
                                    placeholder="Full Name"
                                    className="w-full bg-secondary border border-white/5 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/50 transition-colors"
                                />
                            </div>
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

                        <Button type="submit" className="w-full h-12 text-base" isLoading={isLoading}>
                            Create Account
                        </Button>

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
                                onClick={() => router.push("/onboarding")}
                            >
                                <Github className="mr-2 h-4 w-4" /> Github
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="h-12 border-white/10 hover:bg-white/5 hover:text-white"
                                onClick={() => router.push("/onboarding")}
                            >
                                Google
                            </Button>
                        </div>

                        <p className="text-xs text-center text-zinc-500">
                            By signing up, you agree to our <Link href="#" className="underline">Terms</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
                        </p>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
