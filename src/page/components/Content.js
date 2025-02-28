import React, {useState} from 'react'

const Content = () => {

  return (
    <div className='text-black p-10 flex flex-col mt-[100px] md:flex-row md:gap-10 ml-[300px] gap-20'>
        <div className='bg-white p-5 rounded-lg shadow-lg w-[900px] ml-[70px] md:ml-0 md:w-full md:max-w-[500px] md:mb-10'>
            <h1 className='text-2xl font-bold'>
                PlanWorks Company Limited was fully incorporated under the laws of the Federal Republic of Nigeria in the year 1989, with registration number RC 140577.
            </h1>

            <p className='text-2xl mt-[100px]'> We pride ourselves as being among the list of top construction companies in Nigeria.</p>

            <p className='mt-10 text-2xl'>We create and care for essential assets: hospitals, bridges, schools, roads, petrol stations and other major structures. We work in partnership with sophisticated customers who value the highest levels of quality, safety and technical expertise – applying our skills to meet their individual needs.</p>
        </div>
        <div className='bg-white p-5 rounded-lg shadow-lg w-[900px] ml-[250px] md:mt-10 md:ml-0 md:w-full md:max-w-[500px] ml-[100px]'>
            <p className='text-2xl -mt-10'>
            Our construction company has clear values, putting safety and the client first. It has a proven track record of effectively delivering diverse projects and services to a broad base of clients, such as the Government and Private Investors, with whom it works, handling projects either on a traditional contract basis or through full partnering agreements.
            </p>

            <p className='text-2xl mt-10'>
            The Dutum brand is built on experience and a strong heritage, yet it constantly strives to improve its performance. Its employees are key to its success, so it ensures they benefit from strong leadership and continuous training and development. Consequently, our customers benefit from working with the very best people — in all ramifications.
            </p>
        </div>
    </div>
  )
}

export default Content
