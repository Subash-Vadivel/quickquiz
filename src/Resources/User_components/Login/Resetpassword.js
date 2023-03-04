import React from "react"
import { useState } from "react"
// import { Login } from "./Login"
// import {useNavigate} from 'react-router-dom'
// import './components/styles.css' 
import axiosPrivate from "../../../Api/axiosPrivate"
import { useNavigate } from "react-router-dom"
export function Resetpassword(props) {
  const[valid,setValid]=useState(false)
  const navigate=useNavigate();
  const[password,setPassword]=useState({password1:"",password2:"",usermail:""})
  const resetsubmit=async(e)=>{
    e.preventDefault();
    console.log("success");
    await axiosPrivate.post('/accounts/change-password',{email:props.value,password:password.password1}).then((res)=>{navigate('/')}).catch((err)=>{console.log(err)})

  }
  return (
    <div className='right'>
        <div className='sublogin'>
          <i className='fas fa-user'></i>
          <h1>Reset Password</h1>
          <label>New Password</label>
          <br />
          <input type="text" maxLength={40} required  onChange={(e)=>{setPassword({password1:e.target.value,password2:password.password2})}}/>
          <br />
          <label>Confirm Password</label>
          <br />
          <input type="password" maxLength={40} required  onChange={(e)=>{setPassword({password1:password.password1,password2:e.target.value})}}/>
          <br />
          <p className='validation' id="valid">password not matched</p>
          <button className='emailbutton' onClick={resetsubmit}>Reset</button>
        </div>
      </div>
      )
}
