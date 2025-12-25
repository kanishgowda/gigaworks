"use client";

import { useState } from "react";
import { Star, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";

interface ReviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    gigTitle: string;
}

export function ReviewModal({ isOpen, onClose, gigTitle }: ReviewModalProps) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState("");

    const handleSubmit = () => {
        alert("Review Submitted! Thanks for your feedback.");
        onClose();
        setRating(0);
        setComment("");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-md bg-zinc-900 border border-white/5 p-6 rounded-2xl shadow-xl"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-white">Rate your experience</h3>
                            <button onClick={onClose} className="text-zinc-500 hover:text-white"><X size={20} /></button>
                        </div>

                        <p className="text-zinc-400 text-sm mb-4">
                            How was your experience working on <span className="text-white font-medium">{gigTitle}</span>?
                        </p>

                        <div className="flex gap-2 justify-center mb-6">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    className="focus:outline-none transition-transform hover:scale-110"
                                    onMouseEnter={() => setHover(star)}
                                    onMouseLeave={() => setHover(0)}
                                    onClick={() => setRating(star)}
                                >
                                    <Star
                                        size={32}
                                        fill={star <= (hover || rating) ? "#fbbf24" : "none"}
                                        className={star <= (hover || rating) ? "text-amber-400" : "text-zinc-700"}
                                    />
                                </button>
                            ))}
                        </div>

                        <textarea
                            className="w-full h-24 bg-black/20 border border-white/10 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-primary/50 mb-6 resize-none"
                            placeholder="Share your feedback..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />

                        <div className="flex gap-3">
                            <Button variant="ghost" className="flex-1" onClick={onClose}>Cancel</Button>
                            <Button className="flex-1" onClick={handleSubmit} disabled={rating === 0}>Submit Review</Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
