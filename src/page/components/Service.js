import React from 'react';
import Civil from './../../images/civil.jpg';
import Build from './../../images/build.jpg';
import Sites from './../../images/sites.jpg';
import Third from './../../images/third.jpg';
import Estate  from '../../images/estate.jpg'

const Service = () => {
  return (
    <div className='p-5 md:p-10'>
      <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center'>
        {/* Civil Engineering Section */}
        <div className='w-full md:w-[50%] lg:w-[40%]'>
          <h1 className='text-2xl md:text-3xl font-bold mb-5'>Civil Engineering</h1>
          <p className='text-lg md:text-xl'>
            As part of the services provided by construction companies, Dutum deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewerage systems, pipelines, structural components of buildings, and railways.
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
          <h1 className='text-2xl md:text-3xl font-bold mb-5'>Building Construction</h1>
          <p className='text-lg md:text-xl'>
            A specialty of Dutum Company Limited is the addition of structures to real estate, which considers construction costs, expected lifetime, safety regulations, and potential hazards. One of the services provided by construction companies includes building construction.
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
          <h1 className='text-2xl md:text-3xl font-bold mb-5'>Facility Management</h1>
          <p className='text-lg md:text-xl'>
          By integrating people, place, process, and technology, we ensure the built environment is functional, comfortable, safe, and efficient.

Learn more about our Facility Management offerings.
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center mt-10'>
        {/* Building Construction Section */}

        <div className='w-full md:w-[50%] lg:w-[40%]'>
          <h1 className='text-2xl md:text-3xl font-bold mb-5'>Real Estate</h1>
          <p className='text-lg md:text-xl'>
          A specialty of Dutum Company Limited is building realistically priced real estate in rural and urban areas of Nigeria, which includes acreage, small towns, country homes, recreational cabins, retirement homes, and waterfront properties.
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
