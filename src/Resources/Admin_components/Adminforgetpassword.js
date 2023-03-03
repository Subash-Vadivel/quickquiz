import React from 'react'
import { useState } from 'react';
import styleloginform from '../Admin_css/adminloginform.module.css'
export default function Adminforgetpassword() {
  const [email,setEmail]=useState('');
  return (
<div className={`Auth-form-container ${styleloginform.formWrapper}`}>
      <form className="Auth-form">
        <div className="Auth-form-content ">
          <h3 className="Auth-form-title">Forget Password</h3>
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
            <button type="submit" className="btn btn-primary">
              Reset
            </button>
          </div>
          
        </div>
      </form>
    </div>
  )
}
