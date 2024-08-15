import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  // Search Functionality
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // Sorting Functionality
  const handleSort = (e) => {
    const option = e.target.value;
    setSortOption(option);
    let sortedProducts = [...filteredProducts];
    
    if (option === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (option === 'rating') {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(sortedProducts);
  };

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="products-page">
      <h2>Our Products</h2>

      {/* Search Bar */}
      <div className="search-sort-container">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearch}
        />

        {/* Sort Dropdown */}
        <select value={sortOption} onChange={handleSort}>
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Product List */}
      <div className="product-list">
        {currentProducts.length > 0 ? (
          currentProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => handlePagination(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
