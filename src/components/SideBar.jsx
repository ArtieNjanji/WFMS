import { NavLink } from 'react-router-dom'
import { MdDashboard, MdOutlineSettings, MdBuild } from 'react-icons/md'
import { FaSignOutAlt, FaTools, FaTractor } from 'react-icons/fa'
import { BsCashCoin } from 'react-icons/bs'
import { GiCow } from 'react-icons/Gi'
import { BiCrop } from 'react-icons/Bi'
import { RiFileList3Line } from 'react-icons/Ri'

import { useSelector, useDispatch } from 'react-redux'
import { selectStockMan } from '../features/stockSlice'
import { toggleVisible } from '../features/stockSlice'

function SideBar() {
  const dispatch = useDispatch()

  const { stock, visible } = useSelector(selectStockMan)

  const onClickSTM = () => {
    dispatch(toggleVisible())
  }
  console.log(visible)
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
        <div>
          <NavLink
            to='/stock-management'
            className='sidebar-items'
            onClick={onClickSTM}
          >
            <MdBuild /> Stock Management
          </NavLink>
          {visible && (
            <div className='sub-menu'>
              {stock.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    to={`/stock-management/${item.toLowerCase()}`}
                    className='sub-menu-items'
                  >
                    {item}
                  </NavLink>
                )
              })}
            </div>
          )}
        </div>
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
