import React from 'react';  
import Link from 'next/link';  
import { Plus_Jakarta_Sans } from "next/font/google";  

// Load font  
const font = Plus_Jakarta_Sans({ subsets: ["latin"] });  

const Footer= () => {  
  return (   
    <footer className=' bg-white border-gray-200 mt-8'>   
      {/* Main Container */}  
      <div className="flex justify-between items-start mb-8 px-20 py-10">  
        {/* Logo and Vision Section */}  
        <div className="w-[280px]">  
          <h1 className={`${font.className} text-[32px] leading-[48px] tracking-tight font-bold text-blue-600 mb-2`}>  
            MORENT  
          </h1>   
          <p className={`${font.className} text-gray-600 font-medium text-[16px] leading-[24px] tracking-tight`}>  
            Our vision is to provide convenience and help increase your sales business.  
          </p>  
        </div>  

        {/* Links Section */}  
        <div className="flex w-full justify-evenly max-w-[800px]">  
          {/* First Column */}  
          <div className="flex flex-col">  
            <h3 className={`${font.className} mb-3 font-bold text-[18px]`}>About</h3>  
            <ul className="space-y-2">  
              <li><Link href="/how-it-works" className={`${font.className} text-textColor hover:underline`}>How it works</Link></li>  
              <li><Link href="/about" className={`${font.className} text-textColor hover:underline`}>Featured</Link></li>  
              <li><Link href="/how-it-works" className={`${font.className} text-textColor hover:underline`}>Partnership</Link></li>  
              <li><Link href="/featured" className={`${font.className} text-textColor hover:underline`}>Business Relation</Link></li>  
            </ul>  
          </div>  

          {/* Second Column */}  
          <div className="flex flex-col">  
            <h3 className={`${font.className} mb-3 font-bold text-[18px]`}>Community</h3>  
            <ul className="space-y-2">  
              <li><Link href="/partnership" className={`${font.className} text-textColor hover:underline`}>Events</Link></li>  
              <li><Link href="/business-relation" className={`${font.className} text-textColor hover:underline`}>Blog</Link></li>  
              <li><Link href="/community" className={`${font.className} text-textColor hover:underline`}>Podcast</Link></li>  
              <li><Link href="/community" className={`${font.className} text-textColor hover:underline`}>Invite a friend</Link></li>    
            </ul>  
          </div>  

          {/* Third Column */}  
          <div className="flex flex-col">  
            <h3 className={`${font.className} mb-3 font-bold text-[18px]`}>Socials</h3>  
            <ul className="space-y-2">  
              <li><Link href="/contact" className={`${font.className} text-textColor hover:underline`}>Discord</Link></li>  
              <li><Link href="/support" className={`${font.className} text-textColor hover:underline`}>Instagram</Link></li>  
              <li><Link href="/feedback" className={`${font.className} text-textColor hover:underline`}>Twitter</Link></li>  
              <li><Link href="/feedback" className={`${font.className} text-textColor hover:underline`}>Facebook</Link></li>   
            </ul>  
          </div>  
        </div>  
      </div>  

      {/* Bottom Section */}  
      <div className="border-t border-gray-200 pt-4 pb-[90px] flex justify-between items-center text-sm text-gray-600 px-20">
        <p className={`${font.className}`}>©2022 MORENT. All rights reserved</p>
        <div className="flex space-x-4">
          <a href="#" className={`${font.className} hover:text-blue-500`}>Privacy & Policy</a> <span>|</span>
          <a href="#" className={`${font.className}hover:text-blue-500`}>Terms & Condition</a>
        </div>
      </div>
    </footer>   
  );  
};  

export default Footer;
