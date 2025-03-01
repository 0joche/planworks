import React, { useState, useEffect } from 'react';
import Logo from '../images/logo.jpeg';
import { Link } from 'react-router-dom';
import { IoIosSearch, IoIosMenu, IoIosClose } from 'react-icons/io';
import { useSearch } from '../../src/page/components/SearchContext'; // Import the useSearch hook

// Import images directly
import planImage from '../images/plan.jpg';
import engineImage from '../images/engine.jpg';
import siteImage from '../images/site.jpg';

const images = [planImage, engineImage, siteImage];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage hamburger menu visibility

  // Use the global search context
  const {
    isPopupVisible,
    togglePopup,
    searchQuery,
    searchResults,
    handleSearchInputChange,
    highlightText,
  } = useSearch();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle hamburger menu visibility
  };

  return (
    <div className='relative w-full h-[1000px] overflow-hidden'>
      {/* Background Slideshow */}
      <div className='absolute top-0 left-0 w-full h-full z-0'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 255, 0.6), rgba(0, 0, 139, 0.7)), url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Black overlay (optional, if you still want it) */}
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
          </div>
        ))}
      </div>

      <main className='relative z-10'>
        <ul className='ml-20 flex flex-row items-center justify-between'>
          <li className='flex flex-row items-center'>
            <img src={Logo} alt='PlanWorks' className='w-[50px] h-[50px] mt-10 mr-5 rounded-3xl' />
            <span className='text-3xl text-white mt-7'>Planworks</span>
          </li>

          {/* Hamburger Icon */}
          <li className='mt-[45px] mr-20 text-2xl text-white cursor-pointer lg:hidden' onClick={toggleMenu}>
            {isMenuOpen ? <IoIosClose className='text-3xl' /> : <IoIosMenu className='text-3xl' />}
          </li>

          {/* Navigation Links */}
          <li className={`mt-[45px] ml-20 text-2xl flex flex-row gap-6 text-white lg:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row absolute lg:static top-24 left-0 bg-opacity-90 w-full lg:w-auto p-5 lg:p-0`}>
            <Link to="/" className='hover:underline p-2 lg:p-0'>Home</Link>
            <Link to="/about" className='hover:underline p-2 lg:p-0'>About</Link>
            <Link to="/services" className='hover:underline p-2 lg:p-0'>Services</Link>
            <Link to="/team" className='hover:underline p-2 lg:p-0'>Our Team</Link>
            <Link to="/projects" className='hover:underline p-2 lg:p-0'>Projects</Link>
            <Link to="/blog" className='hover:underline p-2 lg:p-0'>Blog</Link>
            <Link to="/csr" className='hover:underline p-2 lg:p-0'>CSR</Link>
            <Link to="/careers" className='hover:underline p-2 lg:p-0'>Careers</Link>
            <Link to="/contact" className='hover:underline p-2 lg:p-0'>Contact</Link>
          </li>

          {/* Search Icon */}
          <li className='ml-[150px] mt-[45px] text-white cursor-pointer lg:block hidden' onClick={togglePopup}>
            <IoIosSearch className='text-3xl ml-20'/>
          </li>
        </ul>

        {/* Search Popup */}
        <div
          className={`fixed top-0 left-0 w-full bg-black bg-opacity-90 transition-transform duration-500 ease-in-out ${
            isPopupVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className='container mx-auto p-5 flex flex-col justify-center items-center h-[300px]'>
            <input
              type="text"
              placeholder="Search..."
              className='w-1/2 p-3 rounded-lg bg-white text-black focus:outline-none'
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            {/* Display search results */}
            {searchResults.length > 0 && (
              <div className='w-1/2 bg-white mt-5 rounded-lg shadow-lg max-h-[200px] overflow-y-auto'>
                {searchResults.map((result) => (
                  <Link
                    key={result.id}
                    to={result.link}
                    className='block p-3 hover:bg-gray-100 text-black'
                    onClick={togglePopup}
                  >
                    <div className='font-bold'>{highlightText(result.title, searchQuery)}</div>
                    <div className='text-sm'>{highlightText(result.description, searchQuery)}</div>
                  </Link>
                ))}
              </div>
            )}
            <button
              className='mt-5 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;