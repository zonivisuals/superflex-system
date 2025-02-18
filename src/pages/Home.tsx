import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home({ setUsername }: { setUsername: (name: string) => void }) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (!inputValue) return;
    setUsername(inputValue);
    navigate('/dashboard'); // Navigate to dashboard after setting username
  };

  return (
    <div className="mt-56 flex flex-col items-center justify-start gap-12 h-full">
      <div className='flex flex-col items-center justify-center gap-5'>
        <h1 id='italic' className="text-5xl normal italic">
          welcome to the system
        </h1>

        <p className="text-xl">
          please type a username
        </p>
      </div>

      <div className="flex items-center justify-between h-10 gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Sung jinwoo"
          className="italic h-full px-2 pb-3 text-center text-white bg-[rgba(255,255,255,0.16)] focus:outline-none placeholder-[rgba(255,255,255,0.7)]"
        />
        <button
          onClick={handleConfirm}
          className="bg-white flex items-start justify-center px-12 h-full text-[#570078] italic"
        >
          confirm
        </button>
      </div>
    </div>
  );
}