import React from 'react';
import Header from './Header';
import Cards from './components/Cards';
import Featured from './components/Featured';
import Footer from './components/Footer';

const Main = () => {
  return (
    <>
      <Header />
      <div className='bg-orange w-full h-300px mt-[100px]'>
        <div>
          <div>
            <h1 className='text-center text-3xl'>Our Business Units</h1>
            <p className='w-full md:w-[550px] text-center mx-auto mt-10 px-4 md:px-0'>
              Dutum is a world-class engineering and construction company with a reputation for technical excellence founded on more than 20 years of experience. We are a construction company in Lagos operating across all Nigeria States and Africa.
            </p>
          </div>
        </div>
      </div>
      <Cards />
      <Featured />
      <Footer/>
    </>
  );
};

export default Main;