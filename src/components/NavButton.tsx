import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavButtonProps {
  l: string;
  t: string;
}

export default function NavButton({ l, t }: NavButtonProps) {
  const location = useLocation();
  const isActive = location.pathname === l;

  return (
    <Link
      id="nav-elements"
      to={l}
      className={`overflow-y-hidden relative w-fit text-gray-300 hover:text-white transition-colors italic p-4
        after:transition-all after:duration-300 after:bg-white after:content-[''] 
        after:absolute after:-bottom-[1.5px] after:h-[2px] hover:after:w-full hover:after:left-0
        
        ${isActive ? "text-white after:w-full after:left-0 after:bg-white" : "after:left-1/4 after:w-1/2 after:opacity-50"}
        before:absolute before:bottom-[-35px] before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-16
        before:bg-white before:rounded-full before:blur-lg before:opacity-50 before:scale-0
        transition-transform duration-300 ease-in-out ${isActive ? "before:scale-100 before:opacity-100" : ""}
      `}
    >
      {t}
    </Link>
  );
}
