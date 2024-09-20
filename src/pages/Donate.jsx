import React, { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost:8000/donate', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccessMessage('Thank you for your donation! Email confirmation has been sent.');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to process donation. Please try again.');
      setSuccessMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className='overflow-hidden bg-gray-100 max-w-screen-7xl'>
      <Navbar />
      <div className='h-[300px] relative overflow-hidden w-full'
        style={{
          backgroundImage: 'url(/images/background1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover'
        }}>
        <div className="absolute inset-0 flex flex-col items-start justify-center p-4 px-12 bg-gradient-to-t from-black/80 to-black/30"></div>
      </div>

      <div className="flex items-center justify-center min-h-screen my-5">
        <div className="w-full max-w-xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold text-center">Donate Today</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block font-medium text-gray-700">Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
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
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
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
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
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
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
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
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select Currency</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GHS">GHS</option>
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
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            {/* Card Information */}
            <div>
              <label className="block font-medium text-gray-700">Card Number:</label>
              <input
                type="text"
                name="card"
                value={formData.card}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex space-x-4">
              <div>
                <label className="block font-medium text-gray-700">Expiry Month (MM):</label>
                <input
                  type="text"
                  name="expiryMonth"
                  value={formData.expiryMonth}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
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
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            {/* CVC */}
            <div>
              <label className="block font-medium text-gray-700">Security Code (CVC):</label>
              <input
                type="text"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Donate'}
              </button>
            </div>
          </form>
          {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
          {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Donate;
