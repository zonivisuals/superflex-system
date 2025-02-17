import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { AnimateButton } from './AnimateButton';

export default function Navbar() {
  return (
    <div className=''>
        <nav className='flex items-center justify-between px-16 py-8'>

            <div id='left-nav' className="flex items-start gap-20">
                <Link to="/">
                    <img src={logo} alt="logo" className="h-8 w-auto"/>
                </Link>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors italic">
                    Home
                </Link>
                <Link to="/dashboard" className="text-white hover:text-gray-300 transition-colors italic">
                    Dashboard
                </Link>
                <Link to="/about" className="text-white hover:text-gray-300 transition-colors italic">
                    About
                </Link>
            </div>

            <div id='right-nav'>
                <AnimateButton />
            </div>

        </nav>
        <div className="h-[1px] w-full bg-gradient-to-r from-[rgba(255,255,255,0.77)] to-transparent" />
    </div>
  );
}
