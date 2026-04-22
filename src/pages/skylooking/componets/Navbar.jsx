import { ChevronDown, Settings } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4">

          {/* Logo */}
          <div className="text-white text-lg font-bold text-center sm:text-left">
            WEATHER TODAY
          </div>

          {/* Dropdown */}
          <div className="relative inline-block text-left" ref={dropdownRef}>
            
            {/* Button */}
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 bg-[#25253f] text-white px-4 py-2 rounded-lg hover:bg-[#33335a] transition w-full sm:w-auto justify-center"
            >
              <Settings className="w-4 h-4" />
              <span>Units</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
                <div className="py-1">
                  <button
                    onClick={() => setOpen(false)}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Celsius (°C)
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Fahrenheit (°F)
                  </button>
                </div>
              </div>
            )}

          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;