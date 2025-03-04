import React, { useState } from 'react';
import Site from '../images/woman.jpg';
import Logo from '../images/logo.jpeg';
import { IoIosSearch, IoIosMenu, IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useSearch } from '../page/components/SearchContext'; // Import the useSearch hook
import Projects from './components/Projects';
import Enjoy from './components/Enjoy';

const Career = () => {
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
        className="h-[500px] relative bg-cover bg-center text-white"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(141, 141, 231, 0.19), rgba(62, 62, 238, 0.6)), url(${Site})` }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>

        <main className="relative z-10">
          {/* Header */}
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
            <li
              className={`mt-[45px] text-2xl flex gap-6 lg:flex ${
                isMenuOpen ? 'flex bg-black' : 'hidden'
              } flex-col  lg:flex-row absolute lg:static top-24 left-0 bg-opacity-90 w-full lg:w-auto p-5 lg:p-0`}
            >
              {['Home', 'About', 'Services', 'Team', 'Projects', 'Blog', 'CSR', 'Careers', 'Contact'].map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.toLowerCase().replace(' ', '')}`}
                  className="hover:underline p-2 lg:p-0"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {item}
                </Link>
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
                  className="w-full lg:w-1/2 p-3 rounded-lg bg-white text-black focus:outline-none"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                {/* Display search results */}
                {searchResults.length > 0 && (
                  <div className="w-full lg:w-1/2 bg-white mt-5 rounded-lg shadow-lg max-h-[200px] overflow-y-auto">
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

        {/* Hero Text */}
        <h1 className='text-2xl lg:text-3xl mt-[150px] lg:mt-[200px] ml-[20px] lg:ml-[100px] font-bold'>
          Join Our Team
        </h1>
        <p className='w-[90%] lg:w-[800px] text-white ml-[20px] lg:ml-[100px] text-2xl mt-10'>
          We are always looking for talented individuals to join our team. If you are passionate about technology-driven project management and want to make a difference, we would love to hear from you.
        </p>
      </div>

      {/* Additional Components */}
      <Enjoy />
      <h1 className='text-black text-center text-xl italic md:text-2xl mt-[50px] md:mt-[100px] px-4 md:px-0 mb-20' >
        Check back later for opportunities that align with your skills
      </h1>
      <Projects />
    </div>
  );
};

export default Career;