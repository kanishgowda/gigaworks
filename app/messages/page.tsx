"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AIInput } from "@/components/ui/AIInput";

// Mock Data
const CONTACTS = [
    { id: 1, name: "TechStart Inc.", role: "Client", lastMsg: "Payment confirmed, thanks!", time: "2m", online: true, avatar: "T" },
    { id: 2, name: "Sarah J.", role: "Freelancer", lastMsg: "I'll upload the files by 5 PM.", time: "1h", online: false, avatar: "S" },
    { id: 3, name: "John Doe", role: "Client", lastMsg: "Sounds good.", time: "1d", online: true, avatar: "J" },
];

const MESSAGES = [
    { id: 1, sender: "them", text: "Hi! I saw your proposal for the Logo Design gig.", time: "10:30 AM" },
    { id: 2, sender: "me", text: "Hello! Yes, I specialize in minimal vector logos.", time: "10:32 AM" },
    { id: 3, sender: "me", text: "I can deliver the first draft within 24 hours.", time: "10:32 AM" },
    { id: 4, sender: "them", text: "That sounds perfect. Do you need any specific assets from us?", time: "10:35 AM" },
];

export default function MessagesPage() {
    const [activeChat, setActiveChat] = useState(CONTACTS[0]);
    const [messages, setMessages] = useState(MESSAGES);
    const [inputText, setInputText] = useState("");

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        setMessages([...messages, {
            id: Date.now(),
            sender: "me",
            text: inputText,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setInputText("");
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <main className="flex-1 pt-20 container mx-auto max-w-7xl h-[calc(100vh-80px)] p-4">
                <div className="bg-zinc-900 border border-white/5 rounded-2xl h-full flex overflow-hidden">

                    {/* SIDEBAR */}
                    <aside className="w-80 border-r border-white/5 bg-zinc-900/50 flex flex-col">
                        <div className="p-4 border-b border-white/5">
                            <h2 className="font-bold text-white mb-4">Messages</h2>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                                <input type="text" placeholder="Search chats..." className="w-full bg-black/20 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50" />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            {CONTACTS.map(contact => (
                                <button
                                    key={contact.id}
                                    onClick={() => setActiveChat(contact)}
                                    className={`w-full p-4 flex items-center gap-3 hover:bg-white/5 transition-colors text-left ${activeChat.id === contact.id ? 'bg-white/5' : ''}`}
                                >
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white">
                                            {contact.avatar}
                                        </div>
                                        {contact.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-zinc-900 rounded-full"></div>}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <span className="font-bold text-white font-sm truncate">{contact.name}</span>
                                            <span className="text-xs text-zinc-500">{contact.time}</span>
                                        </div>
                                        <p className="text-xs text-zinc-400 truncate">{contact.lastMsg}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* CHAT AREA */}
                    <section className="flex-1 flex flex-col bg-zinc-950/30">
                        {/* Header */}
                        <header className="p-4 border-b border-white/5 flex justify-between items-center bg-zinc-900/50 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white">
                                    {activeChat.avatar}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">{activeChat.name}</h3>
                                    <span className="text-xs text-zinc-400">{activeChat.online ? 'Online' : 'Offline'}</span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white"><Phone size={18} /></Button>
                                <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white"><Video size={18} /></Button>
                                <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white"><MoreVertical size={18} /></Button>
                            </div>
                        </header>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[70%] p-3 rounded-2xl ${msg.sender === 'me'
                                        ? 'bg-primary text-white rounded-tr-none'
                                        : 'bg-zinc-800 text-zinc-200 rounded-tl-none'
                                        }`}>
                                        <p className="text-sm">{msg.text}</p>
                                        <span className={`text-[10px] block text-right mt-1 ${msg.sender === 'me' ? 'text-white/60' : 'text-zinc-500'}`}>{msg.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/5 bg-zinc-900/50 backdrop-blur-md">
                            <form onSubmit={handleSend} className="flex gap-2">
                                <Button type="button" variant="ghost" className="text-zinc-400 hover:text-white px-2">
                                    <Paperclip size={20} />
                                </Button>
                                <AIInput
                                    placeholder="Type a message... (AI can help!)"
                                    value={inputText}
                                    onChange={setInputText}
                                    onGenerate={setInputText}
                                    className="flex-1"
                                />
                                <Button type="submit" disabled={!inputText.trim()} className="px-4">
                                    <Send size={18} />
                                </Button>
                            </form>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
