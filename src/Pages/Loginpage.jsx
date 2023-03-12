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
        withoogle={"Login with google"}
        terms={"Remember me"}
        footer={<>Don't have an accoutn yet? <Link to={"/signuppage"}>Create an account</Link></>}
        />
        </div>
        </div>
  )
}


export default Loginpage