import React, { useState } from 'react'
import { useRef ,useEffect} from 'react'
import { Resetpassword } from './Resetpassword'
import image from '../../User_Pages/asset/loginImage1.jpg'
import axiosPrivate from '../../../Api/axiosPrivate'
export function OtpGeneration(props) {
  const [otp,setOtp]=useState([])
  const [valid,setValid]=useState(false)
  const otpref=useRef()
  const submited=async(e)=>{
    e.preventDefault();
    const o=()=>{return otp.join("")}
    console.log(o);
    await axiosPrivate.post('/accounts/verify-RP-otp',{email:props.value,otp:o}).then((res)=>{setValid(true)}).catch((err)=>{console.log(err)})
    

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
            <input type="text" maxLength="1" ref={otpref} onChange={(e)=>setOtp([...otp,e.target.value])}/>
            <input type="text" maxLength="1"  onChange={(e)=>setOtp([...otp,e.target.value])} />
            <input type="text" maxLength="1"  onChange={(e)=>setOtp([...otp,e.target.value])} />
            <input type="text" maxLength="1"  onChange={(e)=>setOtp([...otp,e.target.value])} />
            <input type="text" maxLength="1"  onChange={(e)=>setOtp([...otp,e.target.value])}/>
            <input type="text" maxLength="1"  onChange={(e)=>setOtp([...otp,e.target.value])}/>
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
