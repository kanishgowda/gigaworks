"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";

import { Notifications } from "@/components/ui/Notifications";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount } = useCart();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-display text-2xl font-bold tracking-tight text-white">
                            Giga<span className="text-primary">Works</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                            Features
                        </Link>
                        <Link href="/gigs" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                            Find Gigs
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                            About Us
                        </Link>
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Notifications />
                        <Link href="/basket" className="relative p-2 text-zinc-400 hover:text-white transition-colors">
                            <ShoppingBag size={20} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-background">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                            Log in
                        </Link>
                        <Link href="/signup">
                            <Button size="sm">Get Started</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-zinc-400 hover:text-white"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-white/5 bg-background"
                    >
                        <div className="flex flex-col gap-4 p-6">
                            <Link
                                href="#features"
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-zinc-400 hover:text-white"
                            >
                                Features
                            </Link>
                            <Link
                                href="/gigs"
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-zinc-400 hover:text-white"
                            >
                                Find Gigs
                            </Link>
                            <Link
                                href="/about"
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-zinc-400 hover:text-white"
                            >
                                About Us
                            </Link>
                            <hr className="border-white/5" />
                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-zinc-400 hover:text-white"
                            >
                                Log in
                            </Link>
                            <Link href="/signup" onClick={() => setIsOpen(false)}>
                                <Button className="w-full">Get Started</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
