import React from 'react'
import { useState } from 'react'
import image from './asset/loginImage1.jpg'
import { Forgetpassword } from '../User_components/Login/Forgetpassword'
import { Signin } from '../User_components/Login/Signin'
import {axiosPrivate} from '../../Api/axiosPrivate'
import { useAuth } from '../../Authentication'
import { Form,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Container,Row,Col, Image } from 'react-bootstrap'
import style from '../User_css/auth.module.css'
import { toast,ToastContainer } from 'react-toastify'
export function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const auth=useAuth()
  const [valid,setValid]=useState(false)
  const navigate=useNavigate();
  const submit = async(e) => {
    e.preventDefault();
    await axiosPrivate.post('/accounts/login',{user:email,password:password}).then((res)=>{
      if(res.data.status==="error")
      {
          toast.warning("Please Verify Email");
          
      }
      else
      {
        toast.success(`Logged in as ${res.data.details.firstName} `)
        setTimeout(()=>{
          auth.login(res.data.details);
          navigate('/')},3000)
      }

    }).catch((err)=>{console.log(err)});
  }
  const [PageContent,setPageContent]=useState(false)
  const forget=()=>{
    setPageContent(true)
  }
  return (
<>
<Container fluid>
  <Row className='align-items-center vh-100'>
<Col md={2}></Col>
<Col md={4}>
      <Image src={image} fluid></Image>
</Col>
<Col md={4}>
{
    (valid===false)?
      <>
      
      {PageContent===false ? 
      <>
      
         
                 
      <div className={style.centerform}>
                <h2>Login</h2><br></br><br></br>
                      <Form onSubmit={submit}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
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
                      <p style={{float:"right"}} onClick={forget}>Forget Password ?</p> 
                      <ToastContainer/>
                      <br/>

                      <center>

                      <Button variant="primary" type="submit">
                        Login
                      </Button>
                      </center><br/>
                      <p>Don't have an Account ?<span className={style.guest} onClick={()=>setValid(true)}> Register</span></p>
                    </Form>
                    </div>
          </>
         : <Forgetpassword/>}
      </>  
    :<Signin setValid={setValid}/>}

    </Col>
    <Col md={2}></Col>
    </Row>
    </Container>
    </>
  )
}
