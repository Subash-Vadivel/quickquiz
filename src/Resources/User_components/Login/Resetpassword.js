import React from "react"
import { useState } from "react"
// import { Login } from "./Login"
// import {useNavigate} from 'react-router-dom'
// import './components/styles.css' 
export function Resetpassword(props) {
  const[valid,setValid]=useState(false)
  const[password,setPassword]=useState({password1:"",password2:"",usermail:""})
  const resetsubmit=()=>{
    if(password.password1===password.password2){
      document.getElementById("valid").style.visibility="hidden";
      setPassword({password1:password.password1,password2:password.password2,usermail:props.value})
      console.log()
      console.log(props.value)
      setValid(true)
      alert("redirected to login")
    }else{
      document.getElementById("valid").style.visibility="visible";
    }
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
