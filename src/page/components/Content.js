import React from 'react';

const Content = () => {
  return (
    <div className='text-black p-5 md:p-10 flex flex-col mt-[50px] md:mt-[100px] md:flex-row md:gap-10 gap-10'>
      {/* First Card */}
      <div className='bg-white p-5 rounded-lg shadow-lg w-full md:w-[45%] lg:w-[40%] xl:w-[35%] mx-auto'>
        <h1 className='text-xl md:text-2xl font-bold'>
          PlanWorks Consulting Services Limited was fully incorporated under the laws of the Federal Republic of Nigeria in the year 2025, with registration number RC 8232651.
        </h1>

        <p className='text-xl md:text-2xl mt-10'>
          We pride ourselves as being among the list of top projecct management companies in Nigeria.
        </p>

        <p className='mt-10 text-xl md:text-2xl'>
        Planworks Consulting Services Limited is a leading project management and consulting firm dedicated to delivering excellence in the planning, execution, and monitoring of complex projects across construction, engineering, and infrastructure sectors. With a strong commitment to innovation and precision, we empower both public and private sector clients to achieve their project goals efficiently and effectively.
        </p>
      </div>

      {/* Second Card */}
      <div className='bg-white p-5 rounded-lg shadow-lg w-full md:w-[45%] lg:w-[40%] xl:w-[35%] mx-auto'>
        <p className='text-xl md:text-2xl'>
        Our expertise spans across project planning & scheduling, delay analysis & EOT claims, project controls & reporting, risk and resource management, and regulatory compliance consulting. Leveraging cutting-edge tools and technologies such as Primavera P6, Microsoft Project, Artificial Intelligence and Power BI, we provide tailored solutions that ensure projects are delivered on time, within budget, and to the highest quality standards.
        </p>

        <p className='text-xl md:text-2xl mt-10'>
        Our mission is to redefine project management by combining technical expertise with a client-centric approach, fostering long-term partnerships built on trust, transparency, and exceptional results. At Planworks Consulting Services Limited, we don’t just manage projects, we deliver success..
        </p>
      </div>
    </div>
  );
};

export default Content;