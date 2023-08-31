import React from 'react'
import CustomInput from '../components/CustomInput'

const ForgotPassword = () => {
  return (
    <div className='py-5' style={{background:"#ffd333",minHeight:"100vh"}}>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className=" my-5 bg-white rounded-3 mx-auto p-3" style={{width:"30%"}} >
      <h3 className='text-center title'>Forgot Password</h3>
      <p className='text-center'>Please Enter Your Register Email To Reset Mail</p>
      <form action="">
      <CustomInput type="text" label="Email Addrress" id="email"/>
      
      <button className='border-0 px-3 py-2 text-white fw-bold w-100' type='submit' style={{background:"#ffd333"}}>Send Link</button>
      </form>
    </div>
    
  </div>
  )
}

export default ForgotPassword
