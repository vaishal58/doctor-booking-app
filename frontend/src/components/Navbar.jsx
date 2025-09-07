import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  const [showMenu,setshowMenu]=useState(false);
  const [token,setToken]=useState(true)

    return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt=""></img>
      <ul className='hidden md:flex item-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-primary bg-blue-500 w-3/5 m-auto hidden'></hr>
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-primary bg-blue-500 w-3/5 m-auto hidden'></hr>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-primary bg-blue-500 w-3/5 m-auto hidden'></hr>
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden'></hr>
        </NavLink>
      </ul>

      <div className='flex item-center gap-4'>
        {
            token 
            ? 
            <div className="flex items-center gap-2 cursor-pointer group relative">
  <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
  <img className="w-2.5" src={assets.dropdown_icon} alt="" />

  
  <div className="absolute top-0 right-0 pt-14 text-base font-small text-gray-400 z-20 hidden group-hover:block">
    <p className="px-4 py-2 hover:bg-gray-100">My Profile</p>
    <p className="px-4 py-2 hover:bg-gray-100">My Appointment</p>
    <p className="px-4 py-2 hover:bg-gray-100">Logout</p>
  </div>
</div>

             
            : <button onClick={()=>navigate('/login')} className='bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
            
        }
        
      </div>
    </div>
  )
}

export default Navbar
