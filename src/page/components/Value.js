import React, { useState } from 'react'
import Engineer from '../../images/engineer.jpg'


const Value = () => {
      const [activeTab, setActiveTab] = useState(null);
    
      const toggleTab = (index) => {
        setActiveTab(activeTab === index ? null : index);
      };
    
      const values = [
        { title: 'Our Vision', content: 'To be the leading indigenous construction company in Nigeria.' },
        { title: 'Our Mission', content: 'Delivering quality construction projects with integrity and excellence.' },
        { title: 'Our People', content: 'We empower our team to achieve personal and professional growth.' },
        { title: 'Quality Assurance', content: 'Ensuring the highest quality standards in all our projects.' },
        { title: 'Health & Safety', content: 'Prioritizing safety and well-being in every project.' }
      ];
  return (
    <div className='flex flex-col gap-20 mt-30 ml-[200px] mt-[100px] sm:flex sm:flex-row'>
        <div className='sm-w-[700px]'>
            <img src={Engineer} alt='PlanWorks' className='w-[400px] sm:w-[700px] '/>
        </div>
        <div>
            <h1>Our Values</h1>
            <div>
            <div className='flex flex-row gap-20 text-black '>
                <div className='w-[700px]'>
                    {values.map((value, index) => (
                    <div key={index} className='bg-white p-5 rounded-lg shadow-lg cursor-pointer' onClick={() => toggleTab(index)}>
                        <div className='text-2xl font-bold flex justify-between items-center'>
                        {value.title}
                        <span>{activeTab === index ? '-' : '+'}</span>
                        </div>
                        {activeTab === index && <p className='mt-5 text-xl'>{value.content}</p>}
                    </div>
            ))}
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Value