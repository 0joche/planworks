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
          We create and care for essential assets: hospitals, bridges, schools, roads, petrol stations, and other major structures. We work in partnership with sophisticated customers who value the highest levels of quality, safety, and technical expertise – applying our skills to meet their individual needs.
        </p>
      </div>

      {/* Second Card */}
      <div className='bg-white p-5 rounded-lg shadow-lg w-full md:w-[45%] lg:w-[40%] xl:w-[35%] mx-auto'>
        <p className='text-xl md:text-2xl'>
          Our construction company has clear values, putting safety and the client first. It has a proven track record of effectively delivering diverse projects and services to a broad base of clients, such as the Government and Private Investors, with whom it works, handling projects either on a traditional contract basis or through full partnering agreements.
        </p>

        <p className='text-xl md:text-2xl mt-10'>
          The PlanWorks brand is built on experience and a strong heritage, yet it constantly strives to improve its performance. Its employees are key to its success, so it ensures they benefit from strong leadership and continuous training and development. Consequently, our customers benefit from working with the very best people — in all ramifications.
        </p>
      </div>
    </div>
  );
};

export default Content;