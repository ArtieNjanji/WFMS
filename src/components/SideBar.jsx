import { useState } from 'react'

import { NavLink } from 'react-router-dom'
import { MdDashboard, MdOutlineSettings, MdBuild } from 'react-icons/md'
import { FaSignOutAlt, FaTools, FaTractor } from 'react-icons/fa'
import { BsCashCoin } from 'react-icons/bs'
import { GiCow } from 'react-icons/Gi'
import { BiCrop } from 'react-icons/Bi'
import { RiFileList3Line } from 'react-icons/Ri'
import { AiOutlineDashboard } from 'react-icons/Ai'

function SideBar() {
  return (
    <>
      <div className='sideBar'>
        <NavLink to='/' className='sidebar-items'>
          <MdDashboard /> Home
        </NavLink>
        <NavLink to='/settings' className='sidebar-items'>
          <MdOutlineSettings /> Settings
        </NavLink>
        <NavLink to='/tools' className='sidebar-items'>
          <FaTools /> Farm Tools
        </NavLink>
        <NavLink to='/vehicles' className='sidebar-items'>
          <FaTractor /> Vehicles
        </NavLink>
        <NavLink to='/operations' className='sidebar-items'>
          <MdBuild /> Operations
        </NavLink>
        <NavLink to='/reports' className='sidebar-items'>
          <RiFileList3Line /> Reports
        </NavLink>
        <NavLink to='/crop-monitoring' className='sidebar-items'>
          <BiCrop /> Crop Management
        </NavLink>
        <NavLink to='/livestock' className='sidebar-items'>
          <GiCow /> Livestock
        </NavLink>
        <NavLink to='/financial-management' className='sidebar-items'>
          <BsCashCoin /> Finance
        </NavLink>
        <NavLink to='/login' className='sidebar-items'>
          <FaSignOutAlt /> Logout
        </NavLink>
      </div>
    </>
  )
}

export default SideBar
