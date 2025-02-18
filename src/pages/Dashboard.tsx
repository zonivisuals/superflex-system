import React, { useState } from 'react';
import SungAnimation from '../components/SungAnimation';
import ProgressBar from '../components/ProgressBar';
import WeeklyQuests from '../components/WeeklyQuests';

export default function Dashboard({ username }: { username: string }) {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <div className='flex flex-col items-center gap-4 mt-8 mb-2'>
        <h1 className='bg-gradient-to-r from-white to-transparent inline-block text-transparent bg-clip-text italic text-5xl pb-2 m-0'>your system is ready</h1>
        <h1 id='username' className='bg-gradient-to-r from-white to-transparent inline-block text-transparent bg-clip-text italic text-3xl'>
          {username || 'sung jinwoo'}
        </h1>
      </div>

      <div className='flex justify-between pr-14'>
        <div>
          <div className="mt-14 flex relative">
            <ProgressBar progress={progress} />
          </div>

          <div>
            <SungAnimation />
          </div>
        </div>

        <div className="mt-8">
          <WeeklyQuests onProgressChange={setProgress} />
        </div>
      </div>
    </div>
  );
}
