import React from 'react';

const Featured = () => {
  return (
    <div className='bg-orange-500 text-white'>
      <h1 className='text-3xl font-bold pt-20 ml-10'>Featured Projects</h1>
      <h1 className='text-[200px] md:text-[100px] text-center'>COMING SOON</h1>
      <div className='bg-white w-full h-[50px] text-black text-center mx-auto mt-10 mb-10'>
        <h1 className='text-2xl text-black pt-20'>Let's build the future. Together</h1>
        <button className='text-4xl mt-10 border-[5px] border-black p-5 hover:bg-orange-500 hover:text-white hover:border-gray-500'>CONTACT US</button>
      </div>
    </div>
  );
};

export default Featured;