import React from 'react';
import {HashLink as Link} from 'react-router-hash-link'
import Logo from '/images/image-10.jpg'
import { Facebook, Linkedin, Twitter, Send} from 'lucide-react'; 

const Footer = () => {

  const handleSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className=" p-2 rounded-full">
                <img src={Logo} alt="Logo of all together africa" />
            </div>
          </div>
          <p className="text-sm font-light text-justify px-1">
          The Alltogather Africa is a non-profit organization based in West Africa that aims to address African youth challenges using technology for inclusive growth and decent employment in line with UN Sustainable Development Goal 8.
          </p>
          <div className="flex space-x-4">
            <Link to="#" aria-label="LinkedIn" className="text-white hover:text-blue-300">
              <Linkedin />
            </Link>
            <Link to="#" aria-label="LinkedIn" className="text-white hover:text-blue-300">
              <Facebook />
            </Link>
            <Link to="#" aria-label="LinkedIn" className="text-white hover:text-blue-300">
              <Twitter />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Link</h4>
          <ul className="space-y-2 text-sm font-light">
            <li><Link to="#projects" className="hover:text-blue-300">Our Projects</Link></li>
            <li><Link to="#what-we-do" className="hover:text-blue-300">What We Do</Link></li>
            <li><Link to="/get-involved" className="hover:text-blue-300">Get Involved</Link></li>
            <li><Link to="#team" className="hover:text-blue-300">Our Team</Link></li>
          </ul>
        </div>

        {/* Recent News */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Customer Services</h4>
          <ul className="space-y-2 text-sm font-light">
            <li><Link to="#contact" className="hover:text-blue-300">Contact Us</Link></li>
            <li><Link to="#" className="hover:text-blue-300">FAQs</Link></li>
            <li><Link to="#" className="hover:text-blue-300">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Your opinion is important to us. So contact us for any service.</p>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-gray-200 text-black p-2 outline-none flex-grow"
            />
            <button className="bg-primay px-4 rounded-lg hover:text-blue-300" onClick={handleSubmit}>
              <Send />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-400 pt-4 text-sm text-center">
        <p>&copy; Copyright 2024 All Together Africa. All Rights Reserved | Developed by Gideon Korbla Hoenyefia</p>
        {/* <div className="mt-2 space-x-4">
          <Link to="#" className="hover:text-blue-300">Privacy Policy</Link>
          <Link to="#" className="hover:text-blue-300">Terms & Condition</Link>
          <Link to="#" className="hover:text-blue-300">Join Us</Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
