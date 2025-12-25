"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { MOCK_GIGS } from "@/lib/data/gigs";
import { Gig, CATEGORIES } from "@/lib/types";
import { Search, MapPin, Clock, IndianRupee, Filter, LayoutGrid, Map as MapIcon, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DynamicMap } from "@/components/gigs/DynamicMap";
import { useCart } from "@/context/CartContext";

export default function GigsPage() {
    const [filterCategory, setFilterCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

    const filteredGigs = MOCK_GIGS.filter((gig) => {
        const matchesCategory = filterCategory ? gig.category === filterCategory : true;
        const matchesSearch = gig.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            gig.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="container mx-auto max-w-7xl pt-32 pb-20 px-4">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* SIDEBAR FILTERS (Desktop) */}
                    <aside className="hidden md:block w-64 flex-shrink-0">
                        <div className="sticky top-24 space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
                                <div className="flex flex-col gap-2">
                                    <button
                                        onClick={() => setFilterCategory(null)}
                                        className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${!filterCategory ? 'bg-primary/20 text-primary font-medium' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                                    >
                                        All Categories
                                    </button>
                                    {CATEGORIES.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setFilterCategory(cat)}
                                            className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${filterCategory === cat ? 'bg-primary/20 text-primary font-medium' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-white mb-4">Price Range</h3>
                                {/* Mock Slider */}
                                <div className="h-2 bg-zinc-800 rounded-full mb-2">
                                    <div className="w-1/2 h-full bg-primary rounded-full"></div>
                                </div>
                                <div className="flex justify-between text-xs text-zinc-500">
                                    <span>₹100</span>
                                    <span>₹10,000+</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* MAIN CONTENT */}
                    <div className="flex-1">
                        {/* Header / Search */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                            <div>
                                <h1 className="text-3xl font-bold text-white">Find Gigs</h1>
                                <p className="text-zinc-400 text-sm mt-1">{filteredGigs.length} opportunities available</p>
                            </div>
                            <div className="flex gap-2 w-full sm:w-auto">
                                <div className="flex bg-zinc-900 border border-white/5 p-1 rounded-xl">
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-zinc-800 text-white shadow' : 'text-zinc-500 hover:text-white'}`}
                                    >
                                        <LayoutGrid size={18} />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('map')}
                                        className={`p-2 rounded-lg transition-colors ${viewMode === 'map' ? 'bg-zinc-800 text-white shadow' : 'text-zinc-500 hover:text-white'}`}
                                    >
                                        <MapIcon size={18} />
                                    </button>
                                </div>
                                <div className="relative flex-1 sm:w-80">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 h-4 w-4" />
                                    <input
                                        type="text"
                                        placeholder="Search for gigs..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-secondary border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                </div>
                                <Button className="sm:hidden" variant="secondary"><Filter size={18} /></Button>
                            </div>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <AnimatePresence>
                                {viewMode === 'list' ? (
                                    filteredGigs.map((gig) => (
                                        <GigItem key={gig.id} gig={gig} />
                                    ))
                                ) : (
                                    <div className="col-span-full">
                                        <DynamicMap gigs={filteredGigs} />
                                    </div>
                                )}
                            </AnimatePresence>

                            {filteredGigs.length === 0 && (
                                <div className="col-span-full py-20 text-center">
                                    <p className="text-zinc-500">No gigs found matching your criteria.</p>
                                    <Button
                                        variant="ghost"
                                        className="mt-2 text-primary"
                                        onClick={() => { setFilterCategory(null); setSearchQuery(""); }}
                                    >
                                        Clear Filters
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}

function GigItem({ gig }: { gig: Gig }) {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAdd = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(gig);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="group bg-zinc-900 border border-white/5 rounded-2xl p-5 hover:border-primary/30 transition-all hover:shadow-[0_4px_20px_-10px_rgba(124,58,237,0.2)] flex flex-col justify-between"
        >
            <div>
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className="flex gap-2 mb-2">
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-zinc-300 border border-white/5`}>
                                {gig.category}
                            </span>
                            {gig.isRemote && (
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/10">
                                    Remote
                                </span>
                            )}
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-1">{gig.title}</h3>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center text-green-400 font-bold text-lg">
                            <IndianRupee size={16} />{gig.price}
                        </div>
                        <span className="text-xs text-zinc-500">Fixed Price</span>
                    </div>
                </div>

                <p className="text-sm text-zinc-400 mb-6 line-clamp-2">{gig.description}</p>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white">
                            {gig.postedBy.name[0]}
                        </div>
                        <span className="text-xs text-zinc-300">{gig.postedBy.name}</span>
                        {gig.postedBy.verified && <span className="text-blue-400" title="Verified Client">✓</span>}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-zinc-500">
                        <span className="flex items-center gap-1"><MapPin size={12} /> {gig.isRemote ? 'Remote' : 'Loc'}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> 2h ago</span>
                    </div>
                </div>

                <Button
                    className="w-full"
                    variant={isAdded ? "outline" : undefined}
                    size="sm"
                    onClick={handleAdd}
                >
                    <ShoppingBag size={14} className="mr-2" />
                    {isAdded ? "Added to Basket" : "Add to Basket"}
                </Button>
            </div>
        </motion.div>
    );
}
