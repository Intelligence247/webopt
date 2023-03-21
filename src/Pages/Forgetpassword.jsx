import React from 'react'
import { Link } from 'react-router-dom'
import "./Forgetpassword.css"
const Forgetpassword = () => {
  return (
    <div className='forgetW'>
       <img src="/media/unsplash.png" alt="" />

       <div className="forget">

        <h1>Forget Password?</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing consequatur temporibus, earum minus est voluptatem laborum ab nam?</p>

        <label htmlFor="email">
            <p>Email address</p>
            <input type="text" placeholder='Enter your email address' />
        </label>

        <button>Send link</button>

    <Link to={"/loginpage"}>Back to Login</Link>
       </div>
    </div>

  )
}

export default Forgetpassword