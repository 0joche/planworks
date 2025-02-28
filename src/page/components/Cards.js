import React from 'react';
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { PiCylinderBold } from "react-icons/pi";
import { IoMdKey } from "react-icons/io";
import { GiMoebiusTriangle } from "react-icons/gi";

const Cards = () => {
  const cardData = [
    {
      icon: <HiOutlineCog8Tooth className='text-5xl mb-6' />,
      title: "Civil Engineering",
      description: "Design, construction, and maintenance of the physical and naturally built environment such as roads, bridges, airport hangars, sewerage systems, pipelines, etc."
    },
    {
      icon: <PiCylinderBold className='text-5xl mb-6' />,
      title: "Building Construction",
      description: "Addition of structure to real property, taking into account construction costs, expected lifetime of a project, government regulations as well as potential hazards."
    },
    {
      icon: <IoMdKey className='text-5xl mb-6' />,
      title: "Real Estate",
      description: "Building real estate in rural and urban Nigeria including acreage, small town and country homes, recreational cabins, retirement property, waterfront properties etc."
    },
    {
      icon: <GiMoebiusTriangle className='text-5xl mb-6' />,
      title: "Facility Management",
      description: "Management to ensure functionality, comfort, safety and efficiency of the built environment by integrating people, place, process and technology across the board."
    }
  ];

  return (
    <div className='flex flex-wrap justify-center gap-8 p-8'>
      {cardData.map((card, index) => (
        <div
          key={index}
          className='w-[300px] text-center p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-lg transition-all duration-300'
        >
          <div className='flex justify-center'>{card.icon}</div>
          <h1 className='font-bold text-2xl mb-4'>{card.title}</h1>
          <p className='text-gray-600'>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;