import React,{useState,useEffect} from 'react'
import { useAuth } from '../../Authentication'
import practice_styles from '../User_css/practice.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import { Card, Row, Col, Container, Form, Button} from 'react-bootstrap';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarSubMenu,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';



export default function Practice() {
const navigate = useNavigate()
const auth=useAuth();
const [practice,setPractice] = useState([])


useEffect(()=>{
  setPractice([{"title":"Advanced Python Programming","body":""},{"title":"Java Object Oriented Programming","body":""},
{"title":"Introduction to Modern C++","body":""},{"title":"C Language","body":""}])
  // axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{ setLearn(res.data)})
},[practice])

return (
    <>
    <Card className={practice_styles.headcontainer}>
          <Card.Body className={practice_styles.cardbody}>
            <Card.Title className={practice_styles.title}>Practice</Card.Title>
          </Card.Body>
          </Card>
    <Container fluid className={practice_styles.maincontainer}>
        <Row className={practice_styles.pagecontainer}>
        <Col sm={1} md={1}>
            <CDBSidebar className={practice_styles.filterbox}>
                <CDBSidebarHeader className={practice_styles.filterbox_header} prefix={<i className="fa fa-filter fa-small"></i>}>
                <p className={practice_styles.filterbox_title} >
                    Filter
                </p>
                </CDBSidebarHeader>
                <CDBSidebarContent className={practice_styles.filterbox_content}>
                    <CDBSidebarMenu className={practice_styles.filterbox_menu}>
                        <CDBSidebarMenuItem>
                           Difficulty
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem><Form>
                            <Form.Check 
                                type={"Checkbox"}
                                id={`default`}
                                label={`Easy`}
                            /></Form>
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem><Form>
                            <Form.Check 
                                type={"Checkbox"}
                                id={`default`}
                                label={`Medium`}
                            /></Form>
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem><Form>
                            <Form.Check 
                                type={"Checkbox"}
                                id={`default`}
                                label={`Hard`}
                            /></Form>
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem>
                            Topics
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem>
                        <Form>
                            <Form.Check 
                                type={"Checkbox"}
                                id={`default`}
                                label={`Title`}
                            /></Form>
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem className={practice_styles.filterbox_footer}>
                            <Button variant='success'>Apply</Button>
                        </CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                
            </CDBSidebar>
            </Col>
            <Col sm={11} md={11}>
            <Container className={practice_styles.practicelist} >
                <Card className={practice_styles.questionpaper} >
                    <Card.Title>Topic</Card.Title>
                    <Card.Body>
                    <Card.Text>Category</Card.Text>
                    <Card.Text>Total Questions</Card.Text>
                    <Card.Text>Difficulty Level</Card.Text>
                    <Button onClick={()=>navigate('/id')} variant='success'>Practice</Button>
                    </Card.Body>
                </Card>
                <Card className={practice_styles.questionpaper} >
                    <Card.Title>Topic</Card.Title>
                    <Card.Body>
                    <Card.Text>Category</Card.Text>
                    <Card.Text>Total Questions</Card.Text>
                    <Card.Text>Difficulty Level</Card.Text>
                    <Button onClick={()=>navigate('/id')} variant='success'>Practice</Button>
                    </Card.Body>
                </Card>
            </Container>
            
            </Col>
        </Row>
        </Container>
    </>
)
}