import React from 'react'
import "./Success.css"
const Success = (props) => {
  return (
    <div>
        <div className="successW">
            <img src="/media/Rectangle50.png" alt="" />
<div className="mark">
  <img src="/media/check_circle.png" alt="" />
  <h1>{props.suc}</h1>
  <p>{props.desc}</p>
<button>{props.btn}</button>
</div>
            
        </div>
    </div>
  )
}

export default Success