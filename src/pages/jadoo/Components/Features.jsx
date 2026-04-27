import React from "react";
// import Group from "../../../assets/images/Group.png"
import Group48 from "../../../../public/images/Group48.png"
// import Group49 from "../../../assets/images/Group49.png"
// import Group50 from "../../../assets/images/Group50.png"

const Features = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-10 mt-5">

            {/* 🔹 Title + Description */}
            <div className="text-center mb-12 max-w-2xl mx-auto">
                <p className="text-gray-600 text-sm sm:text-base">
                    CATEGORY
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 mt-3">
                    We Offer Best Services

                </h2>

            </div>

            {/* 🔹 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10  mt-5 ">

                {/* Card 1 */}
                <div className="text-center  transition-transform hover:scale-[1.02] duration-300 bg-#ffffff-300 p-5 rounded  hover:shadow">
                    <div className="flex justify-center mb-4">
                        <div className="bg-blue-500 text-white p-4 rounded-xl text-2xl">
                            <img src="Group48"/>
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                        Featured title
                    </h3>

                    <p className="text-gray-600 mb-4">
                        Built Wicket longer admire do barton vanity itself do in it.
                    </p>

                    <a href="#" className="text-blue-500 font-medium">
                        Call to action →
                    </a>
                </div>

                {/* Card 2 */}
                <div className="text-center   transition-transform hover:scale-[1.02] duration-300 bg-#ffffff-300 p-5 rounded  hover:shadow">
                    <div className="flex justify-center mb-4">
                        <div className="bg-blue-500 text-white p-4 rounded-xl text-2xl">
                            👥
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                        Featured title
                    </h3>

                    <p className="text-gray-600 mb-4">
                        Engrossed listening. Park gate sell they west hard for the.
                    </p>

                    <a href="#" className="text-blue-500 font-medium">
                        Call to action →
                    </a>
                </div>

                {/* Card 3 */}
                <div className="text-center   transition-transform hover:scale-[1.02] duration-300 bg-#ffffff-300 p-5 rounded  hover:shadow">
                    <div className="flex justify-center mb-4">
                        <div className="bg-blue-500 text-white p-4 rounded-xl text-2xl">
                            ⚙️
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                        Featured title
                    </h3>

                    <p className="text-gray-600 mb-4">
                        Barton vanity itself do in it. Preferd to men it engrossed listening.
                    </p>

                    <a href="#" className="text-blue-500 font-medium">
                        Call to action →
                    </a>
                </div>

                {/* Card 4 */}
                <div className="text-center   transition-transform hover:scale-[1.02] duration-300 bg-#ffffff-300 p-5 rounded  hover:shadow">
                    <div className="flex justify-center mb-4">
                        <div className="bg-blue-500 text-white p-4 rounded-xl text-2xl">
                            ⚙️
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                        Featured title
                    </h3>

                    <p className="text-gray-600 mb-4">
                        We deliver outsourced
                        aviation services for
                        military customers
                    </p>

                    <a href="#" className="text-blue-500 font-medium">
                        Call to action →
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Features;