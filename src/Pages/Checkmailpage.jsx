import React from 'react'
import { Link } from 'react-router-dom'
import "./Checkmailpage.css"
const Checkmailpage = () => {
  return (
    <div className='checkmailW'>
            <img src="/media/unsplash.png" alt="" />
        <div className="checkmail">
            <h1>Check your mail</h1>
            <p>We sent a reset link to your email address!</p>
            <button>Resend Link</button>

            <Link to={'/loginpage'}>Back to Login</Link>

        </div>

    </div>
  )
}

export default Checkmailpage