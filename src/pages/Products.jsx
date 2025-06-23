import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl text-center mb-6 font-bold">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <div key={idx} className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">🛒 Cart</h3>
        {cart.length === 0 ? (
          <p>No items added.</p>
        ) : (
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>{item.name} - ₹{item.price}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Products;

