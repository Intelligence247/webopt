import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SignandLog from '../components/SignandLog'

const Signuppage = () => {
  return (
    <div className='LoginPageW'>
      <aside>
         <Nav
        package="./#packages"/> 
        </aside>
        <div className='mainlog'>
        <SignandLog
        title={"Join us today"}
        desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolor esse tempore laudantium maiores necessitatibus est voluptatum nihil, vel, repellendus cupiditate perferendis consequuntur, veritatis totam voluptate? Sint nulla assumenda ipsam?"}
        withoogle={"Sign up with google"}
        terms={<>I agree to the <strong>Terms</strong> and <strong>Conditons</strong></>}
        footer={<>Already have an account? <Link to={"/Loginpage"}>Login</Link></>}
        />
        </div>
        </div>
  )
}

export default Signuppage