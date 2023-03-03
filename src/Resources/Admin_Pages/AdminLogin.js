import React, { useState } from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import AdminLoginForm from '../Admin_components/AdminLoginForm'
import stylelogin from '../Admin_css/adminlogin.module.css'
export default function AdminLogin() {
  return (
    <>
    <Container fluid className={stylelogin.loginWrapper}>
      <Row className='align-items-center vh-100'>
        <Col md={4} sm={2} xs={1}></Col>
        
        <Col md={4} sm={8} xs={10}>

              <AdminLoginForm/>


        </Col>
        
        <Col md={4} sm={2} xs={1}></Col>
      </Row>
    </Container>
    </>
  )
}
