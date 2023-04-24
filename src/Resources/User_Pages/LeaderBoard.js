import React,{useState,useEffect} from 'react'
import leaderboard_styles from '../User_css/leaderboard.module.css'
import axiosPrivate from '../../Api/axiosPrivate';
import { Form, Row, Col, Container, Button , Table} from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa'
import {useAuth} from '../../Authentication'

export default function LeaderBoard() {

  const auth = useAuth().details;
  const id = JSON.parse(auth).user_id;
  const [start,setStart] = useState(0)
  const [leaderboard,setLeaderboard] = useState([])
  const [searchResult,setSearchResult] = useState()
  const [userRank,setUserRank] = useState({'rank':"MyRank",'uid':"MyName",'rating':0})


  const load=async()=>{
    await axiosPrivate.post('/user/ranking',{id}).then((res)=>{
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
        <tr className = {leaderboard_styles.th}>
          <th Style = {"width:10%"}>Rank</th>
          <th>Username</th>
          <th Style = {"width:20%"}>Points</th>
        </tr>
      </thead>
      <tbody className = {leaderboard_styles.tbody}>
          <tr className = {leaderboard_styles.usertr}>
            <td Style={"color:white"}>{userRank['rank']}</td>
            {/* <td>{l.email.replace(/(@.*)/g,"")}</td> */}
            <td Style={"color:white"}>{userRank['uid']}</td>
            <td Style={"color:white"}>{userRank['rating']}</td>
          </tr>
          {searchResult ?
          <tr Style={"background-color:green"}>
            <td Style={"color:white"}>{searchResult['rank']}</td>
            <td Style={"color:white"}>{searchResult['uid']}</td>
            <td Style={"color:white"}>{searchResult['rating']}</td>
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
