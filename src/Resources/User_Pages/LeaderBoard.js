import React,{useState,useEffect} from 'react'
import leaderboard_styles from '../User_css/leaderboard.module.css'
import axiosPrivate from '../../Api/axiosPrivate';
import { Card, Form, Row, Col, Container, Button , Table} from 'react-bootstrap';

export default function LeaderBoard() {

  const [leaderboard,setLeaderboard] = useState([]) 

  const load=async()=>{
    await axiosPrivate.post('/user/ranking').then((res)=>{
        setLeaderboard(res.data); 
        console.log(res)
    }).catch((err)=>{console.log(err)})
}

useEffect(()=>{
  load();
  
},[],console.log(leaderboard))

  return (
    <>
    <div className={leaderboard_styles.hr}><span><b>Leaderboard</b></span></div>
    <br></br>
    
    <Container className={leaderboard_styles.maincontainer}>
    <Row className={leaderboard_styles.search}>
        <Col>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    <Table className = {leaderboard_styles.table} striped bordered hover>
      <thead>
        <tr>
          <th Style = {"width:10%"}>Rank</th>
          <th>Username</th>
          <th Style = {"width:20%"}>Points</th>
        </tr>
      </thead>
      <tbody>
        {leaderboard.map((l,idx)=>(
            <tr>
            <td>{idx+1}</td>
            <td>{l.email.replace(/(@.*)/g,"")}</td>
            <td>{l.Rating}</td>
            {}
          </tr>
        ))}
      </tbody>
    </Table>
    </Container>


    </>
  )
}
