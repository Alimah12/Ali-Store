import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Our Store</h1>
            <p className="hero-subtitle">Discover the latest trends and exclusive offers!</p>
            <button className="shop-now">Shop Now</button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <Link to="/product/1">
              <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQeVz9pm7PxylEfdegEfF6EqxgBmwqF-PaIMUvz_z1qG7n_xSVfgjr3xSGk17HK3zp7kU3pBHoPrWbgW5mXvffub9gkEgdhuVcdR0utc5D7hg4UX20ntpNekh2dPSCFCux1RyK00L2iyhA&usqp=CAc" alt="Product 1" />
              <h3>Product 1</h3>
              <p>$29.99</p>
            </Link>
          </div>
          <div className="product-card">
            <Link to="/product/2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8jWyxf3ICA42CQ6sBBQkMqKMOaNuPu5GwI113LF9tfqEWG6UhYpP8GhMYkfDK9XrCx8&usqp=CAU" alt="Product 2" />
              <h3>Product 2</h3>
              <p>$49.99</p>
            </Link>
          </div>
          <div className="product-card">
            <Link to="/product/3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwORZdZ14Q5doB3ML5xVA5Pw_QpFxy1dSnK4y--1av7cXX4UbYTDT3yyTT_oip22DzLIM&usqp=CAU" alt="Product 3" />
              <h3>Product 3</h3>
              <p>$19.99</p>
            </Link>
          </div>
          <div className="product-card">
            <Link to="/product/4">
              <img src="https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bioeNAo7zEqALK6jvyGlxeP_Y7h6j0QjuWbwY4E_eP8=" alt="Product 4" />
              <h3>Product 4</h3>
              <p>$39.99</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="promo-banners">
        <div className="promo-banner">
          <img src="https://media.istockphoto.com/id/864505242/photo/mens-clothing-and-personal-accessories.jpg?s=612x612&w=0&k=20&c=TaJuW3UY9IZMijRrj1IdJRwd6iWzXBlrZyQd1uyBzEY=" alt="Promo 1" />
          <div className="promo-content">
            <h3>Summer Sale</h3>
            <p>Up to 50% off selected items</p>
            <button className="shop-now">Shop Now</button>
          </div>
        </div>
        <div className="promo-banner">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTs5pS5KMmYwoRnATvOEJTGEJ8rOYoQu3D-3VHJuNKQPdQMplKIzA95hyWNwE5uj6_89k&usqp=CAU" alt="Promo 2" />
          <div className="promo-content">
            <h3>New Arrivals</h3>
            <p>Check out the latest products</p>
            <button className="shop-now">Shop Now</button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_G-eNkIaIEDK0tnRQ62slcsyK8wusWLZcsuGn1RNeEMLZsNPZNgVJQMQfOI7s0El33A&usqp=CAU" alt="category 1" />
            <h3>Clothing</h3>
          </div>
          <div className="category-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3l4TOlOO65IV-fNLlwN_qcd5et6ZgF6FIKH0srCsadMmjjacYKxl_CL35F5sIZrrw1w&usqp=CAU" alt="category 2" />
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <img src="https://media.istockphoto.com/id/1145068449/photo/shopping-at-garden-plants-store-buxus-on-cart.jpg?s=612x612&w=0&k=20&c=tt6O8wyvIHQXsmoQ1UGOAs0MwLB32XjibMGeaQhVu_U=" alt="Category 3" />
            <h3>Home & Garden</h3>
          </div>
          <div className="category-card">
            <img src="https://media.istockphoto.com/id/487491992/photo/farmers-food-market-stall-with-variety-of-organic-vegetable.jpg?s=612x612&w=0&k=20&c=8LwR_owLOl62mUOb0GElxgNz8hsgtgeSmzBu9OvodkI=" alt="Category 4" />
            <h3>Beauty & Health</h3>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Join Our Newsletter</h2>
        <p>Get the latest updates on new products and upcoming sales</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
