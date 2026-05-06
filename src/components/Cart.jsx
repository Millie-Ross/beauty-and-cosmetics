import React from 'react'
import { useCart } from './CartContext'
import '../App.css'

const Cart = () => {
    const { cart,updateQty,removeFromCart,cartCount } = useCart(); 
    
    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2>Your Cart</h2>
                <span className="cart-total-badge">
                    Total Items: <strong>{cartCount}</strong>
                </span>
            </div>

            {cart.length === 0 ? (
                <p className="empty-cart-text">Your cart is empty.</p>
            ) : (
                <div className="cart-items-list">
                    {cart.map(item => (
                        <div className="cart-item-card" key={item.id}>
                            
                            <div className="cart-item-details">
                                <h3 className="cart-item-title">{item.name}</h3>
                                <p className="cart-item-qty">Quantity: {item.qty}</p>
                                <p className="cart-item-price">${(item.price * item.qty).toFixed(2)}</p>
                            </div>

                        
                            <div className="cart-item-actions">
                                <div className="qty-controls">
                                    <button 
                                        className="qty-btn" 
                                        onClick={() => updateQty(item.id, item.qty - 1)}
                                        disabled={item.qty <= 1}
                                    >
                                        -
                                    </button>
                                    <span className="qty-value">{item.qty}</span>
                                    <button 
                                        className="qty-btn" 
                                        onClick={() => updateQty(item.id, item.qty + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button 
                                    className="remove-btn" 
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Cart