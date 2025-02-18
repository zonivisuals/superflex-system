import React from 'react'
import SungAnimation from '../components/SungAnimation'
import ProgressBar from '../components/ProgressBar'

export default function Dashboard() {
  return (
    <div>
      <div className='flex flex-col items-center gap-4 mt-16'>
        <h1 className='italic text-5xl'>your system is ready</h1>
        <h1 className='italic text-3xl'>sung jinwoo</h1>
      </div>

      <div className="mt-8 flex relative">
        <ProgressBar progress={70} />
      </div>

      <div>
        <SungAnimation/>
      </div>
    </div>
  )
}
