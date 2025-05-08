import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className='w-full text-black text-center mx-auto pt-[100px] pb-[50px]'>
        <h1 className='text-4xl font-bold mb-10'>Our Featured Projects</h1>
        <p className='text-xl max-w-2xl mx-auto mb-10'>
          Discover how PlanWorks delivers excellence through strategic planning and precise execution.
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
              <h2 className="text-2xl font-bold">Staff Accommodation Camp Development – Refinery Project</h2>
            </div>
            <div className="ml-12">
              <p className="font-semibold mb-2">Client: <span className="font-normal">Confidential</span></p>
              <p className="font-semibold mb-2">Scope: <span className="font-normal">Planning & Infrastructure Support</span></p>
              <p className="mt-4">
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
              <h2 className="text-2xl font-bold">Refinery Quick-Fix Rehabilitation Project</h2>
            </div>
            <div className="ml-12">
              <p className="font-semibold mb-2">Client: <span className="font-normal">Confidential</span></p>
              <p className="font-semibold mb-2">Scope: <span className="font-normal">Planning, Monitoring & Reporting</span></p>
              <p className="mt-4">
                PlanWorks was engaged to plan, track, and report on the fast-tracked rehabilitation of critical 
                refinery units. Our team implemented dynamic scheduling, resource leveling, and progress analysis 
                to ensure timely execution and visibility for stakeholders under a compressed timeline.
              </p>
            </div>
          </div>

          {/* Contact Button */}
          <div className="text-center mt-10">
            <button className='text-xl border-2 border-blue-300 px-8 py-4 hover:bg-orange-500 hover:text-white hover:border-gray-500 transition-colors duration-300'>
              <Link to="/contact">
                CONTACT US
              </Link>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
