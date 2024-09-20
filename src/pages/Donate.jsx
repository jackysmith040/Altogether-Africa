import React, { useState } from 'react';
import Footer from '@/components/Footer';
import {Link} from 'react-router-dom'

const Donate = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    phone: '',
    email: '',
    currency: '',
    amount: '',
    card: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <main className=' bg-gray-100 max-w-screen-7xl overflow-hidden'>
       <div className="flex items-center justify-center my-32 gap-2 absolute top-0 left-0 right-0 z-50 text-white text-3xl">
            <Link to="/" className='hover:text-gray-300'>Home</Link><p>/</p> <Link to="/donate" className="font-semibold text-white hover:text-gray-300">Donate</Link>
        </div>
      <div className='h-[300px] relative overflow-hidden w-full'
        style={{
          backgroundImage: 'url(/images/background1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover' 
        }}>
        <div className="absolute inset-0  bg-gradient-to-t from-black/80  to-black/30 flex flex-col px-12 items-start justify-center p-4"></div>
      </div>
    
    <div className="min-h-screen flex items-center justify-center my-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Donate Today</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block font-medium text-gray-700">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Country */}
          <div>
            <label className="block font-medium text-gray-700">Country:</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium text-gray-700">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Currency */}
          <div>
            <label className="block font-medium text-gray-700">Currency:</label>
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Currency</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GHS">GHS</option>
              {/* Add more currencies as needed */}
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="block font-medium text-gray-700">Amount:</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block font-medium text-gray-700">Card Number:</label>
            <input
              type="text"
              name="card"
              value={formData.card}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Expiry Date */}
          <div className="flex space-x-4">
            <div>
              <label className="block font-medium text-gray-700">Expiry Month (MM):</label>
              <input
                type="text"
                name="expiryMonth"
                value={formData.expiryMonth}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Expiry Year (YY):</label>
              <input
                type="text"
                name="expiryYear"
                value={formData.expiryYear}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          {/* Security Code (CVC) */}
          <div>
            <label className="block font-medium text-gray-700">Security Code (CVC):</label>
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-sm hover:bg-blue-600 transition"
              onClick={handleSubmit}
            >
              Donate
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </main>
  );
};

export default Donate;
