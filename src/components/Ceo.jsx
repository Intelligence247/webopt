import React from 'react'

const Ceo = (props) => {
  return (
    <div className='ceoW '>
        <img src={props.img}alt="" />
        <div className="stars">
            <div className="starsimg">
            <img src="/media/sta.png" alt="" />
            <img src="/media/sta.png" alt="" />
            <img src="/media/sta.png" alt="" />
            <img src="/media/sta.png" alt="" />
            <img src="/media/sta.png" alt="" />
        
            </div>
            <p>{props.text}</p>
            <div className="bothname">
    <div className="name">
        <p>{props.name}</p>
        <p>{props.qual}</p>
    </div>
    <div className="name">
    <p>{props.name2}</p>
        <p>{props.qual2}</p>
    </div>
    </div>

        </div>
    </div>
  )
}

export default Ceo