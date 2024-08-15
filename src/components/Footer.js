// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Customer Service Section */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <p>Email: support@shoppingsite.com</p>
          <p>Phone: 1-800-123-4567</p>
          <p>Hours: Mon-Fri, 9am - 6pm</p>
        </div>

        {/* Store Policies Section */}
        <div className="footer-section">
          <h4>Store Policies</h4>
          <p>Free returns within 30 days</p>
          <p>Worldwide shipping available</p>
        </div>

        {/* Payment Methods */}
        <div className="footer-section">
          <h4>We Accept</h4>
          <div className="payment-icons">
            <img src="/icons/visa-icon.png" alt="Visa" />
            <img src="/icons/mastercard-icon.png" alt="Mastercard" />
            <img src="/icons/paypal-icon.png" alt="PayPal" />
            <img src="/icons/amex-icon.png" alt="American Express" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shopping Site. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
