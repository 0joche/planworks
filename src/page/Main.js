import React from 'react';
import Header from './Header';
import Cards from './components/Cards';
import Projects from './components/Projects';

const Main = () => {
  return (
    <>
      <Header />
      <div className='bg-orange w-full h-[300px] mt-[100px]'>
        <div className='container mx-auto pt-10'>
          <div>
            <h1 className='text-center text-3xl'>Our Services</h1>
            <p className='w-full md:w-[550px] text-center mx-auto mt-10 px-4 md:px-0'>
              PlanWorks Consulting is a leading Project Planning, Scheduling, Monitoring, and Management firm with a reputation for delivering technical excellence built on years of experience. Based in Abuja, we provide innovative project management solutions across all Nigerian states and Africa, ensuring seamless project execution from inception to completion.
            </p>
          </div>
        </div>
      </div>
      <Cards />
      
      <div className='text-Black'>
        <h1 className='text-3xl mt-[200px] ml-[20px] lg:ml-[100px] font-bold'>Our Projects</h1>
        <p className='w-[600px] ml-[20px] lg:ml-[100px]'>
          Here are some of the projects we have planned and managed across Nigeria. While some have been successfully completed, others are currently in progress. Explore our portfolio!
        </p>
      </div>

      {/* Projects Container */}
      <div className="max-w-6xl mx-auto px-5 py-10">
        {/* Projects Wrapper with Styling */}
        <div className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white">
          {/* Staff Accommodation Camp Development */}
          <div className="mb-20 p-8 border border-gray-100 rounded-lg shadow-md bg-gray-50">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🏗️</span>
              <h2 className="text-2xl text-black font-bold">Staff Accommodation Camp Development – Refinery Project</h2>
            </div>
            <div className="ml-12">
              <p className="font-semibold text-black mb-2">Client: <span className="font-normal">Confidential</span></p>
              <p className="font-semibold text-black mb-2">Scope: <span className="font-normal">Planning & Infrastructure Support</span></p>
              <p className="text-black mt-4">
                PlanWorks provided comprehensive project planning, layout optimization, and progress monitoring 
                for the development of a fully serviced staff accommodation camp to support refinery operations. 
                The project included housing, utilities, access roads, and compliance with HSE standards.
              </p>
            </div>
          </div>

          {/* Refinery Quick-Fix Rehabilitation Project */}
          <div className="mb-20 p-8 border border-gray-100 rounded-lg shadow-md bg-gray-50">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">⚙️</span>
              <h2 className="text-2xl text-black font-bold">Refinery Quick-Fix Rehabilitation Project</h2>
            </div>
            <div className="ml-12">
              <p className="font-semibold text-black mb-2">Client: <span className="font-normal">Confidential</span></p>
              <p className="font-semibold text-black mb-2">Scope: <span className="font-normal">Planning, Monitoring & Reporting</span></p>
              <p className="text-black mt-4">
                PlanWorks was engaged to plan, track, and report on the fast-tracked rehabilitation of critical 
                refinery units. Our team implemented dynamic scheduling, resource leveling, and progress analysis 
                to ensure timely execution and visibility for stakeholders under a compressed timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Projects />
    </>
  );
};

export default Main;
