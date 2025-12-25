"use client";

import { useState } from "react";
import { MapPin, Navigation } from "lucide-react";
import { Gig } from "@/lib/types";
import { Button } from "@/components/ui/Button";

interface MockMapProps {
    gigs: Gig[];
}

export function MockMap({ gigs }: MockMapProps) {
    const [selectedGig, setSelectedGig] = useState<Gig | null>(null);

    // Generate deterministic random positions based on ID
    const getPosition = (id: string) => {
        const seed = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const top = (seed * 13) % 80 + 10; // 10% to 90%
        const left = (seed * 7) % 80 + 10;
        return { top: `${top}%`, left: `${left}%` };
    };

    return (
        <div className="w-full h-[600px] bg-zinc-900 border border-white/5 rounded-2xl relative overflow-hidden group">

            {/* Dark Map Background Pattern */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(#4c1d95 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    filter: 'grayscale(0.8)'
                }}
            />
            {/* Roads Mockup */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,100 Q400,150 800,100 T1600,150" fill="none" stroke="white" strokeWidth="2" />
                <path d="M200,0 Q250,400 200,800" fill="none" stroke="white" strokeWidth="2" />
                <path d="M600,0 Q550,400 600,800" fill="none" stroke="white" strokeWidth="2" />
            </svg>

            {/* Pins */}
            {gigs.map((gig) => {
                const pos = getPosition(gig.id);
                return (
                    <div
                        key={gig.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 group/pin"
                        style={pos}
                    >
                        <button
                            onClick={() => setSelectedGig(gig)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-125 ${selectedGig?.id === gig.id ? 'bg-primary text-white scale-125 z-20' : 'bg-zinc-800 text-primary border border-primary/50 z-10'}`}
                        >
                            <MapPin size={16} fill={selectedGig?.id === gig.id ? "currentColor" : "none"} />
                        </button>
                    </div>
                );
            })}

            {/* User Location */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-xl shadow-blue-500/50 animate-pulse"></div>

            {/* Selected Gig Card Overlay */}
            {selectedGig && (
                <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl animate-in fade-in slide-in-from-bottom-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-white text-sm line-clamp-1">{selectedGig.title}</h3>
                        <button onClick={() => setSelectedGig(null)} className="text-zinc-500 hover:text-white">×</button>
                    </div>
                    <p className="text-zinc-400 text-xs mb-3 line-clamp-2">{selectedGig.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-green-400">₹{selectedGig.price}</span>
                        <Button size="sm" className="h-8 text-xs">View Details</Button>
                    </div>
                </div>
            )}

            {/* Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Button variant="secondary" size="sm" className="w-8 h-8 p-0 bg-zinc-900/80 backdrop-blur border border-white/10"><Navigation size={18} /></Button>
            </div>
        </div>
    );
}
