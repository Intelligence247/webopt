import React from "react";
import "./Faq.css";
import Questions from "./Questions";

const Faqs = () => {
  const QandA = [
    {
      ques: "What is your website platform, and what does it do?",
      ans: "Our website platform is a user-friendly tool that helps businesses of all sizes create a website, promote their products or services, and reach more customers online. It offers various packages with different features to suit your business needs and budget.",
    },
    {
      ques: "How much does it cost to use your platform?",
      ans: " We offer three different packages, including a free basic package, and two paid packages. The pricing varies depending on the features you need and the package you choose. You can find detailed information on our pricing page.",
    },
    {
      ques: "Do I need any technical knowledge to use your platform?",
      ans: "No, you don't need any technical knowledge or experience to use our platform. Our platform is designed to be user-friendly and intuitive, with easy-to-use tools and templates.",
    },
    {
      ques: "Can I use my own domain name with your platform?",
      ans: "Yes, if you sign up for our standard or premium package, you can use your own custom domain name.",
    },
    {
      ques: "How do I get started with your platform?",
      ans: "To get started, simply create an account and choose a package that fits your business needs. From there, you can customize your website with our easy-to-use tools and templates.",
    },
  ];
  return (
    <div className="FaqW">
      <h1>Frequently asked questions</h1>
      <p className="ev">
        Everything you need to know about setting up your shop on Web-opt
      </p>
      <div className="allQ">
        {QandA.map((q, i) => (
          <Questions key={i} ques={q.ques} ans={q.ans} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
