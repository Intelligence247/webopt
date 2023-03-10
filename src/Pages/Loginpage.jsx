import React from 'react'
import Nav from '../components/Nav'
import SignandLog from '../components/SignandLog'
import "./Loginpage.css"

const Loginpage = () => {
  return (
    <div className='LoginPageW'>
      <aside>
         <Nav
        package="./#packages"/> 
        </aside>
        <div className='mainlog'>
        <SignandLog/>
        </div>
        </div>
  )
}

export default Loginpage