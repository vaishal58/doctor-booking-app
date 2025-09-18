import React from 'react'
import {assets} from '../assets/assets'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
          <img className='w-full md:max-w-[360px]' src={assets.contact_image}></img>
          <div className='flex flex-col justify-center item-start gap-6'>
            <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
            <p className='text-gray-500'>23RD FLOOR WEST AVENUE <br></br>Suite 350 washington</p>
            <p className='text-gray-500'>Tel:(415) 555 0132 <br></br>abc@gmail.com</p>
            <p className='font-semibold text-lg text-gray-600'>Carrers </p>
            <p className='text-gray-500'>Lorem, ipsum dolor.</p>
            <button className='border border-black px-8 py-4'>Explore Jobs</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
