import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { RingLoader } from 'react-spinners';
import Popup from 'reactjs-popup';
import React from 'react';
import style from './sb.module.css'
import { Form,Button, Container } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Timer from './Timer';
import { useEffect,useState } from 'react';
import axiosPrivate from '../../../Api/axiosPrivate';
import { useNavigate, useParams } from 'react-router-dom';
import {useAuth}  from '../../../Authentication';
function AutoLayoutExample() {
  const navigate=useNavigate();
  const param=useParams();
  const user=useAuth().details;
  const [question,setQuestion]=useState([]);
  const [basic,setBasic]=useState([]);
  const [currentQ,setCurrentQ]=useState(1);
  const [status,setStatus]=useState(false);
  const [answer,setAnswer]=useState('');
  const [flag,setFlag]=useState(false);
  const [popupresult,setpopupresult]=useState(false);
  const [response,setresponse]=useState();
  const [answerscript,setAnswerscript]=useState([
  ]);
  console.log(answerscript);
console.log(user);
  const load=async()=>{
    await axiosPrivate.get(`question/${param.id}`).then((res)=>{setQuestion(res.data.data.question.questions);setBasic(res.data.data.question);console.log(res.data.data.question);setStatus(true)}).catch((err)=>{console.log(err)});
  }
  useEffect(()=>{

     load();
  },[])


  const completed=async()=>{
    setFlag(true);
    await axiosPrivate.post('user/submit-response',{
      qid:param.id,
      answerscript,
      uid:JSON.parse(user).user_id
    }).then((res)=>{
      setresponse(res.data);
      setpopupresult(true);
      console.log(res.data)}).catch((err)=>{

      console.log(err);
    })
  }

  const togglePopup = () => {
    setFlag(!flag);
  }

  const goHome=()=>{
    navigate('/');
  }
  const retakeTest=()=>{
    window.location.reload();
  }
  return (
   <>
   {flag && 
    <Popup
    open={flag}
    onClose={togglePopup}
    position="center"
    modal
    closeOnDocumentClick={false}
    contentStyle={{
      padding: '20px',
      border: '2px solid #72bcd4',
      borderRadius: '5px',
      boxShadow: '0px 0px 10px #72bcd4',
      backgroundColor: '#fff',
      color: '#333'
    }}
  >
    {popupresult?(
    <div>
    <h3>Quiz Results</h3>
    <div style={{  textAlign: 'center', justifyContent: 'center' }}>
    <h6>Score: {response.score}/{response.totalScore}</h6>
    <h6>Correct Answers: {response.correctCount}/{response.totalCount}</h6>    </div>
    <Row className="justify-content-center">
    <Button onClick={goHome} variant="success" className="mt-3 mr-2 mx-1" style={{ width: '135px' }}>Home</Button>
    <Button onClick={retakeTest} variant="danger" className="mt-3 mr-2 mx-2" style={{ width: '135px' }}>Retake Test</Button>
    <Button onClick={goHome} variant="success" className="mt-3" style={{ width: '135px' }}>Solution</Button>
  </Row>

  </div>
    ):
    (
      <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <RingLoader color="#36d7b7" />
    </div>
    <br/>
    <div style={{textAlign:"center"}}>Submiting </div></>
    )
  }
    
  </Popup>
  
  
  
    }
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
          <Timer timer={basic.time*60} submit={completed}/>
        </Col>
        <Col md={1}>
          <Button variant="success" onClick={completed}>Submit</Button>{' '}
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
               <Form.Control  key={index} type="text" value={data} onClick={(e) => {setAnswerscript({...answerscript,[question[currentQ-1].question]:e.target.value});}} 
               className=
               {
                
                (data!==answerscript[question[currentQ-1].question])?
                style.choiceForm:style.selectedOption
              }
                readOnly />
              )
            }
            {/* setAnswerscript({...answerscript,[question[currentQ-1].question]:""}) */}
          <Button variant="danger" onClick={()=>{
            delete answerscript[question[currentQ-1].question];
            setAnswerscript({...answerscript});
          }}>Clear</Button>{' '}
          <br/>
          <br/>
          
        {
          currentQ>1?
          <Button variant="primary" size="md" onClick={()=>{setCurrentQ((pre)=>pre-1);}}>
            back
          </Button>:<></>
        }
        {" "}
        {" "}
        {
          currentQ<question.length?
          <Button variant="primary" size="md" onClick={()=>{setCurrentQ((pre)=>pre+1);}}>
          next
        </Button>:<>
        </>
        }
        </Col>
        <Col md={3} className="text-end">
          <Sidebar qcount={question.length} question={question} setCurrentQ={setCurrentQ} answerscript={answerscript}/>
         
        </Col>
      </Row>
      
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