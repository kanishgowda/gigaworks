"use client";

import dynamic from "next/dynamic";
import { Gig } from "@/lib/types";

const RealMap = dynamic(() => import("./RealMap"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[600px] bg-zinc-900 border border-white/5 rounded-2xl flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-zinc-500">Loading Maps...</p>
            </div>
        </div>
    ),
});

interface DynamicMapProps {
    gigs: Gig[];
}

export function DynamicMap({ gigs }: DynamicMapProps) {
    return <RealMap gigs={gigs} />;
}
