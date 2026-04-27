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
                src="/images/vector.svg"   // ✅ fixed path
                alt="Logo"
                className="h-7 w-7 md:h-10 md:w-10 rounded-full object-cover"
              />
              <span
                className="font-normal text-[40px] leading-[1.2] text-gray-800"
                style={{ fontFamily: "Jim Nightshade, cursive" }}
              >
                Educare
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8"
            style={{ fontFamily: "Poppins, sans-serif" }}>

            <a href="#" className="text-gray-700 hover:text-blue-600 font-semibold">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-semibold">
              About
            </a>

            {/* Mega Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-semibold">
                <span>Services</span>
                <span className="mt-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                </span>
              </button>

            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-semibold">
                <span>Blog</span>
                <span className="mt-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                </span>
              </button>

            </div>


            <button
              type="button"
              className="text-white bg-[#c24914FF] hover:bg-orange-600 
             border border-transparent shadow-sm 
              px-4 py-2.5
             font-bold text-[20px] leading-[1.2] rounded-md"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contact us
            </button>

          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3 shadow-md">

          <a href="#" className="block font-medium">Home</a>

          {/* Mobile Mega */}
          <div>
            <button
              onClick={() => setMobileMegaOpen(!mobileMegaOpen)}
              className="w-full flex justify-between font-medium"
            >
              Services
              <span>{mobileMegaOpen ? "▲" : "▼"}</span>
            </button>

            {mobileMegaOpen && (
              <div className="mt-3 space-y-4 text-sm">

                <div>
                  <h3 className="font-semibold">Web Development</h3>
                  <ul className="ml-4 text-gray-600">
                    <li>Frontend</li>
                    <li>Backend</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Design</h3>
                  <ul className="ml-4 text-gray-600">
                    <li>UI/UX</li>
                    <li>Graphic</li>
                  </ul>
                </div>

              </div>
            )}
          </div>

          <a href="#" className="block font-medium">About</a>
          <a href="#" className="block font-medium">Contact</a>

        </div>
      )}
    </nav>
  );
};

export default Navbar;