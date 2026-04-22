import React from 'react'
import Sidebar from './componets/Sidebar';
import Hero from './componets/Hero';
import Smallcard from './componets/Smallcard';
import Bigcards from './componets/bigcards';
import Navbar from './componets/Navbar';
import SearchBar from './componets/SearchBar';

const Skylooking = () => {



    return (
        <div className='bg-[#02012b] '>
            <div className="min-h-screen  text-white p-4 max-w-7xl mx-auto px-4 ">
                <Navbar />

                {/* HEADING */}


                <SearchBar />

                {/* MAIN CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* LEFT */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* HERO */}

                        <Hero />
                        {/* TOP CARDS */}
                        <Smallcard />

                        {/* SUBHEADING */}
                        <div className="text-lg font-bold">
                            Subheading
                        </div>

                        {/* BOTTOM CARDS */}
                        <Bigcards />

                    </div>

                    {/* SIDEBAR */}
                    <Sidebar />

                </div>
            </div>
        </div>
    )
}

export default Skylooking



