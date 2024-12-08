import Image from "next/image";  
import { FaHeart } from "react-icons/fa";



export default function CarRentalGrid() {
  const cars = [
    { name: "All New Rush", type: "SUV", price: "$72.00/day", image: "/assets/5car.png" },
    { name: "CR-V", type: "SUV", price: "$60.00/day", image: "/assets/6image.png" },
    { name: "All New Terios", type: "SUV", price: "$74.00/day", image: "/assets/7image.png" },
    { name: "CR-V", type: "SUV", price: "$76.00/day", image: "/assets/8image.png" },
    { name: "MG ZS Exclusive", type: "SUV", price: "$74.00/day", image: "/assets/9image.png" },
    { name: "New MG ZS", type: "SUV", price: "$70.00/day", image: "/assets/10IMAGE.png" },
    { name: "MG ZS Excite", type: "SUV", price: "$68.00/day", image: "/assets/11image.png" },
    { name: "New MG ZS", type: "SUV", price: "$90.00/day", image: "/assets/12image.png" },
  ];
  

  return (
    <div className="bg-gray-100 min-h-screen p-5 shadow-md">
      <h1 className="text-gray-500 mb-6">Recomended Car</h1>
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
  style={{ objectFit: "cover" }}
/>

              <div className="absolute top-0 left-0 w-full p-2 flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-heading">{car.name}</h2>
                  <p className="text-sm text-gray-500">{car.type}</p>
                </div>
                <FaHeart
                  className={`text-xl cursor-pointer ${
                    index % 2 === 0 ? "text-red-500" : "text-gray-300"
                  }`}
                />
                {/* <FaHeart className="text-gray-300 hover:text-red-500 cursor-pointer" /> */}
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
      <div className='flex items-center justify-center'>
      <button className='flex items-center justify-center bg-button1 text-white py-1 px-3 mt-[40px] rounded'>Show More Car</button></div>
    </div>
  );
}