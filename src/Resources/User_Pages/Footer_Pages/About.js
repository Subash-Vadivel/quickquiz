import React from 'react'
import about_styles from '../../User_css/contactus.module.css'
import {Card,Container} from 'react-bootstrap'

export default function ContactUs() {
  return (
    <>
    <div className={about_styles.hr}><span><b>About</b></span></div>
    <br></br> 
    <Container>
    <Card className={about_styles.card}>
        <Card.Title><center>QuickQuiz</center></Card.Title>
        <Card.Body>
    
        </Card.Body>
    </Card>
    </Container>
    </>
  )
}
