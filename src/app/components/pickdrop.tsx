import React from 'react'
import { HiOutlineArrowsUpDown } from "react-icons/hi2";


const Pickdrop = () => {
  return (
    // <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-8 p-8 bg-gray-100 rounded-lg shadow-lg ">
        <div className="flex gap-8">
          {/* Pick-Up Section */}
          <div className="flex flex-col items-start h-[132px] w-[582px] bg-white">
            <h3 className="text-lg font-bold mb-4">Pick-Up</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex flex-col">
                <label htmlFor="pickup-city" className="block text-sm font-medium text-gray-700">Location</label>
                <select id="pickup-city" className="block w-40 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Select your location</option>
                  <option>Location A</option>
                  <option>Location B</option>
                  <option>Location C</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700">Date</label>
                <select id="pickup-date" className="block w-40 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Select your date</option>
                  <option>Date 1</option>
                  <option>Date 2</option>
                  <option>Date 3</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="pickup-time" className="block text-sm font-medium text-gray-700">Time</label>
                <select id="pickup-time" className="block w-40 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Select your time</option>
                  <option>10:00 AM</option>
                  <option>2:00 PM</option>
                  <option>6:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center items-center">
            <button className=" flex justify-center items-center p-4 w-[60px] h-[60px] rounded-[10px] bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <HiOutlineArrowsUpDown />
            </button>
          </div>

          {/* Drop-Off Section */}
          <div className="flex flex-col items-start justify-center rounded-[5px] h-[132px] w-[582px] bg-white ml-10">
            <h3 className="text-lg font-bold mb-4">Drop-Off</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex flex-col">
                <label htmlFor="dropoff-city" className="block text-sm font-medium text-gray-700">Location</label>
                <select id="dropoff-city" className="block w-40 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Select your location</option>
                  <option>Location A</option>
                  <option>Location B</option>
                  <option>Location C</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="dropoff-date" className="block text-sm font-medium text-gray-700">Date</label>
                <select id="dropoff-date" className="block w-40 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Select your date</option>
                  <option>Date 1</option>
                  <option>Date 2</option>
                  <option>Date 3</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="dropoff-time" className="block text-sm font-medium text-gray-700">Time</label>
                <select id="dropoff-time" className="block w-40 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Select your time</option>
                  <option>10:00 AM</option>
                  <option>2:00 PM</option>
                  <option>6:00 PM</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}
export default Pickdrop;
