import React from 'react'
import Nav from '../components/Nav'
import SignandLog from '../components/SignandLog'
import "./Loginpage.css"

const Loginpage = () => {
  return (
    <div className='LoginPageW'>
      <section>
         <Nav
        package="./#packages"/> 
        </section>
        <main>
        <SignandLog/>
        </main>
        </div>
  )
}

export default Loginpage