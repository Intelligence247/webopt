import React from 'react'
import "./Faq.css"
import Questions from './Questions'
const Faqs = () => {
  const QandA =[
    {
      ques:"Is there a free trial available",
      ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti amet quia natus est repudiandae dignissimos pariatur, facilis blanditiis quae totam tempora veritatis expedita velit nemo cupiditate vitae, sunt sed quaerat."
    },
    {
      ques:"Is there a free trial available",
      ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti amet quia natus est repudiandae dignissimos pariatur, facilis blanditiis quae totam tempora veritatis expedita velit nemo cupiditate vitae, sunt sed quaerat."
    },
    {
      ques:"Is there a free trial available",
      ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti amet quia natus est repudiandae dignissimos pariatur, facilis blanditiis quae totam tempora veritatis expedita velit nemo cupiditate vitae, sunt sed quaerat."
    },
    {
      ques:"Is there a free trial available",
      ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti amet quia natus est repudiandae dignissimos pariatur, facilis blanditiis quae totam tempora veritatis expedita velit nemo cupiditate vitae, sunt sed quaerat."
    },
    {
      ques:"Is there a free trial available",
      ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti amet quia natus est repudiandae dignissimos pariatur, facilis blanditiis quae totam tempora veritatis expedita velit nemo cupiditate vitae, sunt sed quaerat."
    },
  ]
 return (
        <div className='FaqW'>
            <h1>Frequently asked questions</h1>
            <p className='ev'>Everything you need to know about setting up your shop on Web-opt</p>
                <div className="allQ">
                  {
                    QandA.map((q, i)=>(
                      <Questions
                      key={i}
                      ques={q.ques}
                      ans={q.ans}/>

                    ))
                  }
            
        </div>
        </div>
      )
    }
    


export default Faqs