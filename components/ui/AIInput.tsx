"use client";

import { useState } from "react";
import { Sparkles, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface AIInputProps {
    placeholder?: string;
    onGenerate: (text: string) => void;
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    multiline?: boolean;
}

export function AIInput({ placeholder, onGenerate, className, value, onChange, multiline = false }: AIInputProps) {
    const [isGenerating, setIsGenerating] = useState(false);

    // Mock prompts for demo
    const prompts = [
        "Write a professional description for a logo design gig...",
        "Draft a polite message to a client...",
        "Create a catchy title for a video editing service...",
    ];

    const generateText = async () => {
        setIsGenerating(true);

        // Simulating AI thinking time
        await new Promise(r => setTimeout(r, 800));

        const mockResponses = [
            "I'm a seasoned designer specializing in minimalistic and modern logos. I will deliver high-quality vector files ensuring your brand stands out with a unique identity.",
            "Hi there! I came across your project and I'm very interested. I have 5 years of experience in this field and would love to help you bring your vision to life.",
            "Professional Video Editing | 4K Colour Grading | Fast Turnaround | YouTube & Reels Specialist"
        ];

        const randomText = mockResponses[Math.floor(Math.random() * mockResponses.length)];

        // Stream effect
        let currentText = "";
        const words = randomText.split(" ");

        for (let i = 0; i < words.length; i++) {
            currentText += words[i] + " ";
            onGenerate(currentText);
            await new Promise(r => setTimeout(r, 50));
        }

        setIsGenerating(false);
    };

    return (
        <div className={`relative ${className}`}>
            <div className="absolute right-2 top-2 z-10">
                <Button
                    size="sm"
                    variant="ghost"
                    className={`h-8 px-2 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 ${isGenerating ? 'animate-pulse' : ''}`}
                    onClick={generateText}
                    disabled={isGenerating}
                >
                    {isGenerating ? <Sparkles size={14} className="animate-spin mr-1" /> : <Wand2 size={14} className="mr-1" />}
                    {isGenerating ? 'Writing...' : 'AI Write'}
                </Button>
            </div>
            {multiline ? (
                <textarea
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl p-4 pr-24 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-all min-h-[120px] resize-none"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                />
            ) : (
                <input
                    type="text"
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl p-4 pr-24 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-all"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                />
            )}
        </div>
    );
}
