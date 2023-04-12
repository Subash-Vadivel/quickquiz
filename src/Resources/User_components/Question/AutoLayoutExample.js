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
  const [flag,setFlag]=useState("1");
  const [answerscript,setAnswerscript]=useState([

  ]);
 
  console.log(answerscript);

  const load=async()=>{
    await axiosPrivate.get(`question/${param.id}`).then((res)=>{setQuestion(res.data.data.question.questions);setBasic(res.data.data.question);console.log(res.data.data.question);setStatus(true)}).catch((err)=>{console.log(err)});
  }
  useEffect(()=>{
     load();
  },[])

  const handlesubmit=async(req,res)=>{
    console.log("working")
  }

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
          <Timer timer={1*60} submit={handlesubmit}/>
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