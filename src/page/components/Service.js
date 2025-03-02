import React from 'react';
import Civil from './../../images/civil.jpg';
import Build from './../../images/planwork.jpg';
import Sites from './../../images/sites.jpg';
import Third from './../../images/third.jpg';
import Estate  from '../../images/plan.jpg'

const Service = () => {
  return (
    <div className='p-5 md:p-10'>
      <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center'>
        {/* Civil Engineering Section */}
        <div className='w-full md:w-[50%] lg:w-[40%]'>
          <h1 className='text-2xl md:text-3xl font-bold mb-5'>Project Planning & Scheduling</h1>
          <p className='text-lg md:text-xl'>
          We specialize in delivering comprehensive project planning and scheduling services, ensuring that every phase of your procurement, construction, engineering, or infrastructure project is professioanlly organized. Our expert team utilizes advanced tools and methodologies to create realistic timelines, optimize resource allocation, and align project milestones with your strategic goals, ensuring timely and efficient project delivery.
          </p>
        </div>

        <div className='w-full md:w-[50%] lg:w-[40%]'>
          <img
            src={Civil}
            alt='PlanWorks'
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center mt-10'>
        {/* Building Construction Section */}
        <div className='w-full md:w-[50%] lg:w-[40%]'>
          <img
            src={Build}
            alt='PlanWorks'
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>

        <div className='w-full md:w-[50%] lg:w-[40%]'>
          <h1 className='text-2xl md:text-3xl font-bold mb-5'>Project Tracking & Monitoring</h1>
          <p className='text-lg md:text-xl'>
          Our project tracking and monitoring services provide real-time insights into project progress, enabling proactive decision-making and timely interventions. We employ cutting-edge software and data analytics to track key performance indicators, monitor deliverables, and ensure that projects stay on course, minimizing deviations and maximizing efficiency throughout the project lifecycle.
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center mt-10'>
        {/* Building Construction Section */}

        <div className='w-full md:w-[50%] lg:w-[40%]'>
          <h1 className='text-2xl md:text-3xl font-bold mb-5'>Project Controls & Reporting</h1>
          <p className='text-lg md:text-xl'>
Our project controls and reporting services ensure transparency and accountability in project execution. We implement rigorous control mechanisms to monitor costs, schedules, and quality, while providing detailed, customized reports that keep stakeholders informed and enable data-driven decisions for successful project outcomes.
          </p>
        </div>
        <div className='w-full md:w-[50%] lg:w-[40%]'>
          <img
            src={Sites}
            alt='PlanWorks'
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center mt-10'>
        {/* Building Construction Section */}
        <div className='w-full md:w-[50%] lg:w-[40%]'>
          <img
            src={Third}
            alt='PlanWorks'
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>

        <div className='w-full md:w-[50%] lg:w-[40%]'>
          <h1 className='text-2xl md:text-3xl font-bold mb-5'>Delay Analysis & EOT Claims</h1>
          <p className='text-lg md:text-xl'>
          We offer expert delay analysis and Extension of Time (EOT) claims services to help clients navigate project delays effectively. Our team identifies the root causes of delays, assesses their impact, and prepares robust claims to ensure fair compensation and project recovery, keeping your project on track and within contractual obligations.

Learn more about our EOT Claims
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center mt-10'>
        {/* Building Construction Section */}

        <div className='w-full md:w-[50%] lg:w-[40%]'>
          <h1 className='text-2xl md:text-3xl font-bold mb-5'>Risk and Resource Management</h1>
          <p className='text-lg md:text-xl'>
          We provide comprehensive risk and resource management services to mitigate potential challenges and optimize resource utilization. By identifying, assessing, and managing risks early, we safeguard your project’s success, while ensuring that resources are allocated efficiently to maintain productivity and achieve project objectives.
          </p>
        </div>
        <div className='w-full md:w-[50%] lg:w-[40%]'>
          <img
            src={Estate}
            alt='PlanWorks'
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
