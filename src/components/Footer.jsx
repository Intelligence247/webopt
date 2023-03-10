import React from 'react'
import "./Footer.css"
import FooterC from './FooterC'

const footerText = [
{
h1:'Overview',
p1:'Features',
p2:'Solutions',
p3:'Pricing',
},
{
    h1:'Company',
    p1:'About Us',
    p2:'News',
    p3:'Contact',
},
{
    h1:'Resources',
    p1:'Blog',
    p2:'Newsletter',
    p3:'Events',
    p4:'Help centre',
    p5:'Support',
},
{
    h1:'Social',
    p1:'Twitter',
    p2:'LinkedIn',
    p3:'Events',
    p4:'Facebook',
    p5:'Instagram',
},
{
    h1:'Legal',
    p1:'Terms',
    p2:'Privacy',
    p3:'Cookies',
    p4:'Licenses',
    p5:'Settings',
}

]
const date = new Date()
const Footer = () => {
  return (
    <div className='footerWrapper' id='about'>
        <div className="footerTexts">
            {
                footerText.map((text,i)=>(
                    <FooterC 
                    key={i}
                    h={text.h1}
                    p1={text.p1}
                    p2={text.p2}
                    p3={text.p3}
                    p4={text.p4}
                    p5={text.p5}
                    />
                ))
            }
        </div>
        <hr />

        <div className="copy">
            <img src="/media/logo.png" alt="" />
            <p>&copy; {date.getFullYear()} goldthesesigner. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer