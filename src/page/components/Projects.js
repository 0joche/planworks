import React from 'react'
import Footer from './Footer'

const Projects = () => {
  return (
    <div>
        <h1 className='text-black text-center text-3xl mt-[100px]'>Check back later for opportunities that aligns with your skills</h1>
        <div className='bg-white w-full h-[50px] text-black text-center mx-auto mt-10 mb-10'>
        <h1 className='text-2xl text-black pt-20'>Let's build the future. Together</h1>
        <button className='text-4xl mt-10 border-[5px] border-black p-5 hover:bg-orange-500 hover:text-white hover:border-gray-500'>CONTACT US</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Projects