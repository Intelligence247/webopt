import React from 'react'
import { Link } from 'react-router-dom'
import SignandLog from '../components/SignandLog'
import "./setnewpassword.css"
const Setnewpassword = () => {
  return (
    <div className='setnew'>
        <SignandLog
         title={"Set new password"}
         desc={"Your new password must be different from previously used password"}
         lb1={"Password"}
         lb2={"Confirm password"}
         plc1= {"Enter your Password"}
         plc2= {"Re-enter password"}
        log={"Send Link"}
       />
      
    </div>
  )
}

export default Setnewpassword