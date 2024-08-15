import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  // Simulate fetching product details from an API or a static list
  const products = [
    { id: '1', name: 'Product 1', description: 'Detailed description of Product 1', price: '$29.99' },
    { id: '2', name: 'Product 2', description: 'Detailed description of Product 2', price: '$49.99' },
    { id: '3', name: 'Product 3', description: 'Detailed description of Product 3', price: '$19.99' },
    { id: '4', name: 'Product 4', description: 'Detailed description of Product 4', price: '$39.99' },
  ];

  // Find the product by ID
  const product = products.find(p => p.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
