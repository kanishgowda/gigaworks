"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { MapPin, Star, Calendar, Share2, MessageSquare, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function ProfilePage({ params }: { params: { username: string } }) {
    // Mock data - in real app would fetch based on params.username
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Cover Image */}
            <div className="h-64 bg-gradient-to-r from-purple-900 to-indigo-900 w-full relative">
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <main className="container mx-auto max-w-5xl px-4 -mt-20 relative pb-20">

                <div className="flex flex-col md:flex-row gap-8 items-start">

                    {/* Sidebar Info */}
                    <div className="w-full md:w-1/3 bg-zinc-900 border border-white/5 rounded-2xl p-6 shadow-xl relative z-10">
                        <div className="w-32 h-32 bg-zinc-800 rounded-full border-4 border-zinc-900 mx-auto -mt-20 mb-4 flex items-center justify-center text-4xl">
                            🎓
                        </div>

                        <div className="text-center mb-6">
                            <h1 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                                Rahul Sharma <CheckCircle2 className="text-blue-400 w-5 h-5" />
                            </h1>
                            <p className="text-zinc-400">Design Student @ NIFT</p>
                        </div>

                        <div className="space-y-4 mb-6">
                            <div className="flex items-center gap-3 text-zinc-300">
                                <MapPin className="text-zinc-500 w-5 h-5" /> South Delhi
                            </div>
                            <div className="flex items-center gap-3 text-zinc-300">
                                <Star className="text-yellow-400 w-5 h-5" /> 4.9 (24 Reviews)
                            </div>
                            <div className="flex items-center gap-3 text-zinc-300">
                                <Calendar className="text-zinc-500 w-5 h-5" /> Joined Sept 2024
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Button className="flex-1" onClick={() => alert("Hiring proposal sent!")}>Hire Me</Button>
                            <Button variant="outline" size="sm" className="px-3" onClick={() => alert("Message window opened.")}><MessageSquare className="w-5 h-5" /></Button>
                            <Button variant="outline" size="sm" className="px-3" onClick={() => alert("Profile link copied!")}><Share2 className="w-5 h-5" /></Button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 space-y-8 mt-10 md:mt-0">

                        {/* Bio */}
                        <section>
                            <h2 className="text-xl font-bold text-white mb-3">About Me</h2>
                            <p className="text-zinc-400 leading-relaxed">
                                Passionate graphic designer specializing in social media creatives and brand identity. I help startups look professional from day one. Currently in my final year at NIFT, looking for freelance gigs to build my portfolio.
                            </p>
                        </section>

                        {/* Skills */}
                        <section>
                            <h2 className="text-xl font-bold text-white mb-3">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {['Photoshop', 'Illustrator', 'Figma', 'Logo Design', 'Poster Design', 'Social Media'].map(skill => (
                                    <span key={skill} className="bg-secondary border border-white/10 px-3 py-1 rounded-full text-sm text-zinc-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Portfolio */}
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">Portfolio</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="aspect-video bg-zinc-800 rounded-xl border border-white/5 hover:border-primary/50 transition-colors flex items-center justify-center group cursor-pointer">
                                        <p className="text-zinc-500 group-hover:text-white transition-colors">Project {i}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Reviews Preview (Simple) */}
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">Reviews</h2>
                            <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="font-bold text-white">Ankit G.</span>
                                    <span className="text-yellow-400 text-sm">★★★★★</span>
                                </div>
                                <p className="text-zinc-400 italic">"Rahul is incredibly fast and understood exactly what we needed for our event posters. Highly recommended!"</p>
                            </div>
                        </section>

                    </div>

                </div>

            </main>
            <Footer />
        </div>
    );
}
