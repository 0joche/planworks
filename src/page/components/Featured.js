import React from 'react';
import Slider from 'react-slick';
import projectImage1 from '../../images/more/hoe.jpeg';
import projectImage2 from '../../images/more/house.jpeg';
import projectImage3 from '../../images/more/hot.jpeg';
import projectImage4 from '../../images/more/home.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Featured = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='text-black border-t border-black'>
      <h1 className='text-3xl font-bold pt-20 ml-10'>Featured Projects</h1>
      <Slider {...settings} className='mt-10'>
        <div className='p-2'>
          <div className='overflow-hidden rounded-lg shadow-lg'>
            <img
              src={projectImage1}
              alt='Project 1'
              className='w-full h-auto transform transition-transform duration-500 hover:scale-110'
            />
          </div>
        </div>
        <div className='p-2'>
          <div className='overflow-hidden rounded-lg shadow-lg'>
            <img
              src={projectImage2}
              alt='Project 2'
              className='w-full h-auto transform transition-transform duration-500 hover:scale-110'
            />
          </div>
        </div>
        <div className='p-2'>
          <div className='overflow-hidden rounded-lg shadow-lg'>
            <img
              src={projectImage3}
              alt='Project 3'
              className='w-full h-auto transform transition-transform duration-500 hover:scale-110'
            />
          </div>
        </div>
        <div className='p-2'>
          <div className='overflow-hidden rounded-lg shadow-lg'>
            <img
              src={projectImage4}
              alt='Project 4'
              className='w-full h-auto transform transition-transform duration-500 hover:scale-110'
            />
          </div>
        </div>
      </Slider>
      <h1 className='text-3xl text-black text-center mt-10'>Project Title: KADUNA REFINERY QUICK FIX PROJECT, PROPOSED STAFF CAMP</h1>
    </div>
  );
};

export default Featured;