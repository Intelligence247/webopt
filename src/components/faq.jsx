import React from 'react'
import "./Faq.css"
import Questions from './Questions'

const Faq = () => {
  return (
    <div className='FaqW'>
        <h1>Frequently asked questions</h1>
        <p className='ev'>Everything you need to know about setting up your shop on Web-opt</p>
<div className="allQ">
        <Questions/>
        <Questions/>
        <Questions/>
        <Questions/>
        <Questions/>
        <Questions/>
    </div>
    </div>
  )
}

export default Faq