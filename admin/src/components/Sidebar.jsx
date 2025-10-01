import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
   const {aToken}=useContext(AdminContext)
    return (
    <div>
       {
         aToken && <ul>
            <NavLink to={'/admin-dashboard'}>
                <img src={assets.home_icon} alt=""></img>
                <p>Dashboard</p>
            </NavLink>

            <NavLink to={'/all-appointments'}>
                <img src={assets.appointment_icon} alt=""></img>
                <p>Appointments</p>
            </NavLink>

            <NavLink to={'/add-doctor'}>
                <img src={assets.add_icon} alt=""></img>
                <p>Add Doctor</p>
            </NavLink>

            <NavLink to={'/doctor-list'}>
                <img src={assets.people_icon} alt=""></img>
                <p>Doctor List</p>
            </NavLink>
         </ul>
       }
    </div>
  )
}

export default Sidebar
