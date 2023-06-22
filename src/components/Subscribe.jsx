import React from 'react'

const Subscribe = () => {
  return (
    <div className='lg:px-20 px-4 w-full'>
    <div className='w-full bg-[#7647D4] rounded-lg h-[25.3rem] text-white flex flex-col justify-center items-center lg:space-y-10 space-y-6 my-[10rem]'>
        <h1 className='lg:text-[3rem] text-[2rem] text-center leading-8'>Subscribe to Our Newsletter</h1>
        <p className='lg:w-[48rem] px-4 text-center'>Stay up to date with the latest e-commerce trends, tips, and insights by subscribing to our newsletter. Join our community and receive regular updates, exclusive offers, and valuable information right in your inbox. Don't miss out on the opportunity to supercharge your online business!</p>
        <div className='flex lg:flex-row flex-col gap-6 justify-center items-center'> 
            <div className='lg:w-[23.4rem] w-full h-[2.75rem] bg-white flex justify-center items-center gap-2 px-2  rounded-lg'>
                <img src="/media/email.png" alt="" />
                <input type="email" name="" className="border-none outline-none border-white focus:outline-none border-0" placeholder='Enter your email address' />
                </div>
                <button className='h-[2.75rem] w-[7.875rem] bg-[#111010] text-white rounded-lg'>Subscribe</button>
        </div>
    </div>
    </div>
  )
}

export default Subscribe