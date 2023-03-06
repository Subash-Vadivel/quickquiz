import React, { useState } from 'react'
import { useEffect} from 'react'
import { Resetpassword } from './Resetpassword'
import image from '../../User_Pages/asset/loginImage1.jpg'
import axiosPrivate from '../../../Api/axiosPrivate'
import { Form,Button } from 'react-bootstrap';
import style from '../../User_css/auth.module.css';
import { toast, ToastContainer } from 'react-toastify'
export function OtpGeneration(props) {
  const [otp,setOtp]=useState('');
  const [valid,setValid]=useState(false)
  
  const submited=async(e)=>{
    e.preventDefault();
    console.log(otp);
    await axiosPrivate.post('/accounts/verify-RP-otp',{email:props.value,otp:otp}).then((res)=>{toast.success("OTP Sent");setTimeout(()=>{ setValid(true);},3000)  }).catch((err)=>{toast.error("Invalid OTP")})
    

  }
  // useEffect=(()=>{
  //   otpref.current.focus()
  // })
  return (
    (valid===false?
      <>
      <div className={style.centerform}>
                    <h2>Forget Password</h2><br></br><br></br>
                          <Form onSubmit={submited}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>OTP Verification</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter OTP"
                              value={otp}
                              onChange={(event) => setOtp(event.target.value)}
                            />
                          </Form.Group><br/>
                     <ToastContainer/>
                          <center>
                          <Button variant="primary" type="submit">
                            Verify
                          </Button>
                          </center><br/>
                        </Form>
                        </div>
      </>
      :<Resetpassword value={props.value}/>)
  )
}
