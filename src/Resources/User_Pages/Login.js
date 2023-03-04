import React from 'react'
import { useState } from 'react'
import '../User_css/styles.css'
import '../User_css/styles2.css'
import image from './asset/loginImage1.jpg'
import { Forgetpassword } from '../User_components/Login/Forgetpassword'
import { Signin } from '../User_components/Login/Signin'
import axiosPrivate from '../../Api/axiosPrivate'
import { useAuth } from '../../Authentication'
import { useNavigate } from 'react-router-dom'
export function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const auth=useAuth()
  const [valid,setValid]=useState(false)
  const [warning,setWarning]=useState('');
  const navigate=useNavigate();
  const submit = async(e) => {
    e.preventDefault();
    console.log("hghg");
    await axiosPrivate.post('/accounts/login',{user:email,password:password}).then((res)=>{
      if(res.status==="error")
      {
          setWarning("Please Verify Email");
          
      }
      else
      {
          auth.login(res.data.details);
          navigate('/')
      }

    }).catch((err)=>{console.log(err.status)});
  }
  const [PageContent,setPageContent]=useState(false)
  const forget=()=>{
    setPageContent(true)
  }
  return (
    (valid===false)?
    <div className='fullcontainer'>
      <div className='subcontainer'>
      <div className='left'>
      <img src={image} alt="" />
      </div>
      {PageContent===false ? 
      <div className='right'>
        <div className='sublogin'>
          <i className='fas fa-user'></i>
          <h1>Welcome to Login</h1>
          <label>Email</label>
          <br />
          <input type="text" maxLength={40} required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <br />
          <label>Password</label>
          <br />
          <input type="password"  maxLength={20} required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <br/><br/>
          <p  onClick={forget}>Forget Password ?</p>
          <br/>
          <p style={{textAlign:"center",color:"red"}}>{warning}</p>
          <br/>
        <div className='btns'>
          <button onClick={submit}>Login</button>
          <h4 style={{textAlign:'center'}}>OR</h4>
          <button onClick={()=>setValid(true)}>Signup</button>
        </div>
          {/* <h2>Hello world</h2> */}

        </div>
      </div> : <Forgetpassword/>}
      </div>
      
    </div>:<Signin/>
  )
}
