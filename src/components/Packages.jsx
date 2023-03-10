import React from "react";
import Basic from "./Basic";
import "./Packages.css";
import Premium from "./Premium";
import Standards from "./Standards";
const Packages = () => {
  const [activeTab, setactiveTab] = React.useState(0);
  
  const priceLevel = ["Basic", "Standard", "Premium"];
  return (
<<<<<<< HEAD
    <div className="packages">
      <h1>Our Packages</h1>
      <div className="level flex gap-8">
        {priceLevel.map((priceL, i) => (
          <p
            key={i}
            className={`${activeTab === i ? "active" : "tab"}`}
            onClick={() => setactiveTab(i)}
          >
            {priceL}
          </p>
        ))}
      </div>
=======
    <div className='packages' id='packages'>
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
>>>>>>> 0267060961811b2c406514cf72cc87b2ef3ce6e9

      <section>
        {activeTab === 0 ? <Basic /> : ""}
        {activeTab === 1 ? <Standards /> : ""}
        {activeTab == 2 ? <Premium /> : ""}
      </section>

      <div className="learn">
        <a href="">Learn more</a> - Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sint hej ejhjd
      </div>
    </div>
  );
};

export default Packages;
