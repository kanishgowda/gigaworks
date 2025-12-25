"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Gig } from "@/lib/types";

interface CartContextType {
    cart: Gig[];
    addToCart: (gig: Gig) => void;
    removeFromCart: (gigId: string) => void;
    clearCart: () => void;
    cartCount: number;
    cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<Gig[]>([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("gigaworks_cart");
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save cart to localStorage on change
    useEffect(() => {
        localStorage.setItem("gigaworks_cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (gig: Gig) => {
        setCart((prev) => {
            if (prev.find((item) => item.id === gig.id)) return prev;
            return [...prev, gig];
        });
    };

    const removeFromCart = (gigId: string) => {
        setCart((prev) => prev.filter((item) => item.id !== gigId));
    };

    const clearCart = () => setCart([]);

    const cartCount = cart.length;
    const cartTotal = cart.reduce((acc, item) => {
        return acc + item.price;
    }, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
