import React from 'react'
import "./Packages.css"
const Packages = () => {
    const [activeTab, setactiveTab] = React.useState(0)
    const priceLevel = ['Basic', 'Standard', 'Premium']
console.log(activeTab)
  return (
    <div className='packages'>
        <h1>Our Packages</h1>
        <div className="level flex gap-8">
            {
    priceLevel.map((priceL,i)=>(
    <p 
    key={i} 
    className={`${activeTab === i ? 'active': 'tab'}`}
    onClick={()=>setactiveTab(i)}
    >
    {priceL}
    </p>
))
            }
        </div>

    </div>
  )
}

export default Packages