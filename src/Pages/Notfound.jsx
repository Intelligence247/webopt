import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='pl-5 mt-5'>
      <p className='text-[2rem] mb-5'>Page not found</p>
      <button className='hover:text-purple-600 border-[#948181] border-[1px] rounded-lg px-2 py-2 bg-[#c2c2cc]'><Link to={"/"} className="text-[2rem]">Go back home</Link></button>
    </div>

  )
}

export default Notfound 