import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center drop-shadow-md">
        Welcome to <span className="text-blue-400">FieldSales</span>
      </h1>
      <p className="text-lg text-gray-300 mb-10 text-center max-w-xl">
        Your smart platform for managing field orders, customers, and product sales — all in one place.
      </p>

      <div className="flex flex-wrap gap-6 justify-center">
        <button
          onClick={() => navigate('/products')}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl shadow-lg text-white font-semibold transition transform hover:scale-105"
        >
          🛍️ Browse Products
        </button>
        <button
          onClick={() => navigate('/salesman-login')}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-2xl shadow-lg text-white font-semibold transition transform hover:scale-105"
        >
          👤 Salesman Login
        </button>
        <button
          onClick={() => navigate('/customer-login')}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl shadow-lg text-white font-semibold transition transform hover:scale-105"
        >
          💼 Customer Login
        </button>
      </div>
    </div>
  );
};

export default Home;

