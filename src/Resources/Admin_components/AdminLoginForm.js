import React,{useState} from 'react'
import styleloginform from '../Admin_css/adminloginform.module.css'
export default function AdminLoginForm() {
    
  const [userid,setUserID]=useState();
  const [password,setPassword]=useState();
  return (
<div className={`Auth-form-container ${styleloginform.formWrapper}`}>
      <form className="Auth-form">
        <div className="Auth-form-content ">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
            value={userid}
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e)=>{setUserID(e.target.value)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
            value={password}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <span >password?</span>
          </p>
        </div>
      </form>
    </div>

  )
}
