import React from 'react'
import "./Nav.css"
const Nav = () => {
  return (
    <div className='navWrapper'>
    <img src="/media/logo.png" alt="" />
    <p>Home</p>
    <p>Packages</p>
    <p>About</p>
    <p>Blog</p> 
    <span></span>
<p className='login'>Login</p>
<p className='signup'>Sign Up</p>
    </div>
  )
}

export default Nav