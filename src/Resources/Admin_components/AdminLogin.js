import React, { useState } from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import stylelogin from '../Admin_css/adminlogin.module.css'
export default function AdminLogin() {
  const [userid,setUserID]=useState();
  const [password,setPassword]=useState();
  return (
    <>
    <Container fluid className={stylelogin.loginWrapper}>
      <Row className='align-items-center vh-100'>
        <Col md={4} sm={2} xs={1}></Col>
        
        <Col md={4} sm={8} xs={10}>

        <div className={`Auth-form-container ${stylelogin.formWrapper}`}>
      <form className="Auth-form">
        <div className="Auth-form-content ">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
            value={userid}
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e)=>{setUserID(e.target.value)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
            value={password}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <span >password?</span>
          </p>
        </div>
      </form>
    </div>


        </Col>
        
        <Col md={4} sm={2} xs={1}></Col>
      </Row>
    </Container>
    </>
  )
}
