import React,{useState,useEffect} from 'react'
import leaderboard_styles from '../User_css/leaderboard.module.css'
import axiosPrivate from '../../Api/axiosPrivate';
import { Card, Form, Row, Col, Container, Button , Table} from 'react-bootstrap';
import { useAuth } from '../../Authentication';
import {FaSearch} from 'react-icons/fa'
export default function LeaderBoard() {
  const auth=useAuth().details;
  const id=JSON.parse(auth).user_id;
  const [start,setStart] = useState(0)
  const [leaderboard,setLeaderboard] = useState([]) 
  const [myposition,setmyposition]=useState();
  const[myrank,setmyrank]=useState();
const [start,setStart]=useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLeaderboard, setFilteredLeaderboard] = useState([]);

  useEffect(() => {
    setFilteredLeaderboard(
      leaderboard.filter((l) =>
        l.email.replace(/(@.*)/g, '').toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [leaderboard, searchTerm]);

  const load=async()=>{
    await axiosPrivate.post('/user/ranking',{id}).then((res)=>{
        setLeaderboard(res.data.users); 
        setmyposition(res.data.self);
        setmyrank(res.data.rank);
        console.log(res)
    }).catch((err)=>{console.log(err)})
    setFilteredLeaderboard(leaderboard);
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
      <Form.Control  type="text"  value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
             placeholder="Search username" className={`mr-sm-2 shadow-none ${leaderboard_styles.searchbar}`} />
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
        { myposition!=undefined  &&
          <tr className = {leaderboard_styles.usertr}>
            <td Style={"color:white"}>{myrank}</td>
            {/* <td>{l.email.replace(/(@.*)/g,"")}</td> */}
            <td Style={"color:white"}>{myposition.email.replace(/(@.*)/g,"")}</td>
            <td Style={"color:white"}>{myposition.Rating}</td>
          </tr>
          }
      { filteredLeaderboard.slice(start,start+15).map((l,index)=> 
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
        {start+15<filteredLeaderboard.length-1?<Button onClick={()=>{setStart((pre)=>pre+15)}}>Next</Button>:<></>}
        </Col>
    </Row>
    </Container>
{/* 


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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <Button>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    <Table className = {leaderboard_styles.table} striped bordered hover>
      <thead>
        <tr className = {leaderboard_styles.th}>
          <th Style = {"width:10%"}>Rank</th>
          <th>Username</th>
          <th Style = {"width:20%"}>Points</th>
        </tr>
      </thead>
      <tbody>
        {myposition!=undefined  &&
      <tr style={{backgroundColor:"#a6e8c8"}}>
            <td>{myrank}</td>
            <td>{myposition.email.replace(/(@.*)/g,"")}</td>
            <td>{myposition.Rating}</td>
            {}
          </tr>
          }
        {filteredLeaderboard.map((l, idx) => (
  <tr key={l.email}>
    <td>{idx + 1}</td>
    <td>{l.email.replace(/(@.*)/g, '')}</td>
    <td>{l.Rating}</td>
  </tr>
))}
      </tbody>
    </Table>
    </Container> */}


    </>
  )
}
