import React from 'react';
import Step1 from './Step1';
import "./Step.css"


const Steps = () => {

  
const stepObj =[
  {
    title:"Choose the right website package for your business:",
    desc:"We offer three different packages that cater to businesses of different sizes and needs. Whether you need a simple one-page website or a full-fledged e-commerce platform, we have a package that can help improve your online visibility.,",
  },
  {
    title:"Optimize your website for search engines:",
    desc:"Our team of experts can help you optimize your website for search engines so that your business appears higher in search results. This will help potential customers find your website more easily.",
  },
  {
    title:"Promote your website on social media:",
    desc:"Our team can help you create and manage social media profiles for your business on popular platforms like Facebook, Twitter, and Instagram. We can also create social media posts and ads to help promote your website  and increase your views. By reaching a wider audience on social media,    you can improve your online visibility and attract more customers to    your website.",
  },
]

  return (
    <div className='Stepsw'>
       <img src="/media/unsplash.png" className='stepimg' alt="" />
       <div className="visibility">
        <h1>Boost Your Online Visibility in just a few steps</h1>

        {
          stepObj.map((step)=>(
            <Step1
            title={step.title}
            desc={step.desc}
            />

          ))
        }

       </div>
    </div>
  )
}

export default Steps