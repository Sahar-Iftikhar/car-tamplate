import Image from "next/image";
import { FaHeart } from "react-icons/fa";

import React from 'react'
import Link from "next/link";



const Popular = () => {
  const cars = [
    { name: "Koenigsegg", type: "Sport", price: "$99.00/day", image: "/assets/car1.png" },
    { name: "Nissan GT-R", type: "Sport", price: "$80.00/day", image: "/assets/2car.png" },
    { name: "Rolls-Royce", type: "Sedan", price: "$96.00/day", image: "/assets/3car.png" },
    { name: "Nissan GT-R", type: "Sport", price: "$80.00/day", image: "/assets/4car.png" },
  ];

  return (
    <div className="bg-gray-100 p-5">
    <div className="flex justify-between items-center mb-6">
  <h1 className="text-gray-600">Popular Car</h1>
  <Link href="/all" className="text-blue-500 hover:text-blue-700">
  View All
</Link>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="relative h-40">
              <Image
                src={car.image}
                alt={car.name}
                width={264} 
                height={108} 
                style={{ objectFit: 'cover' }} 
              />
              {/* Overlay for the name, type, and heart */}
              <div className="absolute top-0 left-0 w-full p-3 flex justify-between items-start">
                <div>
                  <h2 className="text-heading text-lg font-semibold">{car.name}</h2>
                  <p className="text-gray-500  text-sm">{car.type}</p>
                </div>
                <FaHeart
                  className={`text-xl cursor-pointer ${
                    index % 2 === 0 ? "text-red-500" : "text-gray-300"
                  }`}
                />
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-600 font-semibold">{car.price}</p>
                <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-300">
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Popular;