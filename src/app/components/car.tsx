import Image from "next/image";

import React from "react";

const Car = () => {
  return (
    <div className=" bg-gray-50 flex flex-col justify-items-center p-5">
      {/* Main Section */}
      <main className="flex flex-wrap justify-center gap-6 mt-10">
        {/* Card 1 */}
        <div
          className="bg-blue-100 p-6 rounded-lg shadow-lg w-[640px] h-[360px]"
          style={{
            backgroundImage: "url('/assets/BG2.jpg')", // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-[298px] mt-[5px] ml-[36px] rounded-[10px]">
          <h2 className='text-white font-semibold text-4xl leading-[48px] tracking-[-0.03em]'>
            The Best Platform for Car Rental
          </h2>
          <p className="text-white mt-2">
            Ease of doing a car rental safely and reliably. Of course, at a low
            price.
          </p>
          <button className="bg-button1 text-white px-4 py-2 mt-4 rounded-md">
            Rental Car
          </button>
          </div>

          <div>
  <Image
    src="/assets/car1.png"
    alt="Car"
    width={406}
    height={142}
    style={{ objectFit: "cover" }}
    className="mt-[-58px] ml-[100px]"
  />
</div>
        </div> 

        {/* Card 2 */}
        <div
          className="bg-blue-100 p-6 rounded-lg shadow-lg w-[640px] h-[360px]"
          style={{
            backgroundImage: "url('/assets/BG1.jpg')", // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-[298px] mt-[5px] ml-[36px] rounded-[10px]">
            <h2 className=" text-white font-semibold text-4xl leading-[48px] tracking-[-0.03em]">
              Easy way to rent a car at a low price
            </h2>
            <p className="text-white mt-2 ">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <button className="bg-button2 text-white px-4 py-2 mt-4 rounded-md">
              Rental Car
            </button>
          </div>
          <Image
            src="/assets/car 2.png"
            alt="Car"
            width={308}
            height={80}
            style={{ objectFit: "cover" }}
            className=" mt-[20px] ml-[140px]  "
          />
        </div>
      </main>
    </div>
  );
};
export default Car;
