import React from 'react'

const Questions = ({ques,ans}) => {
    const [active, setActive] = React.useState(false)
  return (
    <div className='QuesW lg:w-[40rem] w-full m-auto border-b-[#4d4d4d]'>
        <div className='question' 
        onClick={()=>{setActive(!active)}}>
           <p>{ques}</p> 
           <p className='lessmore'>{active ? "-" : '+' }</p>
        </div>
        <div className={`ans ${active && 'activeQ'}`}>{ans}</div>
    </div>
  )
}

export default Questions