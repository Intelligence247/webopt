import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SignandLog from '../components/SignandLog'
import "./Loginpage.css"

const Loginpage = () => {
  return (
    <div className='LoginPageW log'>
      <aside>
         <Nav
        package="./#packages"/> 
        </aside>
        <div className='mainlog'>
        <SignandLog
        title={"Wecome back"}
        desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolor esse tempore laudantium maiores necessitatibus est voluptatum nihil, vel, repellendus cupiditate perferendis consequuntur, veritatis totam voluptate? Sint nulla assumenda ipsam?"}
        lb2={"Email address"}
        lb3="Password"
        plc2="Enter your email address"
        plc3="Enter your password"
        withoogle={"Login with google"}
        terms={"Remember me"}
        footer={<>Don't have an accoutn yet? <Link to={"/signuppage"}>Create an account</Link></>}
        log={"Login"}
        />
        </div>
        </div>
  )
}


export default Loginpage