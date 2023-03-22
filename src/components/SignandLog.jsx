import React from 'react'
import { Link } from 'react-router-dom'
import "./SignandLog.css"
const SignandLog = (props) => {
  return (
    <div className='signandLogW'>
        <img src="/media/unsplash.png" alt="" />

        <div className="userinfo">
          <h1>{props.title} <img src="/media/bye.png" alt="" /></h1>
          <p>{props.desc}</p>

          <div className="widthgoogle">
            <img src="/media/google-logo.png" alt="" className='lg:w-6 lg:h-6 w-6 h-6' />
            <p className=''>{props.withoogle}</p>
          </div>
          <label htmlFor="name">
            <p>{props.lb1}</p>
            <input type="text"placeholder={props.plc1} />
            <p className="valid">Hello ooo</p>
          </label>
          <label htmlFor="email">
            <p>{props.lb2}</p>
            <input type="text"placeholder={props.plc2} />
            <p className="valid">Hello ooo</p>
          </label>

          <label htmlFor="passsword">
            <p>{props.lb3}</p>
            <input type="text" placeholder={props.plc3} />
            <p className="valid">Hello ooo</p>
          </label>
<div className="terms">
  <input type="checkbox" name="" id="checkbox" />
  <p>{props.terms}</p>
</div>

<button>{props.log}</button>
<Link to={"/loginpage"} className="hidden">Back to Login</Link>
<footer>{props.footer}</footer>

        </div>
        
    </div>
  )
}

export default SignandLog