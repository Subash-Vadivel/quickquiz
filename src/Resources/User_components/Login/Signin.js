import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../User_css/styles.css'
import '../../User_css/styles2.css'
import image from '../../User_Pages/asset/signupImage.jpg'
import { Forgetpassword } from './Forgetpassword'
import axiosPrivate from '../../../Api/axiosPrivate'
export function Signin() {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [cpassword,setcPassword]=useState()
  const [ph,setPh]=useState()
  const [fn,setFn]=useState()
  const [ln,setLn]=useState()



const navigate=useNavigate();
  const submit = async(e) => {
    
e.preventDefault();

await axiosPrivate.post('/accounts/register',{email:email,
phno:ph,
password:password,
firstName:fn,
lastName:ln}).then((res)=>{
  navigate('/')
}).catch((err)=>{console.log(err)});
    
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
        <label className='subhead'>First Name</label>
          <br />
          <input type="text" className='signupinput' maxLength={40} value={fn} required onChange={(e)=>setFn(e.target.value)}/>
          <br />
          <label className='subhead'>Last Name</label>
          <br />
          <input type="text" className='signupinput' maxLength={40} value={ln}  required onChange={(e)=>setLn(e.target.value)}/>
          <br />
          
          <label className='subhead'>Email</label>
          <br />
          <input type="text" className='signupinput' maxLength={40} value={email} required onChange={(e)=>setEmail(e.target.value)}/>
          <br />
          <label className='subhead'>Phone No</label>
          <br />
          <input type="number"  className='signupinput' maxLength={40} value={ph} required onChange={(e)=>setPh(e.target.value)}/>
          <br />
          <label className='subhead'>Password</label>
          <br />
          <input type="text" className='signupinput' maxLength={40} value={password} required onChange={(e)=>setPassword(e.target.value)}/>
          <br />
          <label className='subhead'>Confirm Password</label>
          <br />
          <input type="password" className='signupinput' maxLength={40} value={cpassword} required onChange={(e)=>setcPassword(e.target.value)}/>
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
