import React from 'react'
import { useCart } from './CartContext'
import '../App.css'
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const { cart,updateQty,removeFromCart,cartCount } = useCart(); 
    const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.qty), 0); 
    const navigate = useNavigate();                                                              
    
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
            <div className="cart-footer">
                <hr />
                <div className="cart-summary">
                    <div className="summary-row">
                        <span>Subtotal:</span>
                        <span>${totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="summary-row total">
                        <strong>Grand Total:</strong>
                        <strong>${totalAmount.toFixed(2)}</strong>
                    </div>
                </div>

                <div className="checkout-section">
                    <p className="payment-info">Safe & Secure Checkout</p>
                    <button 
                        className="checkout-btn" 
                        onClick={() => navigate('/checkout')}
                    >
                        Proceed to Payment
                    </button>
                    <div className="payment-methods">
                        {/* You can add small icons here for Visa, M-Pesa, etc. */}
                        <small>Accepted: Credit Card, PayPal, Mobile Money</small>
                    </div>
                </div>
            </div>
        
    </div>
);
}

export default Cart