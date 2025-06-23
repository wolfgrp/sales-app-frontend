import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Branding Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center drop-shadow-xl">
        Welcome to <span className="text-blue-500">FieldSales</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-300 mb-10 text-center max-w-2xl">
        Manage field orders, customer relationships, and product sales — all in one powerful platform.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-6 justify-center">
        <button
          onClick={() => navigate('/products')}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl shadow-md font-semibold transition hover:scale-105"
        >
          🛍️ Browse Products
        </button>

        <button
          onClick={() => navigate('/salesman-login')}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-2xl shadow-md font-semibold transition hover:scale-105"
        >
          👤 Salesman Login
        </button>

        <button
          onClick={() => navigate('/customer-login')}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl shadow-md font-semibold transition hover:scale-105"
        >
          💼 Customer Login
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-400 text-sm">
        <p>📞 WhatsApp: <a href="https://wa.me/918882447570" target="_blank" className="underline hover:text-white">+91-8882447570</a></p>
        <p>📧 Email: info@shreechitraguptaenterprises.in</p>
      </footer>
    </div>
  );
};

export default Home;
