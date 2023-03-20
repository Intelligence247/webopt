import React from 'react'

const Step1 = ({title, desc}) => {
  return (
    <div className='flex items-center space-x-4'>
        <img src="/media/check_circle.png" alt="" className="w-8 h-8 md:w-10 md:h-10" />
        <p className='leading-6 lg:text-base text-sm text-gray-700'><span className="font-bold text-black block md:inline-block mr-1"> {title} </span> {desc}</p>

    </div>
  )
}

export default Step1
