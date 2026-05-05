import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }
           
            return [...prev, { ...product, qty: 1 }];
        });
    };

    
    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQty = (id, qty) => {
        if (qty <= 0) return removeFromCart(id);
        setCart(prev => prev.map(item =>
            item.id === id ? { ...item, qty } : item
        ));
    };

    const clearCart = () => setCart([]);

    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <CartContext.Provider value={{
            cart, addToCart, removeFromCart, updateQty, clearCart, cartTotal, cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
}

// 2. Custom hook for consuming context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        // Fix: 'Error' must be capitalized
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};