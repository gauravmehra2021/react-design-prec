import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import jadoologo from "../../../../public/images/jadoologo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={jadoologo} alt="logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-black">
          <a href="#" className="hover:opacity-70 font-bold">Home</a>
          <a href="#" className="hover:opacity-70  font-bold ">Features</a>
          <a href="#" className="hover:opacity-70  font-bold">Pricing</a>
          <a href="#" className="hover:opacity-70  font-bold">FAQs</a>
          <a href="#" className="hover:opacity-70  font-bold">About</a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition">
            Sign In
          </button>
          <button className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 text-black">
          <a href="#" className="hover:opacity-70  font-bold">Home</a>
          <a href="#" className="hover:opacity-70  font-bold">Features</a>
          <a href="#" className="hover:opacity-70  font-bold">Pricing</a>
          <a href="#" className="hover:opacity-70  font-bold">FAQs</a>
          <a href="#" className="hover:opacity-70  font-bold">About</a>

          <div >
            <button className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition">
              Sign In
            </button>
            <button className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;