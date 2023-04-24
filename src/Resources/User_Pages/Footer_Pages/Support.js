import React from 'react'
import support_styles from '../../User_css/contactus.module.css'
import {Card,Container,Row} from 'react-bootstrap'

export default function Support() {
  return (
    <>
    <div className={support_styles.hr}><span><b>Support</b></span></div>
    <br></br> 
    <Container>
    <Card className={support_styles.card}>
        <Card.Body>
        <Row><center>Write to us : <b>quickquiz.rido@gmail.com</b></center></Row>
        </Card.Body>
    </Card>
    </Container>
    </>
  )
}
