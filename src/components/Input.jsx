/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FaSignInAlt, FaUserCircle, FaLock } from 'react-icons/fa'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

function Input({
  name,
  type,
  placeholder,
  password,
  error,
  // eslint-disable-next-line no-unused-vars
  onFocus = () => {},
  ...props
}) {
  const [show, setShow] = useState(false)
  const [focus, setFocus] = useState(false)

  return (
    <div className='input-container'>
      <div className='input'>
        {name === 'Email' ? (
          <FaUserCircle className='icon' size={20} />
        ) : name === 'Password' ? (
          <FaLock className='icon' size={20} />
        ) : (
          <FaSignInAlt className='icon' />
        )}
        <input
          {...props}
          type={password ? (show ? 'text' : 'password') : type}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {password && (
          <div className='show' onClick={() => setShow(!show)}>
            {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        )}
        {focus && <div className='focus' />}
      </div>
      {error && <div className='error'>{error}</div>}
    </div>
  )
}

export default Input
