import React from 'react'
import skybg from "../../../../public/images/skybg.png";

const Hero = () => {
  return (
    <div>
        <div className="bg-[#25253f]  h-48 rounded-xl flex items-center justify-center font-bold"
                            style={{ backgroundImage: `url(${skybg})` }}>
                            Hero Image
                        </div>
    </div>
  )
}

export default Hero
