import React from 'react'
import contactus_styles from '../../User_css/contactus.module.css'
import {Card,Container,Row} from 'react-bootstrap'

export default function ContactUs() {
  return (
    <>
    <div className={contactus_styles.hr}><span><b>Contact Us</b></span></div>
    <br></br> 
    <Container>
    <Card className={contactus_styles.card}>
        <Card.Body>
        <Row><center>Email : quickquiz.rido@gmail.com </center></Row>
        <Row><center>Mobile : XXXXXXXXXX </center></Row>
        </Card.Body>
    </Card>
    </Container>
    </>
  )
}
