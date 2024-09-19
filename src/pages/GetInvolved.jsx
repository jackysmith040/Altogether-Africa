import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const GetInvolved = () => {
  // Move useState inside the component
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
    <main className='max-w-screen-7xl overflow-x-hidden bg-gray-100'>
      <Navbar />
      <div className='h-[300px] relative overflow-hidden w-full'
        style={{
          backgroundImage: 'url(/images/background1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover' 
        }}>
        <div className="absolute inset-0  bg-gradient-to-t from-black/80  to-black/20 flex flex-col px-12 items-start justify-center p-4"></div>
      </div>
      <section className=''>
        <div className="min-h-screen flex items-center justify-center my-5">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-semibold text-center mb-6">Get Involved</h2>
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

              {/* Address */}
              <div>
                <label className="block font-medium text-gray-700">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
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
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
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
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
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
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
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
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
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
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
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
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
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
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  rows="2"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default GetInvolved;
