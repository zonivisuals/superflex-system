import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress = 70 }: ProgressBarProps) {
  return (
    <div className="w-[337px] absolute left-72 -top-8">
      <h2 className="text-xl mb-2 ml-4">
        current week level
      </h2>
      
      <div className="relative h-[40px]">
        <div
          className="absolute w-full h-full border border-[rgb(255,255,255,0.3)] backdrop-blur-sm"
        />
        
        <div 
          className="absolute h-full backdrop-blur-sm bg-[rgba(75,204,255,0.3)]"
          style={{ width: `${progress}%` }}
        />
        
        <div 
          className="absolute right-2 top-1 bottom-1"
        >
          <span id="inter" className="font-semibold text-base leading-[19px]">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
