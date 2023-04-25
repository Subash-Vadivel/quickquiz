import React from 'react'
import support_styles from '../../User_css/support.module.css'
import {Card,Container,Row,Form,Button} from 'react-bootstrap'

export default function Support() {
  return (
    <>
    <div className={support_styles.hr}><span><b>Support</b></span></div>
    <br></br> 
    <Container>
        <Form className={support_styles.card}>
          <Row><textarea placeholder="Write to us"></textarea></Row>
          <Row><center><Button type="submit">Submit</Button></center></Row>
        </Form>
    </Container>
    </>
  )
}
