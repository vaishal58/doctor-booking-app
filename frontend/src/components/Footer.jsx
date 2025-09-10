import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img className='mb-5 w-40' src={assets.logo} alt=""></img>
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse nobis repellat placeat voluptatum enim, aspernatur reiciendis, excepturi id tempore odit illum commodi voluptate suscipit.</p>
      </div>

      <div>
    <p className='text-xl font-medium mb-5'>COMPANY</p>
    <ul className='flex flex-col gap-2 text-gray-600'>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
    </ul>
      </div>

      <div>
      <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
      <ul className='flex flex-col gap-2 text-gray-600'>
        <li>+1 243-490-3994</li>
        <li>pre@gmail.com</li>
      </ul>
      </div>
      </div>
       <div >
        <hr />
        <p className='py-5 text-sm text-center '>CopyRight 2025 @prescripto-all right reserved</p>
       </div>
    

    </div>
  )
}

export default Footer
