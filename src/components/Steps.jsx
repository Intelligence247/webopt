import React from 'react'
import Step1 from './Step1'

const Steps = () => {
  return (
    <div className='Steps flex items-center gap-8 my-12 px-[5rem]'>
       <img src="/media/unsplash.png" className='w-[48%] h-[30rem] rounded-tr-[2rem] rounded-bl-[2rem]' alt="" />
       <div className="visibility w-[48%] flex flex-col gap-8">
        <h1 className='text-[2.5rem] font-[600] leading-[3.3rem]'>Boost Your Online Visibility in just a few steps</h1>
        <Step1/>
        <Step1/>
        <Step1/>
       </div>
    </div>
  )
}

export default Steps