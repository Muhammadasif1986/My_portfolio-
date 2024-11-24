'use client';
import Link from 'next/link';
import { RxDropdownMenu } from 'react-icons/rx';
import { useState } from 'react';
import { Edu_NSW_ACT_Foundation } from 'next/font/google';
import { ImHome } from 'react-icons/im';

const edu_nsw = Edu_NSW_ACT_Foundation({
  subsets: ['latin'],
  display: 'swap',
  variable: '--edu_nsw-',
});

export default function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let timeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeout); 
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setIsMenuOpen(false);
    }, 500); // Delay hiding by 200ms
  };

  return (
    <div className={edu_nsw.className}>
      <nav className="relative text-white bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg">
        <div className="flex items-center justify-between py-4 px-6">
          {/* Home Button */}
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 flex items-center text-lg"
            aria-label="Go to Home"
          >
            <ImHome className="text-xl mr-2" /> Home
          </Link>

          {/* Menu Button and Dropdown */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button
              className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-400 flex items-center text-lg"
              aria-expanded={isMenuOpen}
              aria-label="Toggle Menu"
            >
              Menu <RxDropdownMenu className="ml-2 text-2xl" />
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <ul
                className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-gray-800"
              >
                <li className="border-b">
                  <Link
                    href="/about"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    About Me
                  </Link>
                </li>
                <li className="border-b">
                  <Link
                    href="/projects"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    My Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
