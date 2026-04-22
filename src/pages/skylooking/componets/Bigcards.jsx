import React from 'react'

const Bigcards = () => {
    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div className="flex justify-center items-center min-h-screen p-4">
                        <div className="relative w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-xl overflow-hidden flex flex-col items-center justify-between p-6">
                            <div className="absolute inset-0 -z-10 opacity-50">
                                {/* Optional: Add a subtle background pattern or gradient */}
                            </div>

                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-white mb-2">Wed</h2>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <div className="relative w-24 h-24 mb-4">

                                </div>
                                <p className="text-5xl font-extrabold text-white">21°</p>
                            </div>

                            <div className="flex justify-between w-full text-white text-2xl font-bold">
                                <span>21°</span>
                                <span>15°</span>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Bigcards
