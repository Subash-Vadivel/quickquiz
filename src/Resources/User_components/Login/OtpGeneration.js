import React, { useState } from 'react'
import { useRef ,useEffect} from 'react'
import { Resetpassword } from './Resetpassword'
import image from '../../User_Pages/asset/loginImage1.jpg'
import axiosPrivate from '../../../Api/axiosPrivate'
export function OtpGeneration(props) {
  const re=useRef();
  const [otp,setOtp]=useState('');
  const [otparray,setOtparray]=useState({d1:"",d2:"",d3:"",d4:"",d5:"",d6:""})
  const [valid,setValid]=useState(false)
  useEffect(()=>{
      setOtp(otparray.d1+otparray.d2+otparray.d3+otparray.d4+otparray.d5+otparray.d6);
  },[otparray])
  const otpref=useRef()
  const submited=async(e)=>{
    e.preventDefault();
    console.log(otp);
    await axiosPrivate.post('/accounts/verify-RP-otp',{email:props.value,otp:otp}).then((res)=>{setValid(true)}).catch((err)=>{console.log(err)})
    

  }
  // useEffect=(()=>{
  //   otpref.current.focus()
  // })
  return (
    (valid===false?
    <div className='right'>
        <div className='sublogin'>
            <h1 className='subtitle'>Enter the OTP</h1>
        {/* <i class="fa-regular fa-clock"></i> */}
        {/* <img src={image} alt="" /> */}
          {/* <h1>Enter the OTP:</h1> */}
          <div className='digits'>
            <input type="text" maxLength="1" id="1" ref={re} onChange={(e)=>{setOtparray({d1:e.target.value,d2:otparray.d2,d3:otparray.d3,d4:otparray.d4,d5:otparray.d5,d6:otparray.d6});document.getElementById(2).focus()}}/>
            <input type="text" maxLength="1" id="2" ref={re} onChange={(e)=>{setOtparray({d1:otparray.d1,d2:e.target.value,d3:otparray.d3,d4:otparray.d4,d5:otparray.d5,d6:otparray.d6});document.getElementById(3).focus()}} />
            <input type="text" maxLength="1" id="3" ref={re} onChange={(e)=>{setOtparray({d1:otparray.d1,d2:otparray.d2,d3:e.target.value,d4:otparray.d4,d5:otparray.d5,d6:otparray.d6});document.getElementById(4).focus()}} />
            <input type="text" maxLength="1" id="4" ref={re} onChange={(e)=>{setOtparray({d1:otparray.d1,d2:otparray.d2,d3:otparray.d3,d4:e.target.value,d5:otparray.d5,d6:otparray.d6});document.getElementById(5).focus()}} />
            <input type="text" maxLength="1" id="5" ref={re} onChange={(e)=>{setOtparray({d1:otparray.d1,d2:otparray.d2,d3:otparray.d3,d4:otparray.d4,d5:e.target.value,d6:otparray.d6});document.getElementById(6).focus()}} />
            <input type="text" maxLength="1" id="6" ref={re} onChange={(e)=>{setOtparray({d1:otparray.d1,d2:otparray.d2,d3:otparray.d3,d4:otparray.d4,d5:otparray.d5,d6:e.target.value});document.getElementById(1).focus()}} />
        </div>
          <br />
          <button className='submitotp' onClick={submited}>submit</button>
          {/* <input type="text" maxLength={40} required onChange={(e)=>{setEmail(e.target.value)}}/> */}
          {/* <br /> */}
          {/* <button className='emailbutton' onClick={()=>notify(email)}>Verify</button> */}
        </div>
        
      </div>:<Resetpassword value={props.value}/>)
  )
}
