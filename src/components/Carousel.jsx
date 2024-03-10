import React from "react";


export const Carousel = () => {
    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-96 overflow-hidden rounded-lg md:h-[500px]">
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={"/carousel-01.jpg"} className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="..." />
                    <div className="absolute block w-full h-full bg-gradient-to-r from-teal-600 to-transparent text-white">
                        <div className="max-w-screen-xl mx-auto flex items-center justify-center h-full p-10">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold">State of Art Facilities</h2>
                        </div>
                    </div>
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={"/carousel-02.jpg"} className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="..." />
                    <div className="absolute block w-full h-full bg-gradient-to-r from-teal-600 to-transparent text-white">
                        <div className="max-w-screen-xl mx-auto flex items-center justify-center h-full p-10">
                            <h2 className="text-4xl sm:text-5xl  md:text-7xl lg:text-8xl font-bold">Clean Infrastructure</h2>
                        </div>
                    </div>
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={"/carousel-03.jpg"} className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="..." />
                    <div className="absolute block w-full h-full bg-gradient-to-r from-teal-600 to-transparent text-white">
                        <div className="max-w-screen-xl mx-auto flex items-center justify-center h-full p-10">
                            <h2 className="text-4xl sm:text-5xl  md:text-7xl lg:text-8xl font-bold">24/7 Avaliability</h2>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    )
}