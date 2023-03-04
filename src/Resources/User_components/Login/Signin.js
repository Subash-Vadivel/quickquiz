import React from 'react'
import { useState } from 'react'
import '../../User_css/styles.css'
import '../../User_css/styles2.css'
import image from '../../User_Pages/asset/signupImage.jpg'
import { Forgetpassword } from './Forgetpassword'
export function Signin() {
  const[user,setUser]=useState({name:"",email:"",password:"",chpassword:""})

  const submit = () => {
    if(user.password===user.chpassword){
      alert("successfully registered")
      console.log(user.email);
      console.log(user.password);
      console.log(user.name);
      console.log(user.chpassword);
      document.getElementById("valid").style.visibility="hidden";
    }else{
      document.getElementById("valid").style.visibility="visible";
    }
    
  }
  return (
    <div className='fullcontainer'>
      <div className='subcontainer'>
      <div className='left'>
      <img src={image} alt="" />
      </div>
      <div className='right'>
        <div className='signup'>
        <i className='fas fa-user'></i>
        <h1>Welcome to Quizz</h1>
        <form>
        <label className='subhead'>Name</label>
          <br />
          <input type="text" className='signupinput' maxLength={40} required onChange={(e)=>setUser({name:e.target.value,email:user.email,password:user.password,chpassword:user.chpassword})}/>
          <br />
          <label className='subhead'>Email</label>
          <br />
          <input type="text" className='signupinput' maxLength={40} required onChange={(e)=>setUser({name:user.name,email:e.target.value,password:user.password,chpassword:user.chpassword})}/>
          <br />
          <label className='subhead'>Password</label>
          <br />
          <input type="text" className='signupinput' maxLength={40} required onChange={(e)=>setUser({name:user.name,email:user.email,password:e.target.value,chpassword:user.chpassword})}/>
          <br />
          <label className='subhead'>Confirm Password</label>
          <br />
          <input type="password" className='signupinput' maxLength={40} required onChange={(e)=>setUser({name:user.name,email:user.email,password:user.password,chpassword:e.target.value})}/>
        </form>
        <p className='validation' id="valid">password not matched</p>
        <button className='register' onClick={submit}>Register</button>
        </div>
        {/* <div className='register'> */}
          
        {/* </div> */}
      </div>
      </div>
      {/* </div> */}
    </div>
  )
}
