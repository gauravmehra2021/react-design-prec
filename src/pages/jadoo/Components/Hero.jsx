import React from 'react'
import Traveller from "../../../../public/images/Traveller.png";

const Hero = () => {
    return (
        <section className="mx-auto">

            <div className="w-full flex flex-col lg:flex-row items-center gap-10 py-6 sm:py-9 md:py-11 lg:py-14">

                {/* 🔹 Image */}
                <img
                    className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[550px] lg:w-1/2 lg:order-2"
                    src={Traveller}
                    alt="traveller"
                />

                {/* 🔹 Content */}
                <div className="w-full max-w-xl text-center lg:text-left">

                    <p className="text-red-500 font-bold text-sm sm:text-base">
                        Best Destinations around the world
                    </p>

                    <h1 className="font-bold mb-6 md:mb-10 
                        text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Travel, enjoy <br />
                        and live a new <br />
                        and full life
                    </h1>

                    <p className="mb-8 md:mb-10 text-sm sm:text-base text-gray-600">
                        Built Wicket longer admire do barton vanity itself do in it.
                        Preferred to sportsmen it engrossed listening.
                        Park gate sell they west hard for the.
                    </p>

                    <button className="flex items-center justify-center 
                        max-w-[200px] w-full mx-auto lg:mx-0
                        text-base sm:text-lg font-bold 
                        rounded-[38px] bg-[#f1a501] text-white 
                        py-3 px-6 sm:px-8">
                        Find out more
                    </button>

                </div>
            </div>

        </section>
    )
}

export default Hero