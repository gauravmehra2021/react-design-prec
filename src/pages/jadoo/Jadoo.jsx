import React from 'react'
import Decore from "../../../public/images/Decore.png";
import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';

const Jadoo = () => {
    return (
        <div className="bg-[#ffffff] relative overflow-hidden min-h-dvh">

            {/* 🔹 Background Shape */}
            <img
                className="absolute top-0 right-0 w-[600px] opacity-1 z-0"
                src={Decore}
                alt="decor"
            />

            {/* 🔹 Content */}
            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <Header />
                    <Hero />
                    <Features/>
                </div>
            </div>

        </div>
    )
}

export default Jadoo;