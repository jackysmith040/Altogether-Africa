import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import Logo from '/images/image-10-removebg.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Navigation Items
  const NavList = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/' },
    { title: 'Projects', path: '/' },
    { title: 'What We Do', path: '/' },
    { title: 'Contact Us', path: '/' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-2 xl:px-22 transition-all duration-300  ${
      isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-[#f8f8f8]'
    }`}>
      <nav className="flex justify-between items-center container md:py-2 pt-6 pb-3">
        {/* Logo */}
        <div>
          <img src={Logo} alt="logo" />
        </div>

        {/* Navigation Lists */}
        <div className='flex item-center gap-8'>
          <ul className='hidden lg:flex items-center gap-8 text-lg'>
            {NavList.map(({ title, path }) => (
              <li key={title} className='hover:text-[#325d90]'>
                <NavLink to={path} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {title}
                </NavLink>
              </li>
            ))}
            {/* Dropdown Menu for Support */}
            <li className='hover:text-[#325d90]'>
              <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer outline-none">Support</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link to="/get-involved">Get Involved</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/donate">Donate</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar Nav */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white text-black transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="text-center p-10 flex flex-col gap-4">
          {NavList.map(({ title, path }) => (
            <li key={title} className='hover:text-[#325d90] my-3 cursor-pointer'>
              <Link to={path} onClick={toggleMenu}>
                {title}
              </Link>
            </li>
          ))}
          {/* Support Dropdown in Mobile View */}
          <li className="hover:text-[#325d90] my-3 cursor-pointer">
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full text-center">Support</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/get-involved">Get Involved</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/donate">Donate</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
