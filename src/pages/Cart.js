import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  // Calculate total price based on the quantity of each item
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>

                  {/* Quantity Selector */}
                  <div className="cart-item-quantity">
                    <label>Quantity:</label>
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    >
                      {[...Array(10).keys()].map(n => (
                        <option key={n + 1} value={n + 1}>
                          {n + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total Price */}
          <div className="cart-total">
            <h3>Total: ${totalPrice}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
