// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      {/* Product Image */}
      <img src={product.image} alt={product.name} className="product-image" />
      
      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        {/* Rating (Optional Feature) */}
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`star ${i < product.rating ? 'filled' : ''}`}>&#9733;</span>
          ))}
        </div>
        
        {/* Product Price */}
        <p className="product-price">${product.price.toFixed(2)}</p>
        
        {/* Add to Cart Button */}
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
