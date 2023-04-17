import React,{useState,useEffect} from 'react'
import { useAuth } from '../../Authentication'
import learn_styles from '../User_css/learn.module.css'
import { Card, Row, Container} from 'react-bootstrap';
import logo from '../User_images/logo.png'


export default function Home() {
  const auth=useAuth();
  const [learn,setLearn] = useState([])
  
  useEffect(()=>{
    setLearn([{"title":"Advanced Python Programming","glimpse":"Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together.","body":""},
  {"title":"Java Object Oriented Programming","glimpse":"Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.","body":""},
  {"title":"Introduction to Modern C++","glimpse":"C++ is an object-oriented programming (OOP) language that is viewed by many as the best language for creating large-scale applications. C++ is a superset of the C language.","body":""},
  {"title":"C Language","glimpse":"C is a general-purpose computer programming language for system administration, network programming, and embedded software.","body":""}])
    // axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{ setLearn(res.data)})
  },[])
  
  
    return (
        <>
          <Card className={learn_styles.headcontainer}>
            <Card.Body className={learn_styles.cardbody}>
                <Card.Title className={learn_styles.title}>Courses</Card.Title>
            </Card.Body>
          </Card>
          <Container fluid className={learn_styles.subcontainer}>
            {learn.map(l=>
            <Card className={learn_styles.flip_card}>
              <Card className={learn_styles.flip_card_inner}>
                <Card className={learn_styles.flip_card_front}>
                  <Card.Title className={learn_styles.flip_card_title}>{l.title}</Card.Title>
                  <Row className={learn_styles.logoWrapper}>< img src={logo} alt="logo"/></Row>
                </Card>
                <Card className={learn_styles.flip_card_back}>
                  <Card.Text className={learn_styles.flip_card_description}>{l.glimpse}<br/>
                  <a style={{"color":"yellow"}}><u>Readmore</u></a></Card.Text>
                </Card>
              </Card>
            </Card> 
            )}
          </Container>
      </>
    )
}
