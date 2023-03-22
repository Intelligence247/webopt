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
        desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolor esse tempore laudantium maiores necessitatibus est voluptatum nihil, vel, ipsam?"}
        lb1={"Name"}
        lb2={"Email address"}
        lb3="Password"
        plc1="Enter your name"
        plc2="Enter your email address"
        plc3="Enter your password"
        withoogle={"Sign up with google"}
        terms={<>I agree to the <strong>Terms</strong> and <strong>Conditons</strong></>}
        footer={<>Already have an account? <Link to={"/Loginpage"}>Login</Link></>}
        log={"SignUp"}
        />
        </div>
        </div>
  )
}

export default Signuppage