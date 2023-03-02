import React from 'react'

const Questions = () => {
    const [active, setActive] = React.useState(false)
  return (
    <div className='QuesW w-[40rem] m-auto border-b-[#4d4d4d]'>
        <div className='question' 
        onClick={()=>{setActive(!active)}}>
           <p>Is there a free trial available</p> 
           <p className='lessmore'>{active ? "-" : '+' }</p>
        </div>
        <div className={`ans ${active && 'activeQ'}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti amet quia natus est repudiandae dignissimos pariatur, facilis blanditiis quae totam tempora veritatis expedita velit nemo cupiditate vitae, sunt sed quaerat.
        </div>
    </div>
  )
}

export default Questions