import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import style from './sb.module.css'
import { Form,Button, Container } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Timer from './Timer';
import { useEffect,useState } from 'react';
import axiosPrivate from '../../../Api/axiosPrivate';
import { useParams } from 'react-router-dom';
function AutoLayoutExample() {
  const param=useParams()
  const [question,setQuestion]=useState([]);
  const [basic,setBasic]=useState([]);
  const [currentQ,setCurrentQ]=useState(1);
  const [status,setStatus]=useState(false);
  const [answer,setAnswer]=useState('');
  const load=async()=>{
    await axiosPrivate.get(`question/${param.id}`).then((res)=>{setQuestion(res.data.data.question.questions);setBasic(res.data.data.question);console.log(res.data.data.question);setStatus(true)}).catch((err)=>{console.log(err)});
  }
  useEffect(()=>{
     load();
  },[])

  return (
   <>
   {
    status ?

    (
      <Container fluid className={style.margina}>  
      <Container fluid className={`shadow ${style.header}`}>
      <Row>
        <Col md={10}>
          <h2>&nbsp;Aptitude</h2>
        </Col>
        <Col md={1}>
          <Timer />
        </Col>
        <Col md={1}>
          <Button variant="success">Submit</Button>{' '}
          <br/>
          <br/>
        </Col>
      </Row>
    </Container>
      <br/>
      
      <Container fluid>
      <Row>
      <Col md={4} >
      <div>
         <h5>Question {currentQ}</h5>
        <h6 style={{ display: 'inline-block', marginRight: '10px'}}>Multi Choice Type Question</h6>
        <h6 style={{ display: 'inline-block',float:'right' }}>Marks: {question[currentQ-1].mark}</h6> 
        <p>{question[currentQ-1].question}</p>
      </div>
    </Col>
        <Col md={5} >
        <br/>
  
            {
              question[currentQ-1].choices.map((data,index)=>
               <Form.Control  key={index} type="text" value={data} onClick={(e) => setAnswer(e.target.value)} className={style.choiceForm} readOnly />
              )
            }
          <Button variant="danger" onClick={()=>{setAnswer('')}}>Clear</Button>{' '}
          <br/>
          <br/>
        </Col>
        <Col md={3} className="text-end">
         <Sidebar/>
        </Col>
      </Row>
        <br/>
        <footer style={{textAlign:"center"}}>
        {/* 64056e5e7d2a21b1ff638324 */}
        <Button variant="primary" size="md">
          back
        </Button>
        <Button variant="primary" size="md">
        next
      </Button>
      </footer>
        </Container>
      </Container> 
    ):

    ( 
      <h1>Some thing went Wrong Try again</h1>


    )

   }
   
   
   </>
  );
}

export default AutoLayoutExample;