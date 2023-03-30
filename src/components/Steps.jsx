import React from "react";
import Step1 from "./Step1";
import "./Step.css";

const Steps = () => {
  const stepObj = [
    {
      title: "Create an Account:",
      desc: "Sign up with your business name, email address, and password to get access to our website platform.",
    },
    {
      title: "Choose Your Package:",
      desc: "Our team of experts can help you optimize your website for search engines so that your business appears higher in search results. This will help potential customers find your website more easily.",
    },
    {
      title: "Design Your Website:",
      desc: "Customize your website with our easy-to-use tools and templates to make it look and feel like your own.",
    },
  ];

  return (
    <div className="Stepsw">
      <img src="/media/unsplash.png" className="stepimg" alt="" />
      <div className="visibility">
        <h1>boost your online visibility in just a few steps</h1>

        {stepObj.map((step, i) => (
          <Step1 key={i} title={step.title} desc={step.desc} />
        ))}
      </div>
    </div>
  );
};

export default Steps;
