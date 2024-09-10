import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
    const toggleProfileMenu = () => setProfileMenuOpen(!isProfileMenuOpen);
  
    return (
      <header className="bg-gray-900 text-white shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
          {/* Logo */}
          <div className="flex-1 text-3xl font-extrabold mb-4 md:mb-0">
            <Link to="/" className="hover:text-gray-400">E-Commerce</Link>
          </div>
  
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button className="absolute top-0 right-0 px-4 py-2 text-gray-400 hover:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2 2 4-4" />
              </svg>
            </button>
          </div>
  
          {/* Navigation Links */}
          <nav className="hidden md:flex flex-1 items-center justify-center space-x-8 mb-4 md:mb-0">
            <Link to="/" className="hover:text-gray-400 transition duration-300 text-lg">Home</Link>
            <Link to="/shop" className="hover:text-gray-400 transition duration-300 text-lg">Shop</Link>
            <Link to="/blog" className="hover:text-gray-400 transition duration-300 text-lg">Blog</Link>
            <Link to="/about" className="hover:text-gray-400 transition duration-300 text-lg">About</Link>
            <Link to="/contact" className="hover:text-gray-400 transition duration-300 text-lg">Contact</Link>
          </nav>
  
          {/* Profile and Cart Icons */}
          <div className="relative flex items-center space-x-6">
            {/* Profile Icon */}
            <button
              onClick={toggleProfileMenu}
              className="relative flex items-center text-gray-400 hover:text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14c3.313 0 6-2.687 6-6s-2.687-6-6-6-6 2.687-6 6 2.687 6 6 6zM12 12c1.5 0 2.719.857 3.222 2.007a4.46 4.46 0 0 0-6.444 0c.503-1.15 1.722-2.007 3.222-2.007z" />
              </svg>
              {/* Dropdown Menu */}
              <div className={`absolute right-0 top-full mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg ${isProfileMenuOpen ? 'block' : 'hidden'}`}>
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-700">Profile</Link>
                <Link to="/orders" className="block px-4 py-2 hover:bg-gray-700">Orders</Link>
                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-700">Settings</Link>
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-700">Logout</button>
              </div>
            </button>
  
            {/* Cart Icon */}
            <div className="relative">
              <Link to="/cart" className="flex items-center text-gray-400 hover:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13l.2 1H19a2 2 0 002-2v-2a2 2 0 00-2-2H5.8L4 3H1" />
                </svg>
                <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-2 py-0.5">3</span>
              </Link>
            </div>
          </div>
  
          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-gray-400 hover:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
  
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden bg-gray-800 text-white ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col p-4">
            <Link to="/" className="block py-2 px-4 hover:bg-gray-700 transition duration-300">Home</Link>
            <Link to="/shop" className="block py-2 px-4 hover:bg-gray-700 transition duration-300">Shop</Link>
            <Link to="/blog" className="block py-2 px-4 hover:bg-gray-700 transition duration-300">Blog</Link>
            <Link to="/about" className="block py-2 px-4 hover:bg-gray-700 transition duration-300">About</Link>
            <Link to="/contact" className="block py-2 px-4 hover:bg-gray-700 transition duration-300">Contact</Link>
          </nav>
        </div>
      </header>
  )
}

export default Header
