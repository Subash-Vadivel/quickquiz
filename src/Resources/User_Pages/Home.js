import React,{useState,useEffect} from 'react'
import { useAuth } from '../../Authentication'
import learn_styles from '../User_css/learn.module.css'
import axios from 'axios'
import { Card, Row, Container} from 'react-bootstrap';
import logo from '../User_images/logo.png'


export default function Home() {
const auth=useAuth();
const [learn,setLearn] = useState([])


useEffect(()=>{
  setLearn([{"title":"Advanced Python Programming","body":""},{"title":"Java Object Oriented Programming","body":""},
{"title":"Introduction to Modern C++","body":""},{"title":"C Language","body":""}])
  // axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{ setLearn(res.data)})
},[learn])


  return (
      <>
        <Card className={learn_styles.headcontainer}>
          <Card.Body className={learn_styles.cardbody}>
              <Card.Title className={learn_styles.title}>Courses</Card.Title>
          </Card.Body>
        </Card>
        <Container className={learn_styles.subcontainer}>
          {learn.map(l=>
          <Card className={learn_styles.flip_card}>
            <Card className={learn_styles.flip_card_inner}>
              <Card className={learn_styles.flip_card_front}>
                <Card.Title className={learn_styles.flip_card_title}>{l.title}</Card.Title>
                <Row className={learn_styles.logoWrapper}>< img src={logo} alt="logo"/></Row>
              </Card>
              <Card className={learn_styles.flip_card_back}>
                <Card.Text className={learn_styles.flip_card_description}>{l.body}
                <a href='/'>Readmore..</a></Card.Text>
              </Card>
            </Card>
          </Card> 
          )}
        </Container>
    </>
  )
}
//#470b82