import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div>
        <div className='bg-white w-full h-[50px] text-black text-center mx-auto mt-[100px] mb-[300px]'>
        <h1 className='text-2xl text-black pt-20'>We Plan, Monitor & Deliver Success</h1>
        <button className='text-2xl mt-10 border-[2px] border-blue-300 p-5 hover:bg-orange-500 hover:text-white hover:border-gray-500'>
          <Link to="/contact">
            Contact Us
          </Link>
          </button>
      </div>
      <Footer/>
    </div>
  )
}

export default Projects
