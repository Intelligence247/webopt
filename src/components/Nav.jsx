import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = (props) => {
  const [nav, setNav] = useState(true);
  const [color, setColor] = useState(0)
  console.log(color)
  return (
    <div className="navWrapper">
      <img src="/media/logo.png" alt="" />

      <div className={`sign ${nav && "actnav"}`}>
        <Link to={"/"}>
          <p
          className={`${color===0 ? 'text-primary':'text-[#1b1b1b]'}`}
          onClick={()=>setColor(0)}
          >Home</p>
        </Link>
        <a href={props.package}>
          <p 
        className={`${color===1 ? 'text-primary':'text-[#1b1b1b]'}`}
        onClick={()=>setColor(1)}
          >Packages</p>
        </a>
        <a href="#about">
          <p
           className={`${color===2 ? 'text-primary':'text-[#1b1b1b]'}`}
           onClick={()=>setColor(2)}
          >About</p>
        </a>
        <p
         className={`${color===3 ? 'text-primary':'text-[#1b1b1b]'}`}
         onClick={()=>setColor(3)}
        >Blog</p>
        <span></span>
        <Link to={"/loginpage"}>
          <p className="login">Login</p>
        </Link>
        <Link to={"/signuppage"}>
          <p className="signup">Sign Up</p>
        </Link>
      </div>
      <div 
      className={`sign2 ${nav && "actnav2"}`}
      onClick={() => setNav(!nav)}
      ></div>
      <img

        src={`${nav ? "/media/showb.png" : "/media/closew.png"} `}
        className="burg"
        alt=""
        onClick={() => setNav(!nav)}
      />

    </div>
  );
};

export default Nav;
