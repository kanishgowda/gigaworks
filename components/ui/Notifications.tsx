"use client";

import { useState } from "react";
import { Bell, Check, Info, AlertTriangle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const MOCK_NOTIFICATIONS = [
    { id: 1, title: "Offer Accepted", message: "Client 'TechStart' accepted your proposal for 'Logo Design'.", type: "success", time: "2 min ago" },
    { id: 2, title: "New Message", message: "Hey, can you share your portfolio?", type: "info", time: "1 hour ago" },
    { id: 3, title: "Payment Received", message: "₹2,000 has been credited to your wallet.", type: "success", time: "3 hours ago" },
    { id: 4, title: "Gig Update", message: "Deadline for 'React App' is approaching.", type: "warning", time: "1 day ago" },
];

export function Notifications() {
    const [isOpen, setIsOpen] = useState(false);
    const [unreadCount, setUnreadCount] = useState(3);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setUnreadCount(0); // Mark all as read on open
        }
    };

    return (
        <div className="relative">
            <button
                onClick={toggleOpen}
                className="relative p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="Notifications"
            >
                <Bell size={20} />
                {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-background">
                        {unreadCount}
                    </span>
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40 bg-transparent"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute right-0 mt-3 w-80 md:w-96 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 origin-top-right"
                        >
                            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-zinc-900/50 backdrop-blur-sm">
                                <h3 className="font-bold text-white text-sm">Notifications</h3>
                                <button className="text-xs text-primary hover:text-primary/80">Mark all as read</button>
                            </div>

                            <div className="max-h-[400px] overflow-y-auto">
                                {MOCK_NOTIFICATIONS.map((notif) => (
                                    <div key={notif.id} className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer flex gap-3">
                                        <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border ${notif.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                                                notif.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                                                    'bg-blue-500/10 border-blue-500/20 text-blue-400'
                                            }`}>
                                            {notif.type === 'success' ? <Check size={14} /> :
                                                notif.type === 'warning' ? <AlertTriangle size={14} /> : <Info size={14} />}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white mb-0.5">{notif.title}</p>
                                            <p className="text-xs text-zinc-400 leading-snug mb-1.5">{notif.message}</p>
                                            <p className="text-[10px] text-zinc-600">{notif.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-3 text-center border-t border-white/5 bg-zinc-900/50">
                                <button className="text-xs text-zinc-500 hover:text-white transition-colors">View All Activities</button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
