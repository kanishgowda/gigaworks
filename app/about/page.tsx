"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto max-w-4xl pt-32 pb-20 px-4">

                <div className="text-center space-y-6 mb-20">
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
                        Empowering the <span className="text-primary">Next Generation</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        GigaWorks is on a mission to bridge the gap between student talent and real-world opportunities.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">Our Story</h2>
                        <p className="text-zinc-400 leading-relaxed">
                            We started GigaWorks because we saw a massive disconnect. Students have time and talent but lack opportunities. Local businesses and individuals need help but can&apos;t find reliable people.
                        </p>
                        <p className="text-zinc-400 leading-relaxed">
                            By building a hyperlocal marketplace, we are creating a win-win ecosystem where youth gain financial independence and experience, while the community gets trusted, affordable help.
                        </p>
                    </div>
                    <div className="bg-zinc-900 border border-white/5 rounded-2xl h-80 flex items-center justify-center p-8">
                        <div className="text-center">
                            <span className="text-6xl mb-4 block">🚀</span>
                            <p className="font-display text-2xl font-bold text-white">Built for Students,<br />by Students.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-12 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Join the Revolution</h2>
                    <p className="text-zinc-300 max-w-xl mx-auto mb-8">
                        Whether you want to earn, learn, or hire, GigaWorks is your platform.
                    </p>
                </div>

            </main>
            <Footer />
        </div>
    );
}
