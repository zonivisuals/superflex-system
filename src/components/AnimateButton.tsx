import React from "react";
import logo from '../assets/animateBtnShape.svg';

export default function AnimateButton({ text }: { text: string }) {
  return (
    <button className="relative group active:scale-90 transition-transform duration-200">
      {/* Background Image with Glow Effect */}
      <div className="relative clip-path-[polygon(20%_0%,_80%_0%,_100%_80%,_0%_100%)] overflow-hidden">
        {/* Image clipped diagonally */}
        <img
          src={logo}
          alt="btn"
          className="transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] group-hover:brightness-150 
            before:absolute before:inset-0 before:bg-white "
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-bold text-white">{text}</p>
        </div>

        {/* Passing Glow Animation */}
        <div className="absolute inset-0 before:absolute before:top-1/2 before:left-0 before:w-1/2 before:h-[120%] before:bg-white 
            before:opacity-0 before:blur-lg before:translate-x-[-100%] before:rotate-12 before:transition-all before:duration-700 
            group-hover:before:translate-x-[200%] group-hover:before:opacity-30">
        </div>
      </div>
    </button>
  );
}
