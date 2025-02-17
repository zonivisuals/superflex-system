import React from 'react';
import animateBtnShape from '../assets/animateBtnShape.svg';

export const AnimateButton = () => {
  return (
    <>
    <div className="relative inline-block">
      <img src={animateBtnShape} alt="Animate Button Shape" className='relative' />
      <span className="flex items-center justify-center text-white absolute bottom-1/3 left-1/2 right-1/2 italic">Animate</span>
    </div>
    </>
  );
};
