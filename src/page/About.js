import React, { useState } from 'react';
import Logo from '../images/logo.jpeg';
import Site from '../images/site.jpg';

import { Link } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import Content from './components/Content';
import Value from './components/Value';
import Footer from './components/Footer';

const About = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible); // Toggle popup visibility
  };

  return (
    <div className='text-white'>
      {/* Header with Background Image */}
      <div
        className="h-[400px] relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${Site})` }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <main className="relative z-10">
          <ul className="ml-20 flex flex-row">
            <li className="flex flex-row items-center">
              <img
                src={Logo}
                alt="PlanWorks"
                className="w-[50px] h-[50px] mt-10 mr-5 rounded-3xl"
              />
              <span className="text-3xl text-white mt-7">Planworks</span>
            </li>

            <li className="mt-[45px] ml-20 text-2xl flex flex-row gap-6 text-white">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/about" className="hover:underline">
                About
              </Link>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
              <Link to="/team" className="hover:underline">
                Our Team
              </Link>
              <Link to="/projects" className="hover:underline">
                Projects
              </Link>
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
              <Link to="/csr" className="hover:underline">
                CSR
              </Link>
              <Link to="/careers" className="hover:underline">
                Careers
              </Link>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>

            <li
              className="ml-[150px] mt-[45px] text-white cursor-pointer"
              onClick={togglePopup}
            >
              <IoIosSearch className="text-3xl ml-20" />
            </li>
          </ul>

          {/* Search Popup */}
          <div
            className={`fixed top-0 left-0 w-full bg-black bg-opacity-90 transition-transform duration-500 ease-in-out ${
              isPopupVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            <div className="container mx-auto p-5 flex justify-center items-center h-[200px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-1/2 p-3 rounded-lg bg-white text-black focus:outline-none"
              />
              <button
                className="ml-4 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={togglePopup}
              >
                Close
              </button>
            </div>
          </div>
        </main>
        <h1 className='text-3xl text-white mt-[200px] ml-[100px]'>About</h1>
      </div>
      <Content />
      <Value/>
      <div className='bg-white w-full h-[50px] text-black text-center mx-auto mt-10 mb-10'>
        <h1 className='text-2xl text-black pt-20'>Let's build the future. Together</h1>
        <button className='text-4xl mt-10 border-[5px] border-black p-5 hover:bg-orange-500 hover:text-white hover:border-gray-500'>CONTACT US</button>
      </div>
      <Footer/>
    </div>
  );
};

export default About;