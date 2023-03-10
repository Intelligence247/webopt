import React from 'react';
import Step1 from './steps/Step1';
import Step2 from './Steps/Step2';
import Step3

from './Steps/Step3';
import "./Step.css"
const Steps = () => {
  return (
    <div className='Stepsw'>
       <img src="/media/unsplash.png" className='stepimg' alt="" />
       <div className="visibility">
        <h1>Boost Your Online Visibility in just a few steps</h1>
        <Step1/>
        <Step2/>
        <Step3/>
       </div>
    </div>
  )
}

export default Steps