import React,{useState,useEffect} from 'react'
import leaderboard_styles from '../User_css/leaderboard.module.css'
import axiosPrivate from '../../Api/axiosPrivate';
import { Form, Row, Col, Container, Button , Table} from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa'

export default function LeaderBoard() {

  const [start,setStart] = useState(0)
  const [leaderboard,setLeaderboard] = useState([])
  const [searchResult,setSearchResult] = useState()

  const load=async()=>{
    await axiosPrivate.post('/user/ranking').then((res)=>{
        setLeaderboard(res.data); 
        console.log(res)
    }).catch((err)=>{console.log(err)})
    setSearchResult()
  }
  const applysearch = (e)=>{
    if(e.target.value===""){
      setSearchResult()
    }
    else{
      leaderboard.filter((l,index)=>{
        if(l.email.replace(/(@.*)/g,"") === e.target.value){
          setSearchResult({'rank':index+1,'uid':l.email.replace(/(@.*)/g,""),'rating':l.Rating})
        }
      })
    }
  }

useEffect(()=>{
  load();
},[],console.log(leaderboard))

  return (
    <>
    <div className={leaderboard_styles.hr}><span><b>Leaderboard</b></span></div>
    <br></br>
    
    <Container className={leaderboard_styles.maincontainer}>
    <Container className={leaderboard_styles.search}style={{ display: 'flex', flexDirection: 'row' }}>
    <Button style={{ width: '3%' }} className={`shadow-none ${leaderboard_styles.button}`} variant = 'light'><FaSearch style={{'color':' rgba(71,11,130,1)'}}/></Button>
    <Form Style={ "width:97% "}>
      <Form.Control onChange={applysearch} type="text" placeholder="Search username" className={`mr-sm-2 shadow-none ${leaderboard_styles.searchbar}`} />
    </Form>
    
  </Container>
    <Table className = {leaderboard_styles.table} striped bordered hover>
      <thead>
        <tr Style={"background-color:grey"}>
          <th Style = {"width:10%"}>Rank</th>
          <th>Username</th>
          <th Style = {"width:20%"}>Points</th>
        </tr>
      </thead>
      <tbody>
          <tr Style={"background-color:skyblue"}>
            <td>MyRank</td>
            {/* <td>{l.email.replace(/(@.*)/g,"")}</td> */}
            <td>MyName</td>
            <td>0</td>
          </tr>
          {searchResult ?
          <tr Style={"background-color:green"}>
            <td>{searchResult['rank']}</td>
            <td>{searchResult['uid']}</td>
            <td>{searchResult['rating']}</td>
          </tr>:<></>}
      { leaderboard.slice(start,start+15).map((l,index)=> 
            <tr key={start+index+1}>
            <td>{start+index+1}</td>
            <td>{l.email.replace(/(@.*)/g,"")}</td>
            <td>{l.Rating}</td>
          </tr>
        )}
      </tbody>
    </Table>
    <Row>
        <Col>
        {start>2?<Button style={{float:"right"}} onClick={()=>{setStart((pre)=>pre-15)}}>Back</Button>:<></>}
        </Col>
        <Col>
        {start+15<leaderboard.length-1?<Button onClick={()=>{setStart((pre)=>pre+15)}}>Next</Button>:<></>}
        </Col>
    </Row>
    </Container>


    </>
  )
}
