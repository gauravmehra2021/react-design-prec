import { ChevronDown, Settings } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      
                <div className="max-w-7xl mx-auto px-4">
                    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4 ">

                        {/* Logo */}
                        <div className="text-white  text-lg text-center sm:text-left text-lg font-bold">
                            WEATHER TODAY
                        </div>

                        {/* Units Dropdown Button */}
                        <div className="flex justify-center sm:justify-end">
                            <button className="flex items-center gap-2 bg-[#25253f] text-white px-4 py-2 rounded-lg hover:bg-[#33335a] transition w-full sm:w-auto justify-center">

                                <Settings className="w-4 h-4" />
                                <span>Units</span>
                                <ChevronDown className="w-4 h-4 opacity-70" />

                            </button>
                        </div>

                    </header>
                </div>
    </div>
  )
}

export default Navbar
