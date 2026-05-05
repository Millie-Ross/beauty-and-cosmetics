import React from 'react'
import { useCart } from './CartContext'

const Cart = () => {
    const {cart,updateQty,removeFromCart,cartCount}=useCart();
    
  return (
    <div>
        {cart.map(item=>(
                            <div key={item.id}>
                                {item.name}-qty:{item.qty}
                                <button className="cart-badge" onClick={()=>removeFromCart(item.id)}>Remove</button>
                                    <span className='cart-icon' role='img' aria-label='cart'>

                                    </span>
                                    <span className='cart-text'>Cart</span>
                                    <span className='cart-button'>{cartCount}</span>
                                    
                                    
                                </div>
                        ))}
      
    </div>
  )
}

export default Cart
