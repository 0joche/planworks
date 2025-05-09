import React, { useState } from 'react';
import Logo from '../images/logo.jpeg';
import Site from '../images/datas.jpg';
import { Link } from 'react-router-dom';
import { IoIosSearch, IoIosMenu, IoIosClose } from 'react-icons/io';
import { useSearch } from '../page/components/SearchContext';
import Projects from './components/Projects';
import Civil from '../images/civil.jpg'; // Added missing image imports
import Build from '../images/planwork.jpg';
import Sites from '../images/control.jpg';
import Third from '../images/delay.jpg';
import Estate from '../images/plan.jpg';

const Service = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use the global search context
  const {
    isPopupVisible,
    togglePopup,
    searchQuery,
    searchResults,
    handleSearchInputChange,
    highlightText,
  } = useSearch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='text-white'>
      {/* Hero Section */}
      <div
        className="h-[400px] relative bg-cover bg-center text-white"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(141, 141, 231, 0.19), rgba(89, 89, 241, 0.6)), url(${Site})` }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>

        <main className="relative z-10">
          <ul className="ml-5 lg:ml-20 flex items-center justify-between">
            <li className="flex items-center">
              <Link to="/" className='flex flex-row'>
                <img src={Logo} alt='PlanWorks' className='w-[50px] h-[50px] mt-10 mr-5 rounded-3xl' />
                <span className='text-3xl text-white mt-10'>PlanWorks Consulting</span>
              </Link>
            </li>

            {/* Hamburger Icon */}
            <li className="mt-[45px] mr-5 lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? <IoIosClose className="text-3xl" /> : <IoIosMenu className="text-3xl" />}
            </li>

            {/* Navigation Links */}
            <li className={`mt-[45px] text-2xl flex gap-6 lg:flex ${isMenuOpen ? 'flex bg-black' : 'hidden'} flex-col lg:flex-row absolute lg:static top-24 left-0 bg-opacity-90 w-full lg:w-auto p-5 lg:p-0`}>
              {['Home', 'About', 'Services', 'Team', 'Projects', 'Blog', 'CSR', 'Careers', 'Contact'].map((item, index) => (
                <Link key={index} to={`/${item.toLowerCase().replace(' ', '')}`} className="hover:underline p-2 lg:p-0">{item}</Link>
              ))}
            </li>

            {/* Search Icon */}
            <li className="ml-[150px] mt-[45px] cursor-pointer lg:block hidden" onClick={togglePopup}>
              <IoIosSearch className="text-3xl ml-20" />
            </li>
          </ul>

          {/* Search Popup */}
          {isPopupVisible && (
            <div className="fixed top-0 left-0 w-full bg-black bg-opacity-90 transition-transform duration-500 ease-in-out">
              <div className="container mx-auto p-5 flex flex-col justify-center items-center h-[300px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-1/2 p-3 rounded-lg bg-white text-black focus:outline-none"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                {/* Display search results */}
                {searchResults.length > 0 && (
                  <div className="w-1/2 bg-white mt-5 rounded-lg shadow-lg max-h-[200px] overflow-y-auto">
                    {searchResults.map((result) => (
                      <Link
                        key={result.id}
                        to={result.link}
                        className="block p-3 hover:bg-gray-100 text-black"
                        onClick={togglePopup}
                      >
                        <div className="font-bold">{highlightText(result.title, searchQuery)}</div>
                        <div className="text-sm">{highlightText(result.description, searchQuery)}</div>
                      </Link>
                    ))}
                  </div>
                )}
                <button
                  className="mt-5 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={togglePopup}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </main>

        <h1 className='text-3xl text-white mt-[200px] ml-[20px] lg:ml-[100px] font-bold'>Our Services</h1>
      </div>

      <div className='p-5 md:p-10 text-black'>
        <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center'>
          {/* Project Planning */}
          <div className='w-full md:w-[50%] lg:w-[40%]'>
            <h1 className='text-2xl md:text-3xl font-bold mb-5'>Project Planning & Scheduling</h1>
            <p className='text-lg md:text-xl'>
              We specialize in delivering comprehensive project planning and scheduling services, ensuring that every phase of your engineering, procurement, and construction, or infrastructure project is professionally organized, monitored, and controlled. Our expert team utilizes advanced tools and methodologies to create realistic timelines, effective monitoring, optimize resource allocation, and align project milestones with your strategic goals, ensuring timely and efficient project delivery.
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
          {/* Project Tracking */}
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
          {/* Project Controls Section */}
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
          {/* Delay Analysis Section */}
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
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center mt-10'>
          {/* Risk Management Section */}
          <div className='w-full md:w-[50%] lg:w-[40%]'>
            <h1 className='text-2xl md:text-3xl font-bold mb-5'>Risk and Resource Management</h1>
            <p className='text-lg md:text-xl'>
              We provide comprehensive risk and resource management services to mitigate potential challenges and optimize resource utilization. By identifying, assessing, and managing risks early, we safeguard your project's success, while ensuring that resources are allocated efficiently to maintain productivity and achieve project objectives.
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

        <Projects />
      </div>
    </div>
  );
};

export default Service;
