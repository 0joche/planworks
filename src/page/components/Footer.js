import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className='flex flex-col md:flex-row justify-between items-center border-t-[5px] text-white mt-[300px] bg-orange-500 border-gray-500 py-10 px-5  md:px-20'>
      {/* Copyright Text */}
      <p className='text-lg mb-5 md:mb-0'>
        &copy; {currentYear} PlanWorks Company. All rights reserved.
      </p>

      {/* Social Icons */}
      <div className='flex justify-center gap-6'>
        <a
          href='https://www.instagram.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white hover:text-gray-300 transition-colors duration-300'
        >
          <FaInstagram className='w-8 h-8' />
        </a>
        <a
          href='https://www.facebook.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white hover:text-gray-300 transition-colors duration-300'
        >
          <FaFacebook className='w-8 h-8' />
        </a>
        <a
          href='https://www.twitter.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white hover:text-gray-300 transition-colors duration-300'
        >
          <FaTwitter className='w-8 h-8' />
        </a>
        <a
          href='https://www.whatsapp.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white hover:text-gray-300 transition-colors duration-300'
        >
          <FaWhatsapp className='w-8 h-8' />
        </a>
      </div>
    </div>
  );
};

export default Footer;