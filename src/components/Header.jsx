import { Link, useNavigate } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'

import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'

const Header = () => {
  const navigate = useNavigate()

  const logout = async () => {
    try {
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='header'>
      <Link to='/' className='logo'>
        <h1>WFMS</h1>
      </Link>
      <div className='links'>
        <Link to='/login' className='link-item'>
          <FaSignInAlt /> Login
        </Link>

        <Link to='/' className='link-item' onClick={logout}>
          <FaSignOutAlt /> Logout
        </Link>
      </div>
    </div>
  )
}

export default Header
