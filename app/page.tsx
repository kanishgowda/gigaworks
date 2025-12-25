"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="container mx-auto max-w-7xl relative z-10 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col items-center gap-6"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary-foreground/80">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Live in Metropolitan Cities
              </motion.div>

              <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
                Unlock Your <span className="text-primary-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500">Freedom</span> with Hyperlocal Gigs.
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
                GigaWorks connects students and youth with flexible, skill-based, and everyday tasks. Earn money, gain experience, and build your portfolio.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/gigs">
                  <Button size="lg" className="rounded-full px-8 text-lg h-14">
                    Find a Gig <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/post-gig">
                  <Button variant="secondary" size="lg" className="rounded-full px-8 text-lg h-14">
                    Post a Gig
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PROBLEM & SOLUTION SECTION */}
        <section className="py-20 bg-secondary/30 relative">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                  Why <span className="text-primary">GigaWorks?</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Fragmented Opportunities? Solved.</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        No more searching through generic job boards. We provide a student-friendly system for quick, short-term work that fits your schedule.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Verified & Trustworthy.</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        We verify every student and client, ensuring a safe environment for household errands, elderly care, and skilled freelance work.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Hyperlocal & Flexible.</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        Find gigs right in your neighborhood. Save time on commute and focus on earning and learning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Representation (Glass Card Mockup) */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-20 blur-2xl animate-pulse"></div>
                <div className="relative bg-zinc-900 border border-white/5 rounded-2xl p-8 shadow-2xl">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium">New match</div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-zinc-800 animate-pulse"></div>
                    <div>
                      <div className="h-4 w-32 bg-zinc-800 rounded mb-2 animate-pulse"></div>
                      <div className="h-3 w-24 bg-zinc-800 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="h-3 w-full bg-zinc-800 rounded animate-pulse"></div>
                    <div className="h-3 w-full bg-zinc-800 rounded animate-pulse"></div>
                    <div className="h-3 w-3/4 bg-zinc-800 rounded animate-pulse"></div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 h-10 bg-primary/20 rounded-lg animate-pulse"></div>
                    <div className="flex-1 h-10 bg-zinc-800 rounded-lg animate-pulse"></div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-zinc-800 p-4 rounded-xl border border-white/10 shadow-lg flex items-center gap-3">
                  <div className="bg-green-500 rounded-full p-1"><CheckCircle2 size={16} className="text-black" /></div>
                  <div>
                    <p className="text-xs text-zinc-400">Gigs Completed</p>
                    <p className="text-lg font-bold text-white">1,240+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GIG SHOWCASE SECTION */}
        <section id="features" className="py-20 bg-background relative px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white">Explore <span className="text-primary">Opportunities</span></h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">From creative design to everyday errands, find work that suits your skills and schedule.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GigCard
                title="Social Media Design"
                emoji="🎨"
                desc="Create posters, banners, and creatives for startups."
                tags={['Remote', 'Creative']}
              />
              <GigCard
                title="Web Development"
                emoji="💻"
                desc="Design landing pages and simple websites."
                tags={['Remote', 'Tech']}
              />
              <GigCard
                title="Household Errands"
                emoji="🛒"
                desc="Pick up parcels, grocery shopping, organization."
                tags={['On-site', 'Easy']}
              />
              <GigCard
                title="Festive Help"
                emoji="🎉"
                desc="Decorations, shopping support for festivals."
                tags={['Seasonal', 'Fun']}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10 px-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Ready to start earning?</h2>
            <p className="text-xl text-zinc-300 mb-8">Join thousands of students building their future with GigaWorks.</p>
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-2xl shadow-primary/40">
              Download App (Coming Soon)
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function GigCard({ title, emoji, desc, tags }: { title: string, emoji: string, desc: string, tags: string[] }) {
  return (
    <div className="group relative bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1">
      <div className="text-4xl mb-4 text-zinc-200">{emoji}</div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-zinc-400 mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-zinc-300 border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
