import React from 'react';
import Civil from './../../images/civil.jpg';
import Build from './../../images/planwork.jpg';
import Sites from './../../images/sites.jpg';
import Third from './../../images/third.jpg';
import Estate  from '../../images/estate.jpg'

const Service = () => {
  return (
    <div className='p-5 md:p-10'>
      <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center'>
        {/* Civil Engineering Section */}
        <div className='w-full md:w-[50%] lg:w-[40%]'>
          <h1 className='text-2xl md:text-3xl font-bold mb-5'>Project Planning & Scheduling</h1>
          <p className='text-lg md:text-xl'>
          PlanWorks specializes in Project Planning, Scheduling, Monitoring, Resource Management, Delay Analysis, EOT Claims, and Project Management, providing end-to-end services that cover the design, planning, execution, and oversight of projects in the construction and oil and gas industries. Our expertise extends across infrastructure development, including large-scale construction projects, oil and gas operations, turnaround maintenance, railways, airports, and utility systems, ensuring smooth project delivery from conception to completion.
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
          <h1 className='text-2xl md:text-3xl font-bold mb-5'>Project Monitoring & Progress Tracking</h1>
          <p className='text-lg md:text-xl'>
            A specialty of PlanWorks Company Limited is the addition of structures to real estate, which considers construction costs, expected lifetime, safety regulations, and potential hazards. One of the services provided by construction companies includes building construction.
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center mt-10'>
        {/* Building Construction Section */}

        <div className='w-full md:w-[50%] lg:w-[40%]'>
          <h1 className='text-2xl md:text-3xl font-bold mb-5'>Engineering, Procurement and Construction (EPC) service provider</h1>
          <p className='text-lg md:text-xl'>
          In our role as an EPC provider, we are responsible for the design, procurement, construction, commissioning, and handover of a project to the project owner. We ensure that the project is completed according to schedule and within budget.
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
          By integrating people, place, process, and technology, we ensure the built environment is functional, comfortable, safe, and efficient.

Learn more about our EOT Claims
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center mt-10'>
        {/* Building Construction Section */}

        <div className='w-full md:w-[50%] lg:w-[40%]'>
          <h1 className='text-2xl md:text-3xl font-bold mb-5'>Resource & Stakeholder Management</h1>
          <p className='text-lg md:text-xl'>
          A specialty of PlanWorks Company Limited is building realistically priced real estate in rural and urban areas of Nigeria, which includes acreage, small towns, country homes, recreational cabins, retirement homes, and waterfront properties.
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
