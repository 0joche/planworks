import React from 'react';
import Header from './Header';
import Cards from './components/Cards';
import Featured from './components/Featured';
import Projects from './components/Projects';

const Main = () => {
  return (
    <>
      <Header />
      <div className='bg-orange w-full h-300px mt-[100px]'>
        <div>
          <div>
            <h1 className='text-center text-3xl'>Our Services </h1>
            <p className='w-full md:w-[550px] text-center mx-auto mt-10 px-4 md:px-0'>
            PlanWorks is a leading Project Planning, Scheduling, Monitoring, and Management firm with a reputation for delivering technical excellence built on over 4 years of experience. Based in Abuja, we provide innovative project management solutions across all Nigerian states and Africa, ensuring seamless project execution from inception to completion.
            </p>
          </div>
        </div>
      </div>
      <Cards />
      <Featured />
      <Projects/>
    </>
  );
};

export default Main;