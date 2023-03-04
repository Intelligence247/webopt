import {React, useState} from 'react'
import "./Nav.css"
const Nav = () => {
  const [nav, setNav] = useState(true)
  return (
    <div className='navWrapper'>
    <img src="/media/logo.png" alt="" />
    <div className={`sign ${nav && 'actnav'}`}>
    <p>Home</p>
    <p>Packages</p>
    <p>About</p>
    <p>Blog</p> 
    <span></span>
<p className='login'>Login</p>
<p className='signup'>Sign Up</p>
</div>
<img src= { `${nav?"/media/showb.png":"/media/closew.png"} `} className='burg' alt="" onClick={()=>setNav(!nav)} />
    </div>
  )
}

export default Nav