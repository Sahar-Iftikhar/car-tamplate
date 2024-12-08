// import React from 'react'
// import { FaSearch, FaHeart, FaBell, FaCog} from "react-icons/fa";
// import { VscSettings } from "react-icons/vsc";
// import Link from 'next/link';
// import Image from "next/image";
import React from 'react';  
import { FaSearch, FaHeart, FaBell, FaCog } from "react-icons/fa";  
import { VscSettings } from "react-icons/vsc";  
import Link from 'next/link';  
import Image from "next/image";  

const Navbar = () => {  
  return (  
    <header className='bg-navBackground py-4 px-8 shadow-md flex items-center justify-between'>  
      {/* Logo and search bar container */}  
      <div className='flex items-center space-x-20'>  
        {/* Logo */}  
        <h1 className='text-2xl font-bold text-blue-600'>MORENT</h1>  

        {/* Search Bar */}  
        <div className='relative w-[429px] h-[44px]'>  
          <input  
            type="text"  
            placeholder='Search something here'  
            className='w-full h-full border border-gray-300 rounded-full font-medium text-sm px-10 focus:outline-none focus:ring focus:ring-blue-500'  
            aria-label="Search"  
          />  
          <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'>  
            <FaSearch />  
          </div>  
          <div className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'>  
            <VscSettings />  
          </div>  
        </div>  
      </div>  

      {/* Icons */}  
      <div className='flex items-center space-x-4'>  
        {/* Favorites Icon */}  
        <Link href='/favorites'>  
          <div className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center'>  
            <FaHeart className='text-xl' />  
          </div>  
        </Link>  

        {/* Notification Icon */}  
        <Link href='/notification'>  
          <div className='relative w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center'>  
            <FaBell className='text-xl text-gray-600 cursor-pointer' />  
            <span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full'></span>  
          </div>  
        </Link>  

        {/* Settings Icon */}  
        <Link href='/settings'>  
          <div className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center'>  
            <FaCog className='text-xl text-gray-600 cursor-pointer' />  
          </div>  
        </Link>  

        {/* Profile Picture */}  
        <Link href='/profile'>  
          <div className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden'>  
            <Image src="/assets/human.png" alt="Profile" width={40} height={40} />  
          </div>  
        </Link>  
      </div>  
    </header>  
  );  
};  

export default Navbar;

