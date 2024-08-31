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
  const [selectedCategory, setSelectedCategory] = useState('all'); // New state for category filtering
  const productsPerPage = 8;

  // Default products data for all categories
  const allProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      rating: 4.5,
      category: "electronics",
      image: "https://th.bing.com/th?id=OIP.FCB33TXqP_3eepbjjans_AAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 399.99,
      rating: 4.7,
      category: "electronics",
      image: "https://th.bing.com/th?id=OIP.-quGE5cEMqVRdl6i20GOggHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 199.99,
      rating: 4.3,
      category: "electronics",
      image: "https://th.bing.com/th?id=OIP.lV3vNSxfd7EtB7untd_jwwHaLD&w=204&h=305&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    },
    {
      id: 4,
      name: "Leather Jacket",
      price: 149.99,
      rating: 4.6,
      category: "men-clothing",
      image: "https://th.bing.com/th?id=OIP.f4tiMLbyTdCoyMr2uR-ZwgAAAA&w=208&h=299&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2", // Replace with actual URL
    },
    {
      id: 5,
      name: "Casual Shirt",
      price: 29.99,
      rating: 4.3,
      category: "men-clothing",
      image: "https://th.bing.com/th?id=OIP.dRuhkVwX_2O5-vxeotsf0gAAAA&w=219&h=284&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2", // Replace with actual URL
    },
    {
      id: 6,
      name: "Luxury Perfume",
      price: 89.99,
      rating: 4.8,
      category: "perfumes",
      image: "https://th.bing.com/th?id=OIP.HEqlDJcJSC-QDodpJ8Ng6AHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2", // Replace with actual URL
    },
    {
      id: 7,
      name: "Eau de Toilette",
      price: 49.99,
      rating: 4.4,
      category: "perfumes",
      image: "https://th.bing.com/th?id=OIP.xRnkCR2PcTQ2SgLW8xQFTgHaHK&w=254&h=245&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2", // Replace with actual URL
    },
    {
      id: 8,
      name: "Rose Plant",
      price: 19.99,
      rating: 4.8,
      category: "garden-flowers",
      image: "https://th.bing.com/th?id=OIP.Q5ru_cO9aghBObUCVzo74gHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2", // Replace with actual URL
    },
    {
      id: 9,
      name: "Sunflower Pot",
      price: 14.99,
      rating: 4.6,
      category: "garden-flowers",
      image: "https://th.bing.com/th?id=OIP.wHR1vxLxnJAe8V0Kuh0mbQHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2", // Replace with actual URL
    },
    // Add more products if needed
  ];

  useEffect(() => {
    // Simulate a network request with a timeout to load default products
    setTimeout(() => {
      setProducts(allProducts);
      setFilteredProducts(allProducts);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter by category
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    const filtered = allProducts.filter(product => 
      category === 'all' || product.category === category
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

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
      <h2>Products</h2>

      {/* Category Filter */}
      <div className="category-filter">
        <button onClick={() => filterByCategory('all')}>All</button>
        <button onClick={() => filterByCategory('electronics')}>Electronics</button>
        <button onClick={() => filterByCategory('men-clothing')}>Men's Clothing</button>
        <button onClick={() => filterByCategory('perfumes')}>Perfumes</button>
        <button onClick={() => filterByCategory('garden-flowers')}>Garden Flowers</button>
      </div>

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
