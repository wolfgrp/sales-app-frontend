import React, { useState } from 'react';
import axios from 'axios';

const CustomerLogin = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const sendOtp = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/auth/send-otp', { email });
      if (res.data.success) {
        setOtpSent(true);
        setMessage('OTP sent to your email');
      } else {
        setMessage('Failed to send OTP');
      }
    } catch {
      setMessage('Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/auth/verify-otp', { email, otp });
      if (res.data.success) {
        localStorage.setItem('customerEmail', email);
        setMessage('Login successful!');
      } else {
        setMessage('Invalid OTP');
      }
    } catch {
      setMessage('OTP verification failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Customer Login</h2>

      {!otpSent ? (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            className="mb-3 px-4 py-2 rounded bg-gray-700 w-full max-w-xs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            onClick={sendOtp}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white"
          >
            Send OTP
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            className="mb-3 px-4 py-2 rounded bg-gray-700 w-full max-w-xs"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            onClick={verifyOtp}
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white"
          >
            Verify OTP
          </button>
        </>
      )}

      {message && <p className="mt-4 text-sm text-yellow-300">{message}</p>}
    </div>
  );
};

export default CustomerLogin;

