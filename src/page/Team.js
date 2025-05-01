import React, { useState } from 'react';
import Site from '../images/teams.jpeg';
import Logo from '../images/logo.jpeg';
import { IoIosSearch, IoIosMenu, IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useSearch } from '../page/components/SearchContext';
import Projects from './components/Projects';

const Team = () => {
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
        style={{ backgroundImage: `linear-gradient(to bottom,rgba(114, 114, 223, 0.7), rgba(0, 0, 139, 0.9)), url(${Site})` }}
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

        <h1 className='text-3xl text-white mt-[200px] ml-[20px] lg:ml-[100px] font-bold'>Our Team</h1>
        <p className='w-[600px] text-white ml-[20px] lg:ml-[100px]'>
          The PlanWorks team comprises seasoned professionals from diverse disciplines, united by a shared commitment to delivering projects with precision, efficiency, and excellence.
        </p>
      </div>
      
      <div className='mt-10 p-5'>
        <div className='bg-white rounded-lg border border-gray-100 shadow-md p-8'>
          <p className='mb-5 text-xl leading-relaxed text-black'>
            At PlanWorks Consulting Services Ltd, our team is the driving force behind every successful project we deliver.
          </p>
          <p className='mb-5 text-xl leading-relaxed text-black'>
            Comprising seasoned professionals with diverse backgrounds in Oil & Gas, Construction, Real Estate, and Government infrastructure, our experts bring years of combined experience in project planning, scheduling, monitoring, and control.
          </p>
          <p className='mb-5 text-xl leading-relaxed text-black'>
            We are planners, engineers, analysts, and strategists united by a shared commitment to precision, innovation, and results.
          </p>
          <p className='mb-5 text-xl leading-relaxed text-black'>
            Each member of our team is handpicked not just for technical expertise, but for a proactive mindset and a passion for helping clients meet critical project milestones on time and within budget.
          </p>
          <p className='mb-5 text-xl leading-relaxed text-black'>
            At PlanWorks, we don't just manage projects, we build trust, foster collaboration, and deliver success.
          </p>
        </div>
      </div>

      <Projects />
    </div>
  );
};

export default Team;
