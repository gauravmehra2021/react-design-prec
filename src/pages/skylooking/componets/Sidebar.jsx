import React from 'react'

const Sidebar = () => {

       const forecastData = [
        { time: '3 PM', temperature: '20°', icon: 'cloud' },
        { time: '4 PM', temperature: '20°', icon: 'partly-cloudy' },
        { time: '5 PM', temperature: '20°', icon: 'sunny' },
        { time: '6 PM', temperature: '19°', icon: 'cloud' },
        { time: '7 PM', temperature: '18°', icon: 'rainy-cloud' },
        { time: '8 PM', temperature: '18°', icon: 'windy' },
        { time: '9 PM', temperature: '17°', icon: 'snowy-cloud' },
        { time: '10 PM', temperature: '17°', icon: 'cloud' },
    ];

    const renderIcon = (iconType) => {
        switch (iconType) {
            case 'cloud':
                return (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 15a4 4 0 004 4h9a4 4 0 003.717-2.982M13 21V3m0 18.5a4.5 4.5 0 000-9h0a4.5 4.5 0 000 9z"
                        ></path>
                    </svg>
                );
            case 'partly-cloudy':
                return (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 15a4 4 0 004 4h9a4 4 0 003.717-2.982M13 21V3m0 18.5a4.5 4.5 0 000-9h0a4.5 4.5 0 000 9zM7 14a1 1 0 011-1h0a1 1 0 011 1v0a1 1 0 01-1 1h0a1 1 0 01-1-1v0zM17 10a1 1 0 011-1h0a1 1 0 011 1v0a1 1 0 01-1 1h0a1 1 0 01-1-1v0z"
                        ></path>
                    </svg>
                );
            case 'sunny':
                return (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 3v1m0 18v-1M4.21 16.03l-1.76 1.76M19.79 4.21l-1.76 1.76M12 11v-1m0 0a3 3 0 110-6 3 3 0 010 6zM12 17.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
                        ></path>
                    </svg>
                );
            case 'rainy-cloud':
                return (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 15a4 4 0 004 4h9a4 4 0 003.717-2.982M13 21V3m0 18.5a4.5 4.5 0 000-9h0a4.5 4.5 0 000 9zM9 13a1 1 0 011-1h0a1 1 0 011 1v0a1 1 0 01-1 1h0a1 1 0 01-1-1v0zM13 13a1 1 0 011-1h0a1 1 0 011 1v0a1 1 0 01-1 1h0a1 1 0 01-1-1v0zM17 13a1 1 0 011-1h0a1 1 0 011 1v0a1 1 0 01-1 1h0a1 1 0 01-1-1v0z"
                        ></path>
                    </svg>
                );
            case 'windy':
                return (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 15a4 4 0 004 4h9a4 4 0 003.717-2.982M13 21V3m0 18.5a4.5 4.5 0 000-9h0a4.5 4.5 0 000 9zM5 10a1 1 0 011-1h0a1 1 0 011 1v0a1 1 0 01-1 1h0a1 1 0 01-1-1v0zM9 10a1 1 0 011-1h0a1 1 0 011 1v0a1 1 0 01-1 1h0a1 1 0 01-1-1v0zM13 10a1 1 0 011-1h0a1 1 0 011 1v0a1 1 0 01-1 1h0a1 1 0 01-1-1v0zM17 10a1 1 0 011-1h0a1 1 0 011 1v0a1 1 0 01-1 1h0a1 1 0 01-1-1v0z"
                        ></path>
                    </svg>
                );
            case 'snowy-cloud':
                return (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 15a4 4 0 004 4h9a4 4 0 003.717-2.982M13 21V3m0 18.5a4.5 4.5 0 000-9h0a4.5 4.5 0 000 9zM9 13a1 1 0 011-1h0a1 1 0 011 1v0a1 1 0 01-1 1h0a1 1 0 01-1-1v0zM13 13a1 1 0 011-1h0a1 1 0 011 1v0a1 1 0 01-1 1h0a1 1 0 01-1-1v0zM17 13a1 1 0 011-1h0a1 1 0 011 1v0a1 1 0 01-1 1h0a1 1 0 01-1-1v0zM9 17a1 1 0 011-1h0a1 1 0 011 1v0a1 1 0 01-1 1h0a1 1 0 01-1-1v0zM13 17a1 1 0 011-1h0a1 1 0 011 1v0a1 1 0 01-1 1h0a1 1 0 01-1-1v0zM17 17a1 1 0 011-1h0a1 1 0 011 1v0a1 1 0 01-1 1h0a1 1 0 01-1-1v0z"
                        ></path>
                    </svg>
                );
            default:
                return null;
        }
    };
  return (
        <div className="bg-[#25253f] min-h-screen flex flex-col items-center p-4 rounded-xl">
                        <header className="w-full max-w-md flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-semibold text-white">Hourly forecast</h1>
                            <div className="relative">
                                <button
                                    className="bg-[#334155] text-white px-4 py-2 rounded-lg flex items-center space-x-1"
                                    aria-label="Select day"
                                >
                                    <span>Tuesday</span>
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </header>

                        <main className="w-full max-w-md space-y-3">
                            {forecastData.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-[#263238] rounded-xl p-4 flex items-center justify-between text-white"
                                >
                                    <div className="flex items-center space-x-4">
                                        {renderIcon(item.icon)}
                                        <span className="text-lg font-medium">{item.time}</span>
                                    </div>
                                    <span className="text-lg font-medium">{item.temperature}</span>
                                </div>
                            ))}
                        </main>
                    </div>
  )
}

export default Sidebar
