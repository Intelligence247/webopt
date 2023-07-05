import React from 'react'

const FooterC = ({h,p1,p2,p3,p4,p5}) => {
  return (
    <div className='eachF'>
        <h1>{h}</h1>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p className={`${p4.length<1?'hidden':'block'}`}>{p4}</p>
        <p className={`${p5.length<1?'hidden':'block'}`}>{p5}</p>
        
    </div>
  )
}

export default FooterC