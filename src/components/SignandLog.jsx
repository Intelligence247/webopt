import React from 'react'
import { Link } from 'react-router-dom'
import "./SignandLog.css"
const SignandLog = (props) => {
  return (
    <div className='signandLogW'>
        <img src="/media/unsplash.png" alt="" />

        <div className="userinfo">
          <h1>Welcome back <img src="/media/bye.png" alt="" /></h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt esse quisquam accusamus necessitatibus molestias nostrum, fugit dolor tenetur neque delectus ratione tempore voluptatum. Eius numquam, e.</p>

          <div className="widthgoogle">
            <img src="/media/sta.png" alt="" />
            <p className='text-xl'>Login with Google</p>
          </div>
          <label htmlFor="name">
            <p>Name</p>
            <input type="text"placeholder='Enter your name' />
            <p className="valid">Hello ooo</p>
          </label>
          <label htmlFor="email">
            <p>Email address</p>
            <input type="text"placeholder='Enter your email address' />
            <p className="valid">Hello ooo</p>
          </label>

          <label htmlFor="passsword">
            <p>Passsword</p>
            <input type="number" placeholder='Enter your password' />
            <p className="valid">Hello ooo</p>
          </label>
<div className="terms">
  <input type="checkbox" name="" id="checkbox" />
  <p>I agree to the <strong>Terms</strong> and <strong>Conditons</strong></p>
</div>

<button>SignUp</button>

<footer>Already have an account? <Link to={"/Loginpage"}>Login</Link> </footer>
        </div>
    </div>
  )
}

export default SignandLog