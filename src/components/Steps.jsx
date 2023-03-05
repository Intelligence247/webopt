import React from 'react'
import Step1 from './Step1'
import "./Step.css"
const Steps = () => {
  return (
    <div className='Stepsw'>
       <img src="/media/unsplash.png" className='stepimg' alt="" />
       <div className="visibility">
        <h1>Boost Your Online Visibility in just a few steps</h1>
        <Step1/>
        <Step1/>
        <Step1/>
       </div>
    </div>
  )
}

export default Steps