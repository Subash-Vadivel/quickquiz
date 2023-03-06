import React from "react"
import { useState } from "react"
// import { Login } from "./Login"
// import {useNavigate} from 'react-router-dom'
// import './components/styles.css' 
import axiosPrivate from "../../../Api/axiosPrivate"
import { useNavigate } from "react-router-dom"
import { Form,Button } from "react-bootstrap"
import style from '../../User_css/auth.module.css';
import { toast, ToastContainer } from "react-toastify"

export function Resetpassword(props) {
  const[valid,setValid]=useState(false)
  const navigate=useNavigate();
  const[password,setPassword]=useState({password1:"",password2:"",usermail:""})
  const resetsubmit=async(e)=>{
    e.preventDefault();
    await axiosPrivate.post('/accounts/change-password',{email:props.value,password:password.password1}).then((res)=>{toast.success("Reset Successfull");setTimeout(()=>{navigate('/')},3000)  }).catch((err)=>{toast.error("Something Went Wrong Try Again!")})

  }
  return (

    <>
      
         
                 
      <div className={style.centerform}>
                <h2>Login</h2><br></br><br></br>
                      <Form onSubmit={resetsubmit}>
                
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Password"
                          value={password.password1}
                          onChange={(e)=>{setPassword({password1:e.target.value,password2:password.password2})}}                        />
                      </Form.Group><br/>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Confirm address</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                          value={password.password2}
                          onChange={(e)=>{setPassword({password1:password.password1,password2:e.target.value})}}                        />
                      </Form.Group><br/>
                  <ToastContainer/>
                      <center>

                      <Button variant="primary" type="submit">
                        Reset
                      </Button>
                      </center><br/>
                    </Form>
                    </div>
      </>
      )
}
