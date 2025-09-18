import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div >
       <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>US</span></p>
       </div>

       <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image}></img>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque itaque nostrum corrupti dolor et provident blanditiis labore totam esse a?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla ea tenetur. Rem consectetur cum eos aut quasi. Libero, aspernatur?</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati cum deleniti. Libero, qui blanditiis aperiam vero quae repellendus expedita.</p>
        </div>
       </div>

       <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
       </div>
       <div className='flex flex-col md:flex-row mb:20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-4 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer'>
         <b>Efficiency:</b>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-4 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer'>
          <b>Convience:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, itaque.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-4 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer'>
           <b>Personalization:</b>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam.</p>
        </div>
       </div>
    </div>
  )
}

export default About
