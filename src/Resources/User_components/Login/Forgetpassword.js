import React from 'react'
import { useState } from 'react'
import { OtpGeneration } from './OtpGeneration'
import { Resetpassword } from './Resetpassword'
import axiosPrivate from '../../../Api/axiosPrivate';
import { Form,Button, Toast } from 'react-bootstrap'
import style from '../../User_css/auth.module.css';
import { toast, ToastContainer } from 'react-toastify'
// import { Login } from './Login'
export function Forgetpassword() {

    const[email,setEmail]=useState("")
    const [valid,setValid]=useState(false);
    const notify=async(e)=>{
        e.preventDefault();
        await axiosPrivate.post('/accounts/forgot-password',{email:email}).then((res)=>{toast.success("OTP Sent"); setTimeout(()=>{setValid(true);},3000)    }).catch((err)=>{toast.error("Please Check Your Email !")})            
    }
  return (
    (valid===false)?

    <>
  <div className={style.centerform}>
                <h2>Forget Password</h2><br></br><br></br>
                      <Form onSubmit={notify}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </Form.Group><br/>
                <ToastContainer/>
                      <center>
                      <Button variant="primary" type="submit">
                        Send OTP
                      </Button>
                      </center><br/>
                    </Form>
                    </div>
      </>
      : <OtpGeneration value={email}/>
      
  )
}
