import React,{useState,useEffect} from 'react'
import leaderboard_styles from '../User_css/leaderboard.module.css'
import axiosPrivate from '../../Api/axiosPrivate';
import { Card, Form, Row, Col, Container, Button , Table} from 'react-bootstrap';
import { useAuth } from '../../Authentication';

export default function LeaderBoard() {
  const auth=useAuth().details;
  const id=JSON.parse(auth).user_id;
  const [leaderboard,setLeaderboard] = useState([]) 
  const [myposition,setmyposition]=useState();
  const[myrank,setmyrank]=useState();

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
        <tr>
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
    </Container>


    </>
  )
}
