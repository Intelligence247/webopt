import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
const Nav = (props) => {
  const [nav, setNav] = useState(true)
  return (
    <div className='navWrapper'>
  <img src="/media/logo.png" alt="" />
    <div className={`sign ${nav && 'actnav'}`}>
   
    <Link to={"/"}><p>Home</p></Link>
   <a href={props.package}><p>Packages</p></a>
   <a href="#about"><p>About</p></a> 
    <p>Blog</p> 
    <span></span>
<Link to={"/loginpage"}><p className='login'>Login</p></Link> 
<Link to={"/signuppage"}><p className='signup'>Sign Up</p></Link>
</div>
<div className={`sign2 ${nav && 'actnav2'}`}></div>
<img src= {`${nav?"/media/showb.png":"/media/closew.png"} `} className='burg' alt="" onClick={()=>setNav(!nav)} />
    </div>
  )
}

export default Nav