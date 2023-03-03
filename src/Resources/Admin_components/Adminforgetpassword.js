import React from 'react'
import { useState } from 'react';
import styleloginform from '../Admin_css/adminloginform.module.css'
export default function Adminforgetpassword(props) {
  const [email,setEmail]=useState('');
  const [otp,setOtp]=useState();
  const [verification,setVerification]=useState(false);
  const [successOTP,setsuccessOTP]=useState(false)
  const [NewPassword,SetNewPassword]=useState("")
  const [CNewPassword,CSetNewPassword]=useState("")
  const submitOTP=(e)=>{
             setVerification(!verification);
             e.preventDefault();
  }
  const submitEmail=(e)=>{
    setVerification(!verification);
    e.preventDefault();
}
const submitnewpassword=(e)=>{
  setVerification(!verification);
  e.preventDefault();
}
const output=()=> {
  if(verification)
    {
  
 return <div className={`Auth-form-container ${styleloginform.formWrapper}`}>
        <form className="Auth-form">
          <div className="Auth-form-content ">
            <h3 className="Auth-form-title">OTP</h3>
            <div className="form-group mt-3">
              <label>Enter OTP</label>
              <input
              value={otp}
                type="number"
               className="form-control mt-1"
                placeholder="Enter OTP"
                onChange={(e)=>{setOtp(e.target.value)}}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={submitOTP}>
                Submit
              </button>
            </div>
            
          </div>
        </form>
      </div>
    }
  else
  {
  return <div className={`Auth-form-container ${styleloginform.formWrapper}`}>
        <form className="Auth-form">
          <div className="Auth-form-content ">
            <h3 className="Auth-form-title">Forgot Password</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
              value={email}
                type="email"
  
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={submitEmail}>
                Sent OTP
              </button>
            </div>
            
          </div>
        </form>
      </div>
    }
  }

const resetform=()=>{
  return <div className={`Auth-form-container ${styleloginform.formWrapper}`}>
  <form className="Auth-form">
    <div className="Auth-form-content ">
      <h3 className="Auth-form-title">Reset Password</h3>
      <div className="form-group mt-3">
        <label>New Password</label>
        <input
        value={NewPassword}
          type="password"
          className="form-control mt-1"
          placeholder="Enter New Password"
          onChange={(e)=>{SetNewPassword(e.target.value)}}
        />
      </div>
      <div className="form-group mt-3">
        <label>Confirm NewPassword</label>
        <input
        value={CNewPassword}
          type="password"
          className="form-control mt-1"
          placeholder="Confirm New Password"
          onChange={(e)=>{CSetNewPassword(e.target.value)}}
        />
      </div>
      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-primary" onClick={submitnewpassword}>
          Reset
        </button>
      </div>
      
    </div>
  </form>
</div>
}


  return (
    <>
    {successOTP?(resetform()):output()}
    </>
  )
}
