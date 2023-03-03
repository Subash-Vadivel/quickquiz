import React from 'react'
import { useState } from 'react';
import styleloginform from '../Admin_css/adminloginform.module.css'
export default function Adminforgetpassword(props) {
  const [email,setEmail]=useState('');
  const [opt,setOtp]=useState();
  const [verification,setVerification]=useState(true);
  const submit=()=>{
             setVerification(!verification);
  }
  return (
    <>
    {verification?
(
<div className={`Auth-form-container ${styleloginform.formWrapper}`}>
      <form className="Auth-form">
        <div className="Auth-form-content ">
          <h3 className="Auth-form-title">OTP</h3>
          <div className="form-group mt-3">
            <label>Enter OTP</label>
            <input
            value={opt}
              type="number"
               
             className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e)=>{setOtp(e.target.value)}}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={submit}>
              Reset
            </button>
          </div>
          
        </div>
      </form>
    </div>
    )
    :
(
<div className={`Auth-form-container ${styleloginform.formWrapper}`}>
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
            <button type="submit" className="btn btn-primary" onClick={submit}>
              Reset
            </button>
          </div>
          
        </div>
      </form>
    </div>
)
    }
    </>
  )
}
