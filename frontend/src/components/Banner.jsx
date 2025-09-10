import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-row bg-blue-600 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
      <div>
       <p>Book Appointment</p>
       <p>With 100+ Trusted Doctor</p>
       <button> Create Account</button>
      </div>
      <div className='w-1/2'>
     <img src={assets.appointment_img}></img>
      </div>
    </div>
  )
}

export default Banner
