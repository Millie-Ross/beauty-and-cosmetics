import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import '../App.css';

const Checkout = () => {
    const { cart, cartCount } = useCart();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('');

    const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    if (!paymentMethod) {
        alert("Please select a payment method!");
        return;
    }

    if (paymentMethod === 'mpesa') {
        // Direct to Mpesa.jsx route
        // You can also pass the totalAmount so Mpesa knows how much to charge
        navigate('/mpesa', { state: { amount: totalAmount } });
    } else {
        // Handle other payment methods (Card, PayPal, etc.)
        console.log(`Processing ${paymentMethod} payment for Ksh${totalAmount}`);
        alert(`Thank you! Your order via ${paymentMethod} is being processed.`);
        navigate('/');
    }
};

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            
            <div className="order-summary">
                <h4>Order Summary ({cartCount} items)</h4>
                <p>Total Amount: <strong>Ksh{totalAmount.toFixed(2)}</strong></p>
            </div>

            <form onSubmit={handlePlaceOrder} className="payment-form">
                <h4>Select Payment Method</h4>
                
                <div className="payment-options">
                    <label className={`payment-card ${paymentMethod === 'card' ? 'active' : ''}`}>
                        <input 
                            type="radio" 
                            name="payment" 
                            value="card" 
                            onChange={(e) => setPaymentMethod(e.target.value)} 
                        />
                        <span className="method-name">Credit / Debit Card</span>
                    </label>

                    <label className={`payment-card ${paymentMethod === 'mpesa' ? 'active' : ''}`}>
                        <input 
                            type="radio" 
                            name="payment" 
                            value="mpesa" 
                            onChange={(e) => setPaymentMethod(e.target.value)} 
                        />
                        <span className="method-name">Mobile Money (M-Pesa)</span>
                    </label>

                    <label className={`payment-card ${paymentMethod === 'paypal' ? 'active' : ''}`}>
                        <input 
                            type="radio" 
                            name="payment" 
                            value="paypal" 
                            onChange={(e) => setPaymentMethod(e.target.value)} 
                        />
                        <span className="method-name">PayPal</span>
                    </label>
                </div>

                <button type="submit" className="place-order-btn">
                    Place Order (${totalAmount.toFixed(2)})
                </button>
            </form>
        </div>
    );
};

export default Checkout;