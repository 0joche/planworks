import React from 'react';
import Slider from 'react-slick';
import projectImage1 from '../../images/more/hoe.jpeg';
import projectImage2 from '../../images/more/house.jpeg';
import projectImage3 from '../../images/more/hot.jpeg';
import projectImage4 from '../../images/more/home.jpeg';
import projectImage5 from '../../images/pipe.jpeg';
import projectImage6 from '../../images/planw.jpeg';
import projectImage7 from '../../images/worker.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Featured = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on smaller screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile screens
        },
      },
    ],
  };

  return (
    <div className='text-black border-t border-black'>
      <h1 className='text-3xl font-bold pt-20 ml-10'>Our Projects</h1>
      <Slider {...settings} className='mt-10'>
        <div className='p-2'>
          <Link to='/projects'>
            <div className='overflow-hidden rounded-lg shadow-lg'>
              <img
                src={projectImage1}
                alt='Project 1'
                className='w-full h-auto transform transition-transform duration-500 hover:scale-110'
              />
            </div>
          </Link>
        </div>
        <div className='p-2'>
          <Link to='/projects'>
            <div className='overflow-hidden rounded-lg shadow-lg'>
              <img
                src={projectImage2}
                alt='Project 2'
                className='w-full h-auto transform transition-transform duration-500 hover:scale-110'
              />
            </div>
          </Link>
        </div>
        <div className='p-2'>
          <Link to='/projects'>
            <div className='overflow-hidden rounded-lg shadow-lg'>
              <img
                src={projectImage3}
                alt='Project 3'
                className='w-full h-auto transform transition-transform duration-500 hover:scale-110'
              />
            </div>
          </Link>
        </div>
        <div className='p-2'>
          <Link to='/projects'>
            <div className='overflow-hidden rounded-lg shadow-lg'>
              <img
                src={projectImage4}
                alt='Project 4'
                className='w-full h-auto transform transition-transform duration-500 hover:scale-110'
              />
            </div>
          </Link>
        </div>
      </Slider>
      <h1 className='text-3xl text-black text-center mt-10'>
        Proposed Staff Camp for a Refinery Project
      </h1>
      <Slider {...settings} className='mt-10'>
        <div className='p-2'>
          <Link to='/projects'>
            <div className='overflow-hidden rounded-lg shadow-lg'>
              <img
                src={projectImage5}
                alt='Project 5'
                className='w-full h-auto transform transition-transform duration-500 hover:scale-110'
              />
            </div>
          </Link>
        </div>
        <div className='p-2'>
          <Link to='/projects'>
            <div className='overflow-hidden rounded-lg shadow-lg'>
              <img
                src={projectImage6}
                alt='Project 6'
                className='w-full h-auto transform transition-transform duration-500 hover:scale-110'
              />
            </div>
          </Link>
        </div>
        <div className='p-2'>
          <Link to='/projects'>
            <div className='overflow-hidden rounded-lg shadow-lg'>
              <img
                src={projectImage7}
                alt='Project 7'
                className='w-full h-auto transform transition-transform duration-500 hover:scale-110'
              />
            </div>
          </Link>
        </div>
      </Slider>
      <h1 className='text-3xl text-black text-center mt-10'>
        Planned & Monitored a Refinery Quick Fix Project
      </h1>
    </div>
  );
};

export default Featured;