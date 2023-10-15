import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='logo'>
        <h1>WFMS</h1>
      </Link>
      <div className='links'>
        <Link to='/login' className='link-item'>
          <FaSignInAlt /> Login
        </Link>

        <Link to='/' className='link-item'>
          <FaSignOutAlt /> Logout
        </Link>
      </div>
    </div>
  )
}

export default Header
