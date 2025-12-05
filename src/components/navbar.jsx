import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false); // close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-3">
      <div className="container mx-auto px-6 flex justify-between">
        
        {/* Logo */}
        <a href="#header" className="text-xl font-bold text-green-700 ">
          Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#header" className="hover:text-green-600 transition no-underline">Home</a></li>
          <li><a href="#about-me" className="hover:text-green-600 transition">About Me</a></li>
          <li><a href="#skills" className="hover:text-green-600 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-green-600 transition">Projects</a></li>
          <li><a href="#internships" className="hover:text-green-600 transition">Internships</a></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-2xl text-gray-700 focus:outline-none cursor-pointer"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-gray-700 font-medium">
            <li><a href="#header" className='hover:text-green-600' onClick={handleLinkClick}>Home</a></li>
            <li><a href="#about-me" className='hover:text-green-600' onClick={handleLinkClick}>About Me</a></li>
            <li><a href="#skills" className='hover:text-green-600' onClick={handleLinkClick}>Skills</a></li>
            <li><a href="#projects" className='hover:text-green-600' onClick={handleLinkClick}>Projects</a></li>
            <li><a href="#internships" className='hover:text-green-600' onClick={handleLinkClick}>Internships</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
