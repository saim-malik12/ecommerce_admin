import React from 'react'
import CustomInput from '../components/CustomInput'
import { Link } from 'react-router-dom'
const LogIn = () => {
  return (
    <div className='py-5' style={{background:"#ffd333",minHeight:"100vh"}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className=" my-5 bg-white rounded-3 mx-auto p-3" style={{width:"30%"}} >
        <h3 className='text-center title'>Log In</h3>
        <p className='text-center'>Login to your account to continue</p>
        <form action="">
        <CustomInput type="text" label="Email Addrress" id="email"/>
        <CustomInput type="password" label="Password" id="pass"/>
        <div className='mb-3 text-end'>
          <Link to="/forgot-password" className=''>Forgot Password</Link>
        </div>
        <Link to="/admin" className='border-0 px-3 py-2 text-white fw-bold text-center text-decoration-none fs-5 w-100' type='submit' style={{background:"#ffd333"}}>Login</Link>
        </form>
      </div>
      
    </div>
  )
}

export default LogIn
