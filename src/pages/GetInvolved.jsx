import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import axios from 'axios'; // To send HTTP requests

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    phone: '',
    address: '',
    organisationName: '',
    selectedItem: '',
    email: '',
    organisationProfile: '',
    website: '',
    statementOfRequest: '',
    giveBackPledge: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:8000/get-started', {
        name: formData.fullName,
        email: formData.email,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error sending email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='overflow-x-hidden bg-gray-100 max-w-screen-7xl'>
      <Navbar />
      <div className='h-[300px] relative overflow-hidden w-full'
        style={{
          backgroundImage: 'url(/images/background1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover' 
        }}>
        <div className="absolute inset-0 flex flex-col items-start justify-center p-4 px-12 bg-gradient-to-t from-black/80 to-black/20"></div>
      </div>
      <section className=''>
        <div className="flex items-center justify-center min-h-screen my-5">
          <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-6 text-2xl font-semibold text-center">Get Involved</h2>
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

              {/* Address */}
              <div>
                <label className="block font-medium text-gray-700">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Organisation Name */}
              <div>
                <label className="block font-medium text-gray-700">Organisation Name:</label>
                <input
                  type="text"
                  name="organisationName"
                  value={formData.organisationName}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Choose an Item */}
              <div>
                <label className="block font-medium text-gray-700">Choose an Item:</label>
                <select
                  name="selectedItem"
                  value={formData.selectedItem}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="partnership">Seeking Partner</option>
                  <option value="funding">Sharing Partner</option>
                  <option value="mentorship">Volunteer</option>
                  <option value="other">Other</option>
                </select>
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

              {/* Organisation Profile */}
              <div>
                <label className="block font-medium text-gray-700">Organisation Profile:</label>
                <textarea
                  name="organisationProfile"
                  value={formData.organisationProfile}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                  rows="3"
                  required
                />
              </div>

              {/* Website */}
              <div>
                <label className="block font-medium text-gray-700">Website:</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Statement of Request */}
              <div>
                <label className="block font-medium text-gray-700">
                  Statement of Request (not more than 500 words):
                </label>
                <textarea
                  name="statementOfRequest"
                  value={formData.statementOfRequest}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                  rows="5"
                  maxLength="500"
                  required
                />
              </div>

              {/* The Give Back Pledge */}
              <div>
                <label className="block font-medium text-gray-700">The Give Back Pledge:</label>
                <textarea
                  name="giveBackPledge"
                  value={formData.giveBackPledge}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                  rows="2"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>

              {/* Message */}
              {message && <p className="mt-4 text-center">{message}</p>}
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default GetInvolved;
