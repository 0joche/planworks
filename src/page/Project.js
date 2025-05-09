import React, { useState } from 'react';
import Site from '../images/work.jpg';
import Logo from '../images/logo.jpeg';
import { IoIosSearch, IoIosMenu, IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useSearch } from '../page/components/SearchContext'; // Import the useSearch hook
import Projects from './components/Projects';

const Project = () => {
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
      <div
        className="h-[400px] relative bg-cover bg-center text-white"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(141, 141, 231, 0.19), rgba(62, 62, 238, 0.6)), url(${Site})` }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>

        <main className="relative z-10">
          <ul className="ml-5 lg:ml-20 flex items-center justify-between">
            <li className="flex items-center">
              <Link to="/" className='flex flex-row'>
                <img src={Logo} alt='PlanWorks' className='w-[50px] h-[50px] mt-10 mr-5 rounded-3xl' />
                <span className='text-3xl text-white mt-10'>PlanWorks Consulting </span>
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

        <h1 className='text-3xl text-white mt-[200px] ml-[20px] lg:ml-[100px] font-bold'>Our Projects</h1>
        <p className='w-[600px] text-white ml-[20px] lg:ml-[100px] '>
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
              <h2 className="text-2xl black font-bold">Staff Accommodation Camp Development – Refinery Project</h2>
            </div>
            <div className="ml-12">
              <p className="font-semibold black mb-2">Client: <span className="font-normal">Confidential</span></p>
              <p className="font-semibold text black mb-2">Scope: <span className="text black font-normal">Planning & Infrastructure Support</span></p>
              <p className="text black mt-4">
                PlanWorks provided comprehensive project planning, layout optimization, and progress monitoring 
                for the development of a fully serviced staff accommodation camp to support refinery operations. 
                The project included housing, utilities, access roads, and compliance with HSE standards.
              </p>
            </div>
          </div>

          {/* Refinery Quick-Fix Rehabilitation Project */}
          <div className="mb-20 p-8 border border-gray-100 rounded-lg shadow-md bg-gray-50">
            <div className="flex items-center mb-4">
              <span className="text black-3xl mr-3">⚙️</span>
              <h2 className="text black-2xl font-bold">Refinery Quick-Fix Rehabilitation Project</h2>
            </div>
            <div className="ml-12">
              <p className="font-semibold text black mb-2">Client: <span className="font-normal text black">Confidential</span></p>
              <p className="font-semibold text black mb-2">Scope: <span className="font-normaltext black">Planning, Monitoring & Reporting</span></p>
              <p className="text black mt-4">
                PlanWorks was engaged to plan, track, and report on the fast-tracked rehabilitation of critical 
                refinery units. Our team implemented dynamic scheduling, resource leveling, and progress analysis 
                to ensure timely execution and visibility for stakeholders under a compressed timeline.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Projects />
    </div>
  );
};

export default Project;
