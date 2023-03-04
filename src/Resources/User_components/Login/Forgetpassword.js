import React from 'react'
import '../../User_css/styles.css'
import { useState } from 'react'
import { OtpGeneration } from './OtpGeneration'
import { Resetpassword } from './Resetpassword'
import axiosPrivate from '../../../Api/axiosPrivate';
// import { Login } from './Login'
export function Forgetpassword() {

    const[email,setEmail]=useState("")
    const [valid,setValid]=useState(false);
    const notify=async(e)=>{
        e.preventDefault();
        await axiosPrivate.post('/accounts/forgot-password',{email:email}).then((res)=>{setValid(true)}).catch((err)=>{console.log(err)})

             
    }
  return (
    (valid===false)?
    <div className='right'>
        <div className='sublogin'>
          <i className='fas fa-user'></i>
          <h1>Reset Password</h1>
          <label>Email</label>
          <br />
          <input type="text" maxLength={40} value={email} required onChange={(e)=>{setEmail(e.target.value)}}/>
          <br />
          <button className='emailbutton' onClick={notify}>Verify</button>
        </div>
      </div> : <OtpGeneration value={email}/>
      
  )
}
