import React, { useState } from 'react';
import Site from '../images/site.jpg';
import Logo from '../images/logo.jpeg';
import { IoIosSearch, IoIosMenu, IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Projects from './components/Projects';

const Csr = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='text-black'>
      <div className="h-[400px] relative bg-cover bg-center text-white" style={{ backgroundImage: `url(${Site})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <main className="relative z-10">
          <ul className="ml-5 lg:ml-20 flex items-center justify-between">
            <li className="flex items-center">
              <img src={Logo} alt="PlanWorks" className="w-[50px] h-[50px] mt-10 mr-5 rounded-3xl" />
              <span className="text-3xl text-white mt-7">Planworks</span>
            </li>

            <li className="mt-[45px] mr-5 lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? <IoIosClose className="text-3xl" /> : <IoIosMenu className="text-3xl" />}
            </li>

            <li className={`mt-[45px] text-2xl flex gap-6 lg:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row absolute lg:static top-24 left-0 bg-black bg-opacity-90 w-full lg:w-auto p-5 lg:p-0`}>
              {['Home', 'About', 'Services', 'Our Team', 'Projects', 'Blog', 'CSR', 'Careers', 'Contact'].map((item, index) => (
                <Link key={index} to={`/${item.toLowerCase().replace(' ', '')}`} className="hover:underline p-2 lg:p-0">{item}</Link>
              ))}
            </li>

            <li className="ml-[150px] mt-[45px] cursor-pointer lg:block hidden" onClick={togglePopup}>
              <IoIosSearch className="text-3xl ml-20" />
            </li>
          </ul>

          {isPopupVisible && (
            <div className="fixed top-0 left-0 w-full bg-black bg-opacity-90 transition-transform duration-500 ease-in-out">
              <div className="container mx-auto p-5 flex justify-center items-center h-[200px]">
                <input type="text" placeholder="Search..." className="w-1/2 p-3 rounded-lg bg-white text-black focus:outline-none" />
                <button className="ml-4 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={togglePopup}>Close</button>
              </div>
            </div>
          )}
        </main>

        <h1 className='text-3xl mt-[200px] ml-[20px] lg:ml-[100px]'>CSR</h1>
      </div>
      <div className='mt-10 p-5 text-black'>
        <h1 className='text-2xl mb-5'>Our Responsibility</h1>
        <p className='mb-5'>As part of the CSR of a construction company, we understand that our work and business decisions have an impact not only on our organization and stakeholders but also on the communities that support our daily lives and livelihoods.</p>
        <p>As a result, we have endeavored to operate in ways that contribute to society and the environment, notably (but not exclusively) in the following areas:</p>
        <ul className='list-disc list-inside mt-5'>
          <li>Community Development Projects</li>
          <li>Environmental Sustainability</li>
          <li>Education and Training Programs</li>
          <li>Health and Safety Initiatives</li>
          <li>Youth Empowerment</li>
        </ul>
      </div>
      <Projects/>
    </div>
  );
};

export default Csr;
