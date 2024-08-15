// src/pages/Checkout.js
import React, { useState } from 'react';

const Checkout = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePayment = () => {
    // Payment logic will be added here
    alert(`Processing payment for ${phoneNumber}`);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your M-Pesa number"
        />
        <button type="button" onClick={handlePayment}>
          Pay with M-Pesa
        </button>
      </form>
    </div>
  );
};

export default Checkout;
