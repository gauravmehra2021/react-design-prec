import React from 'react'

const Smallcard = () => {
  return (
    <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (


                                <div key={i} className="bg-[#1E1E3A] rounded-xl p-6 w-full max-w-xs flex flex-col justify-center items-start">
                                    <div className="text-white text-opacity-70 text-lg font-medium mb-2">
                                        Feels Like
                                    </div>
                                    <div className="text-white text-2xl font-light">
                                        18°
                                    </div>
                                </div>

                            ))}
                        </div>
    </div>
  )
}

export default Smallcard
