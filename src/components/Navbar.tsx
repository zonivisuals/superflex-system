import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import AnimateButton from './AnimateButton';
import NavButton from './NavButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar Container */}
      <nav className="flex items-center justify-between px-16 relative">
        
        {/* Left Navigation */}
        <div id="left-nav" className="flex items-center gap-10 h-full">
          <Link to="/">
            <img src={logo} alt="logo" className="h-8 w-auto" />
          </Link>
          <div className="hidden md:flex gap-6">
            <NavButton l="/" t="Home" />
            <NavButton l="/dashboard" t="Dashboard" />
            <NavButton l="/about" t="About" />
          </div>
        </div>

        {/* Right Button */}
        <AnimateButton text="Click me" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden z-10 absolute top-full left-0 w-full bg-none transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-row justify-center px-auto w-full">
            <NavButton l="/" t="Home"/>
            <NavButton l="/dashboard" t="Dashboard" />
            <NavButton l="/about" t="About" />
          </div>
        </div>

      </nav>

      {/* Gradient Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-[rgba(255,255,255,0.77)] to-transparent" />
    </div>
  );
}
