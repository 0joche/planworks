import React from 'react';
import { MdManageAccounts, MdTrackChanges } from 'react-icons/md';
import { LiaTelegramPlane } from "react-icons/lia";
import { BiAnalyse } from "react-icons/bi";
import { AiOutlineControl } from "react-icons/ai";

const Cards = () => {
  const cardData = [
    {
      icon: <LiaTelegramPlane className='text-5xl mb-6'/>,
      title: "Project Planning & Scheduling",
      description: "We develop comprehensive project schedules using Primavera P6 and MS Project, ensuring optimized workflows, realistic timelines, and effective resource allocation for procurement, construction, engineering, and infrastructure projects, minimizing delays and maximizing efficiency."
    },
    {
      icon: <MdTrackChanges className='text-5xl mb-6'/>,
      title: "Project Tracking & Monitoring",
      description: "We employ cutting-edge software and data analytics to track key performance indicators, monitor deliverables, and ensure that projects stay on course, minimizing deviations and maximizing efficiency throughout the project lifecycle."
    },
    {
      icon: <BiAnalyse className='text-5xl mb-6' />,
      title: "Delay Analysis & EOT Claims",
      description: "We provide specialized delay analysis, forensic scheduling, and Extension of Time (EOT) claims to help clients mitigate contractual risks, resolve disputes, and ensure fair compensations for project disruptions."
    },
    {
      icon: <AiOutlineControl className='text-5xl mb-6'/>,
      title: "Project Controls & Reporting",
      description: "Our data-driven project control solutions focus on cost management, earned value analysis (EVA), and performance reporting, providing actionable insights that drive informed decision-making for project stakeholders."
    },
    {
      icon: <MdManageAccounts className='text-5xl mb-6' />,
      title: "Risk & Resource Management",
      description: "We offer comprehensive risk assessment and resource optimization strategies, ensuring efficient workforce allocation, proactive risk mitigation, and seamless execution of projects in high-risk environments like oil & gas and construction."
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