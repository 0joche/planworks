import React from 'react';

const Enjoy = () => {
  return (
    <div className='flex flex-col items-center text-center md:flex-row md:text-left md:justify-center md:ml-[200px] text-black gap-[150px]'>
      {/* First Section */}
      <div className='mt-20 w-full md:w-[600px] px-4 md:px-0 -ml-[100px]'>
        <div className="border-b border-gray-200 pb-8 shadow-sm">
          <h1 className='text-3xl font-bold'>Explore the Possibilities</h1>
          <p className='text-xl md:text-2xl mt-6 md:mt-10'>
            Our workplace culture embodies excellence, collaboration, and a strong commitment to innovation in project planning, scheduling, monitoring, and management. We prioritize our people by cultivating an environment that recognizes talent, integrity, and dedication. As a result, we seek individuals who uphold these values and consistently demonstrate them in delivering efficient and impactful project solutions.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className='mt-20 w-full md:w-[600px] md:ml-[100px] px-4 md:px-0'>
        <div className="border-b border-gray-200 pb-8 shadow-sm">
          <h1 className='text-3xl font-bold'>Join Our Team</h1>
          <p className='text-xl md:text-2xl mt-6 md:mt-10'>
            We foster an inclusive culture with an open management approach, prioritizing the recruitment of skilled professionals to build a high-performance project planning, scheduling, monitoring, and management organization. Our commitment to employee development is reflected in our comprehensive training programs and career advancement initiatives. We cultivate a positive work environment that promotes seamless communication, productivity, growth opportunities, and strategic thinking—empowering our team to deliver excellence in project execution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Enjoy;
