import React from "react";
import img from "../assets/name.jpg";

const Dean = () => {
  return (
    <div className="flex flex-row text-md text-gray-800 mb-5 mt-5 w-full h-full px-5 py-2">
      <div className="flex flex-col items-center w-1/3">
        <div className="border-2 flex justify-center items-center border-gray-700 p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <img 
            className="transition-transform duration-300 hover:scale-105 rounded-lg"
            src={img}
            alt="Dean's portrait"
          />
        </div>
        <p className="text-gray-700 mt-4 font-semibold text-lg">
          Honourable Dean Sir
        </p>
      </div>
      <div className="w-3/4 pr-2 pl-8">
        <h1 className="text-gray-900 mb-6 font-bold text-3xl border-b-2 border-blue-600 pb-2 inline-block">
          Meet our Dean
        </h1>
        <div className="bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-lg shadow-sm">
          <p className="tracking-wide text-gray-700 text-lg leading-relaxed font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            nobis aperiam sit at fu Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perferendis, culpa. Magni quibusdam voluptas
            mollitia incidunt eius ut hvoiwjhvjhv wdnvhjvhlx ocsjow xvjhv nesciunt deserunt ea odio odit. Nesciunt
            minus vitae ducimus tempora incidunt aliquid. Eligendi?giat qui
            laborum provident, nostrum minima similique! Eligendi repellat
            voluptatem repellendus dolorem deleniti sequi exercitationem
            architecto quisquam?
          </p>
        </div>
        <div className="mt-10 flex justify-center items-center">
          <div className="relative max-w-2xl">
            <svg className="absolute text-blue-200 transform -translate-y-6 -translate-x-4 h-8 w-8" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative text-2xl italic text-gray-600 text-center px-8 ">
              "Valuable words by Dean . (mission/ goal/quote/)"
            </p>
            <svg className="absolute right-0 text-blue-200 transform translate-y-2 translate-x-4 h-8 w-8" fill="currentColor" viewBox="0 0 32 32">
              <path d="M22.648 28C27.544 24.544 31 18.88 31 12.64c0-5.088-3.072-8.064-6.624-8.064-3.36 0-5.856 2.688-5.856 5.856 0 3.168 2.208 5.472 5.088 5.472.576 0 1.344-.096 1.536-.192-.48 3.264-3.552 7.104-6.624 9.024L22.648 28zm-16.512 0c4.8-3.456 8.256-9.12 8.256-15.36 0-5.088-3.072-8.064-6.624-8.064-3.264 0-5.856 2.688-5.856 5.856 0 3.168 2.304 5.472 5.184 5.472.576 0 1.248-.096 1.44-.192-.48 3.264-3.456 7.104-6.528 9.024L6.136 28z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dean;