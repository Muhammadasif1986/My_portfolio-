'use client'; 
import Link from "next/link"
import { RxDropdownMenu } from "react-icons/rx";
import { useState } from 'react';
import { Edu_NSW_ACT_Foundation } from 'next/font/google'
import { ImHome } from "react-icons/im";
const edu_nsw = Edu_NSW_ACT_Foundation({
      subsets: ['latin'],
      display: 'swap',
      variable:"--edu_nsw-"
});

export default function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <div className={edu_nsw.className}>
    <nav className=" relative text-black">
      <div className="flex items-center justify-between pt-6 px-10">
        <Link href="/"
        className="px-4 py-2 bg-slate-400 rounded hover:bg-slate-300 flex justify-center items-center text-xl">
        <span className="text-2xl mr-2"><ImHome /></span>Home</Link>
        <button
          onClick={toggleMenu}
          className="px-4 py-2 bg-slate-200 rounded hover:bg-slate-100 flex justify-center items-center text-xl"
        >
          Menu <span className="ml-2 text-2xl"><RxDropdownMenu /></span>
        </button> 
      </div>
      {isMenuOpen && (
       <ul
       className={`absolute top-full right-0 w-2/12 bg-gray-700 shadow-lg transition-all duration-300 ${
         isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
       }`}
     >

     <ul className="absolute top-full left-0 w-full bg-slate-200 shadow-lg">
          <li className="p-4 hover:bg-slate-50">
            <Link href="/about">About Me</Link>
          </li>
          <li className="p-4 hover:bg-slate-50">
            <Link href="/projects">My Projects</Link>
          </li>
          <li className="p-4 hover:bg-slate-50">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        </ul> 
      )}
    </nav>
    </div>
  );
}
