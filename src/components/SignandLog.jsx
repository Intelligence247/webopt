import React from 'react'
import "./SignandLog.css"
const SignandLog = (props) => {
  return (
    <div className='signandLogW'>
        <img src="/media/unsplash.png" alt="" />

        <div className="userinfo">
          <h1>Welcome back <img src="/media/bye.png" alt="" /></h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt esse quisquam accusamus necessitatibus molestias nostrum, fugit dolor tenetur neque delectus ratione tempore voluptatum. Eius numquam, expedita perspiciatis nemo aliquam adipisci.</p>

          <div className="widthgoogle">
            <img src="/media/sta.png" alt="" />
            <p>Login with Google</p>
          </div>
          <label htmlFor="name">
            <p>Name</p>
            <input type="text" />
            <p className="valid"></p>
          </label>
          <label htmlFor="email">
            <p>Email</p>
            <input type="text" />
            <p className="valid"></p>
          </label>

          <label htmlFor="passsword">
            <p>Passsword</p>
            <input type="number" />
            <p className="valid"></p>
          </label>

        </div>
    </div>
  )
}

export default SignandLog