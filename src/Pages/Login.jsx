import { useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Input from '../components/Input'
//import Button from '../components/Button'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})

  const onError = (errTxt, value) => {
    setError({ ...error, [errTxt]: value })
  }

  const validate = () => {
    if (!email) {
      onError('email', 'Email cannot be blank')
      return false
    }
    if (!password) {
      onError('password', 'Password cannot be blank')
      return false
    }
    return true
  }

  const onSubmit = () => {
    if (!validate()) return
    console.log(email, password)
  }

  return (
    <div className='login-container'>
      <div className='login'>
        <div className='wfms-container'>
          <div className='wfms'>
            <h1>WFMS</h1>
          </div>
        </div>
        <form className='form-control'>
          <h1>Login to continue</h1>
          <Input
            name='Email'
            type='email'
            placeholder='Enter your email'
            value={email}
            error={error.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name='Password'
            type='password'
            placeholder='Enter your password'
            password={true}
            value={password}
            error={error.password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='forgot-password'>
            <Link href='#'>Forgot Password?</Link>
          </div>

          <button type='submit' onClick={onSubmit}>
            Sign In
          </button>
          <div className='line'>
            <div className='lines'></div>
            <span>OR</span>
            <div className='lines'></div>
          </div>

          <div className='signup'>
            sign in with <span>google</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
