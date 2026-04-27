import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false);

  return (
    <nav className="bg-[#f9e0aeFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <img
                src="/images/vector.svg"
                alt="Logo"
                className="h-7 w-7 md:h-10 md:w-10 rounded-full object-cover"
              />
              <span
                className="text-[28px] md:text-[40px] text-gray-800"
                style={{ fontFamily: "Jim Nightshade, cursive" }}
              >
                Educare
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-semibold"
          style={{ fontFamily: "Poppins, sans-serif" }}>

            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>

            <a href="#" className="text-gray-700 hover:text-blue-600">
              About
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                <span>Services</span>
                <svg className="w-4 h-4 mt-1"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 mt-3 w-48 bg-white shadow-lg rounded-md 
                              opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                              transition duration-200 z-50">

                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Frontend Development
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Backend Development
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  UI/UX Design
                </a>

              </div>
            </div>

            {/* Blog Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                <span>Blog</span>
                <svg className="w-4 h-4 mt-1"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div className="absolute left-0 mt-3 w-40 bg-white shadow-lg rounded-md 
                              opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                              transition duration-200 z-50">

                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Latest Posts
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Tutorials
                </a>

              </div>
            </div>

            {/* CTA */}
            <button
              className="text-white bg-[#c24914FF] hover:bg-orange-600 
              px-4 py-2 rounded-md font-bold text-sm md:text-base">
              Contact us
            </button>

          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-6 h-6 text-gray-700"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 shadow-md"
        >

          <a href="#" className="block">Home</a>
          <a href="#" className="block">About</a>

          {/* Mobile Services */}
          <div>
            <button
              onClick={() => setMobileMegaOpen(!mobileMegaOpen)}
              className="w-full flex justify-between font-medium"
            >
              Services
              <span>{mobileMegaOpen ? "▲" : "▼"}</span>
            </button>

            {mobileMegaOpen && (
              <div className="mt-2 space-y-2 text-sm pl-3 text-gray-600">
                <p>Frontend</p>
                <p>Backend</p>
                <p>UI/UX</p>
              </div>
            )}
          </div>

          <a href="#" className="block">Blog</a>

          <button className="w-full text-white bg-[#c24914FF] py-2 rounded-md">
            Contact us
          </button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;