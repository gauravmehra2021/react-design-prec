import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
    return (
        <>
            <div>
                <h1 class="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl :text-xl font-semibold  p-2 ">Discover Your New Home</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-3 mb-6 justify-center mt-5 ">
                <div className="flex items-center bg-[#25253f] rounded-xl px-3 py-2 xl:w-1/2 lg:w-[60%] sm:w-[70%] w-[90%]">
                    <Search className="text-white mr-2" size={18} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className=" bg-transparent outline-none text-white placeholder-gray-400"
                    />
                </div>
                <button className="bg-[#4657d9] text-white px-6 py-2 rounded-xl">
                    Search
                </button>
            </div>
        </>
    )
}

export default SearchBar
