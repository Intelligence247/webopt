import React from 'react'

const EachFeatures = (props) => {
    const EachFeaturesArr= [
        'Limited storage space and bandwidth',
        'Basic website design templates',
        'Limited customer support',
        'Basic SEO tools',
        ' More advanced website design templates',
        ' Priority customer support',
        'Custom email addresses',
        'E-commerce functionality',
        'Link to WhatsApp of the seller for customer support',
    ]
  return (
    <div className='eachFeaturesW lg:w-[23.67rem] w-full h-[56.94rem] py-[2.5rem] px-[1.5rem] flex flex-col gap-[2.5rem] rounded-lg border-2 border-blue-50'>
        <div className="heading flex gap-4 flex-col">
        <h1 className='text-[2rem] font-bold'>{props.title}</h1>
        <p>{props.desc}</p>
        </div>
        <div className="price  flex items-center space-x-2"> <p className='text-[3.5rem]'>${props.price}</p> <span>/ Month</span></div>
        <button className='text-[#5F39AA] text-center w-full border-2 border-[#5F39AA] rounded-lg py-3 font-[600]'>Get Started Now</button>

        <div className="availableservices flex flex-col gap-[2rem]">
            {
            EachFeaturesArr.map((each,i)=>(
                <div className={`service1 ${i==0?props.valid:''} flex space-x-4  items-center`}
                key={i}
                >
                <p className={`bg-[#E8EDFB] min-w-[2rem] h-8 rounded-full flex justify-center items-center ${i>3 && i<=6 ? props.basicbg:i>6?props.standardbg:''}`}><img src={`${i > 3 && i<=6 ? props.basicimg: i>6?props.standardimg:props.validImg}`} alt="" /></p>
                <p className={`${i>3 && i<=6?props.basicp:i>6?props.standardp:'text-'}`}>{each}</p>
            </div>
            ))

            }
           
        </div>
    </div>
  )
}

export default EachFeatures