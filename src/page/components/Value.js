import React, { useState } from 'react';
import Engineer from '../../images/sites.jpg';

const Value = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  const values = [
    { title: 'Our Vision', content: 'To be the trusted partner in delivering transformative project outcomes across industries.' },
    { title: 'Our Mission', content: 'Empower businesses with innovative project planning, monitoring, and management solutions for sustainable growth.' },
    { title: 'Our Value', content: 'Integrity, excellence, collaboration, and customer-centric solutions driving project success.' },
    { title: 'Quality Assurance', content: 'Upholding the highest quality standards across all our projects.' },
    { title: 'Our Safety Culture', content: 'Prioritizing health, safety and well-being in all project.' }
  ];

  return (
    <div className='flex  text-black flex-col gap-10 mt-[50px] md:mt-[100px] md:flex-row md:gap-20 p-5 md:p-10'>
      {/* Image Section */}
      <div className='w-full md:w-[50%] lg:w-[40%]'>
        <img
          src={Engineer}
          alt='PlanWorks'
          className='w-full h-auto rounded-lg shadow-lg'
        />
      </div>

      {/* Values Section */}
      <div className='w-full md:w-[50%] lg:w-[60%]'>
        <h1 className='text-3xl font-bold text-black mb-10'>Our Values</h1>
        <div className='flex flex-col gap-5'>
          {values.map((value, index) => (
            <div
              key={index}
              className='bg-white p-5 rounded-lg shadow-lg cursor-pointer'
              onClick={() => toggleTab(index)}
            >
              <div className='text-xl md:text-2xl font-bold flex justify-between items-center'>
                {value.title}
                <span>{activeTab === index ? '-' : '+'}</span>
              </div>
              {activeTab === index && (
                <p className='mt-5 text-lg md:text-xl text-black'>{value.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Value;