import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosPrivate from '../../../Api/axiosPrivate'
import style from '../../User_css/auth.module.css';
import {Row,Col} from 'react-bootstrap'
import { Button,Form } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
export function Signin(props) {
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
  toast.success("Verify Email To Activate Account ")
  setTimeout(()=>{navigate('/')},4000)
  
}).catch((err)=>{toast.error("Something Went Wrong Try Again!");console.log(err)});
    
  }
  return (
    <>
     <div className='center-form'>
                <h2>Register</h2><br></br>
                      <Form onSubmit={submit}>
                      <Form.Group >
                        <Row>
                          <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          value={fn}
                          onChange={(event) => setFn(event.target.value)}
                        /></Col>
                        <Col>
                         <Form.Label>Last Name</Form.Label>

                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          value={ln}
                          onChange={(event) => setLn(event.target.value)}
                        />
                        </Col>
                        </Row>
                      </Form.Group><br></br>
                
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </Form.Group><br/>


                      <Form.Group controlId="formBasicPh">
                        <Form.Label>Phone No</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Mobile Number"
                          value={ph}
                          onChange={(event) => setPh(event.target.value)}
                        />
                      </Form.Group><br/>
                
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </Form.Group><br/>
                
                      <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                          value={cpassword}
                          onChange={(event) => setcPassword(event.target.value)}
                        />
                      </Form.Group><br/>
                      <ToastContainer/>
                         <center>
                      <Button variant="primary" type="submit">
                        Register
                      </Button></center><br/>
                      <p>Have an Account ?<span className={style.guest} onClick={()=>{props.setValid(false)}}> Sign In</span></p>
                    </Form>
                    
                  </div>
  





{/* 
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
      </div>
      </div>
    </div> */}
    </>
  )
}
