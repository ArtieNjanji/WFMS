import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

import 'react-toastify/dist/ReactToastify.css'

import { auth, provider } from '../config/firebase'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

//import Header from '../components/Header'
import Input from '../components/Input'
//import Button from '../components/Button'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})

  const navigate = useNavigate()

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

  const onSubmit = async () => {
    if (!validate()) return
    console.log(email, password)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }
  const singInWithG = async () => {
    try {
      await signInWithPopup(auth, provider)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='login-container'>
      <div className='login'>
        <div className='wfms-container'>
          <div className='wfms'>
            <h1>WFMS</h1>
          </div>
        </div>
        <div className='form-control'>
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

          <Link to='' className='forgot-password'>
            Forgot Password?
          </Link>

          <button onClick={onSubmit}>Sign In</button>
          <div className='line'>
            <div className='lines'></div>
            <span>OR</span>
            <div className='lines'></div>
          </div>

          <Link className='signup' onClick={singInWithG}>
            <FcGoogle size={30} /> Sign in with google
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
