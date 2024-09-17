import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '/images/image-10.jpg'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            {/* Replace this div with your logo */}
            <div className=" p-2 rounded-full">
                <img src={Logo} alt="Logo of all together africa" />
            </div>
          </div>
          <p className="text-sm font-light">
          We are a non-profit organization bridging success in Africa by addressing challenges faced by governments, businesses, and communities. We adapt effective global best practices and technologies, ensuring their smooth transfer. Committed to the UN's Sustainable Development Goal 8, we promote inclusive economic growth and decent work for all, working together to tackle Africa’s developmental challenges.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-white hover:text-green-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-green-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-green-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-green-400">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Link</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400">Water Conservation</a></li>
            <li><a href="#" className="hover:text-green-400">Global Warming</a></li>
            <li><a href="#" className="hover:text-green-400">Climate Adaptation</a></li>
            <li><a href="#" className="hover:text-green-400">Urban Planning</a></li>
            <li><a href="#" className="hover:text-green-400">Energy Consulting</a></li>
          </ul>
        </div>

        {/* Recent News */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Recent News</h4>
          <ul className="space-y-4">
            <li className="flex space-x-2">
              <div className="w-12 h-12 bg-green-600 rounded-full">
                {/* Image placeholder */}
              </div>
              <div>
                <p className="hover:text-green-400">Go Green And Reduce Your Carbon...</p>
                <span className="text-sm text-gray-400">April 3, 2024</span>
              </div>
            </li>
            <li className="flex space-x-2">
              <div className="w-12 h-12 bg-green-600 rounded-full">
                {/* Image placeholder */}
              </div>
              <div>
                <p className="hover:text-green-400">Make A Statement Support Of The...</p>
                <span className="text-sm text-gray-400">April 3, 2024</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Your opinion is important to us. So contact us for any service.</p>
          <div className="flex items-center border border-green-500 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-black text-white p-2 focus:outline-none flex-grow"
            />
            <button className="bg-green-500 p-3">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center">
        <p>&copy; Copyright 2024 All Together Africa. All Rights Reserved</p>
        <div className="mt-2 space-x-4">
          <Link to="#" className="hover:text-primary">Privacy Policy</Link>
          <Link to="#" className="hover:text-primary">Terms & Condition</Link>
          <Link to="#" className="hover:text-primary">Join Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
