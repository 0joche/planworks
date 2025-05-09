import React, { useState } from 'react';
import Site from '../images/colab.jpg';
import Logo from '../images/logo.jpeg';
import { IoIosSearch, IoIosMenu, IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useSearch } from '../page/components/SearchContext'; // Import the useSearch hook
import Projects from './components/Projects';

const Csr = () => {
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
    <div className='text-black'>
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

        <h1 className='text-3xl mt-[200px] ml-[20px] lg:ml-[50px] font-bold'>Corporate Social Responsibility (CSR)</h1>
      </div>

      {/* CSR Content Container */}
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="border border-gray-200 rounded-lg shadow-sm p-8 bg-white">
          <h1 className='text-2xl mb-5 font-bold'>Our Responsibility</h1>
          <div className="space-y-5">
            <p>As a project planning, scheduling, and management firm, we recognize that our business decisions and operations extend beyond our organization and stakeholders — they impact the communities where we work and live.</p>
            <p>Our commitment to corporate social responsibility is embedded in our approach to delivering projects that not only drive business outcomes but also contribute positively to society and the environment. We strive to integrate responsible practices across our operations, with a focus on:</p>
            <ul className='list-disc list-inside mt-5 space-y-2'>
              <li>Community Development and Engagement Initiatives</li>
              <li>Capacity Building via Education and Training Programs</li>
              <li>Environmental Sustainability through Efficient Project Planning</li>
              <li>Youth Empowerment through Skills Development and Mentorship</li>
              <li>Promoting Health, Safety, and Well-being Standards</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fix: Properly render the Projects component */}
      <Projects />
    </div>
  );
};

export default Csr;
