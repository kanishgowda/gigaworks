"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const steps = [
    {
        id: 'skills',
        title: 'What are your skills?',
        subtitle: 'Select at least 3 skills to get matched with gigs.',
        options: ['Graphic Design', 'Web Development', 'Video Editing', 'Content Writing', 'Data Entry', 'Photography', 'Tutoring', 'Delivery']
    },
    {
        id: 'bio',
        title: 'Tell us about yourself',
        subtitle: 'A short bio helps clients trust you.',
        type: 'text'
    }
];

export default function OnboardingPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [bio, setBio] = useState("");

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(curr => curr + 1);
        } else {
            router.push('/dashboard');
        }
    };

    const toggleSkill = (skill: string) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(prev => prev.filter(s => s !== skill));
        } else {
            setSelectedSkills(prev => [...prev, skill]);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-foreground">

            <div className="w-full max-w-lg">
                {/* Progress Bar */}
                <div className="flex gap-2 mb-8">
                    {steps.map((_, i) => (
                        <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= currentStep ? 'bg-primary' : 'bg-white/10'}`} />
                    ))}
                </div>

                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                >
                    <div className="text-center">
                        <h1 className="font-display text-3xl font-bold text-white mb-2">{steps[currentStep].title}</h1>
                        <p className="text-zinc-400">{steps[currentStep].subtitle}</p>
                    </div>

                    <div className="min-h-[300px]">
                        {steps[currentStep].id === 'skills' && (
                            <div className="grid grid-cols-2 gap-3">
                                {steps[currentStep].options?.map(skill => (
                                    <button
                                        key={skill}
                                        onClick={() => toggleSkill(skill)}
                                        className={`p-4 rounded-xl border text-sm font-medium transition-all ${selectedSkills.includes(skill) ? 'bg-primary/20 border-primary text-primary' : 'bg-secondary border-white/5 text-zinc-400 hover:border-white/20'}`}
                                    >
                                        {skill}
                                    </button>
                                ))}
                            </div>
                        )}

                        {steps[currentStep].id === 'bio' && (
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                className="w-full h-40 bg-secondary border border-white/10 rounded-xl p-4 text-white focus:border-primary/50 focus:outline-none resize-none"
                                placeholder="I am a Computer Science student with a passion for design..."
                            />
                        )}
                    </div>

                    <Button
                        size="lg"
                        className="w-full h-14 text-lg"
                        onClick={handleNext}
                        disabled={steps[currentStep].id === 'skills' && selectedSkills.length < 3}
                    >
                        {currentStep === steps.length - 1 ? 'Finish Profile' : 'Continue'} <ChevronRight className="ml-2" />
                    </Button>

                </motion.div>
            </div>

        </div>
    );
}
