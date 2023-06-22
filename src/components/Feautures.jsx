import React from 'react'
import "./Features.css"
import EachFeatures from './EachFeatures'

const Feautures = () => {
  return (
    <div className='featuresW'>
        <h1 className=''>Powerful features for <span>your business needs</span>
</h1>
<p className='text-center mb-10'>{`Choose a plan that’s right for you`}</p>

<div className="eachFeaturesW flex lg:flex-row flex-col items-center lg:w-max w-full m-auto lg:gap-2 gap-4 lg:px-0 px-3 ">
    <EachFeatures
    title={'Basic'}
    desc={'Affordable and Ideal for Digital Creators and Freelancers'}
    price={0}
    basicp={'text-[#B5B5B5]'}
    standardp={'text-[#B5B5B5]'}
    validImg={'/media/Shape.png'}
    basicimg={'/media/Shapex.png '}
    basicbg={'bg-[#F7F8F9]'}
    standardimg={'/media/Shapex.png '}
    standardbg= {'bg-[#F7F8F9]'}
    valid='block'

    />
    <EachFeatures
    title={'Standard'}
    desc={'Flexible and Customizable for Growing Businesses'}
    price={'3,500'}
    basicp={'text-white'}
    standardp={'text-white'}
    validImg={'/media/Shape.png'}
    basicimg={'/media/Shape.png'}
    standardimg={'/media/Shapex.png '}
    standardbg={'bg-white'}
    basicbg={'bg-white'}
    for_standard={'bg-[white]'}
    valid={'hidden'}
    />
    <EachFeatures
    title={'Premium'}
    desc={'Premium Features for Established Businesses'}
    price={'5,000'}
    validImg={'/media/Shape.png'}
    basicimg={'/media/Shape.png'}
    standardimg={'/media/Shape.png '}
    valid={'hidden'}
   
    />

</div>
    </div>
  )
}

export default Feautures