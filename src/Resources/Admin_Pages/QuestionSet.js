import { useState } from 'react';
import { Col, Row, Container, FloatingLabel, Form, Button, Alert } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';
import style from '../Admin_css/question.module.css'
export default function QuestionSet() {
    const [currentPage,setCurrentPage]=useState(1);
    const [flag,setFlag]=useState(false);
    const [options, setOptions] = useState(['', '', '', '', '']);
    const [details,setDetails]=useState(
      {
       q:[
        {
          qnno:1,
          question:"",
          choises:[""],
          correctAnswer:"",
          mark:"",
          explanation:"",
          mode:""
         }
       ]
      }
    )

    

 //Over All Data For Question Set
    const [qsettitle,setQsettitle]=useState('');
    const [totalmark, setTotalMark] = useState('');
    const[time,setTime]=useState('');
    const [category,setCategory]=useState('');
    const [qdifficulty,setqDifficulty]=useState('');
   const [testtype,setTesttype]=useState('');


//Individual Data
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [mark, setMark] = useState(1);
    const [explanation, setExplanation] = useState('');
    const [mode, setMode] = useState('easy');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const[qncnt,setqncnt]=useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();
        // details.q.splice(details.q.length-1,1);
        // await axiosPrivate('/question/new',{
        //   topic:qsettitle,
        //   category:category,
        //   questions:details.q,
        //   type:qdifficulty,
        //   time:time,
        //   mode:mode
        // }).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
        
    };



    const save=(con)=>{
     
        if( details.q[currentPage-1].question==="" ||  details.q[currentPage-1].choises.length<2 || details.q[currentPage-1].correctAnswer==="" || details.q[currentPage-1].mark==="" || details.q[currentPage-1].mode==="")
        {
              toast.error("Please Check the data");
              
        
              return;
        }
        if(details.q[currentPage-1].explanation==="")
            details.q[currentPage-1].explanation="none";
      
            setTotalMark(totalmark+details.q[currentPage-1].mark)
      if(con)
      {
        details.q.push({
          qnno:details.q.length+1,
          question:"",
          choises:[""],
          correctAnswer:"",
          mark:"",
          explanation:"",
          mode:""
         })
      }
     
       setDetails({...details})
      setCurrentPage((pre)=>pre+1);
      console.log(details);
    }

    return (
        <>
         <ToastContainer/>
        <br/>
            <Container>
                <Container>
                    <Row>
                        <Col sm={12} sx={12} md={6} lg={6} xl={6} xxl={6}>
                            <FloatingLabel controlId="topic" label="Title for Question" className="mb-3">
                                <Form.Control name="topic" type="text" placeholder="Title" value={qsettitle} onChange={(e)=>{setQsettitle(e.target.value)}}/>
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} sx={12} md={6} lg={6} xl={6} xxl={6}>
                            <FloatingLabel controlId="category" label="Category" className="mb-3">
                            <Form.Select aria-label="Floating label select Category" required  value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                                    <option value="Python">Python</option>
                                    <option value="C">C</option>
                                    <option value="C++">C++</option>
                                    <option value="Java">Java</option>

                                </Form.Select>                           
                           </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                            <FloatingLabel controlId="floatingInput" label="TimeLimit in (Minutes)" className="mb-3">
                                <Form.Control name="time" type="number" placeholder="Time Limit" min={1} max={300} value={time} onChange={(e)=>{setTime(e.target.value)}} />
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                            <FloatingLabel controlId="floatingInput" label="Mode" className="mb-3">
                            <Form.Select aria-label="Floating label select Mode" required value={qdifficulty} onChange={(e)=>{setqDifficulty(e.target.value)}}>
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>

                                </Form.Select>                              
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                            <FloatingLabel controlId="floatingSelect" label="Selece the type">
                                <Form.Select aria-label="Floating label select example" required value={testtype} onChange={(e)=>{setTesttype(e.target.value)}}>
                                    <option value="test">Test</option>
                                    <option value="practice">Practice</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
         <br></br>
                    <Row>
                      <Col  sm={12} sx={12} md={3} lg={3} xl={3} xxl={3}>
                      <center>
                         <button className={style.qbtn}>Questions : {details.q.length-1}</button>
                         </center>
             
                      </Col>
                      <Col  sm={12} sx={12} md={3} lg={3} xl={3} xxl={3}>
                      <center>
                         <button className={style.qbtn}>Total Mark : {totalmark}</button>
                         </center>
                      </Col>
                      <Col  sm={12} sx={12} md={3} lg={3} xl={3} xxl={3}>
                        <center>
                         <button className={style.qbtn} onClick={()=>{setFlag(!flag)}}>{flag?"Hide Question":"Show Question"}</button>
                         </center>
                      </Col>
                      <Col  sm={12} sx={12} md={3} lg={3} xl={3} xxl={3}>
                        <center>
                         <button className={style.qbtn} onClick={handleSubmit}>Publish</button>
                         </center>
                      </Col>
                    </Row>


                  {flag?(
                    <Container className="mt-5">
                        <Row className="justify-content-center">
                          <Col sm={1} md={2} lg={3}></Col>
                            <Col xs={12} sm={10} md={8} lg={6}>
                                <h4 className="mb-3">Add Question</h4>
                                {showAlert && <Alert variant="danger">{alertMsg}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mt-3">
                                        <Form.Label>Question</Form.Label>
                                        <Form.Control type="text" placeholder="Enter the question" value={details.q[currentPage-1].question} onChange={(e) => {details.q[currentPage-1].question=e.target.value;setDetails({...details})}} required />
                                    </Form.Group>
                                    <Form.Group className="mt-3">
                                        <Form.Label>Options</Form.Label>
                                        {details.q[currentPage-1].option.map((option, index) => (
                                          <div style={{ display: "flex" }} key={index}>
                                            <Form.Control className={style.options} type="text" placeholder={`Option ${index + 1}`} value={option} onChange={(e) => {details.q[currentPage-1].option[index]=e.target.value;setDetails({...details})}} />
                                            <button className={style.add} onClick={()=>{details.q[currentPage-1].option.splice(index,1);setDetails({...details})}}>X</button>
                                       
                                           </div>
                                        ))}
                                        <button className={style.add} onClick={()=>{details.q[currentPage-1].option.push("");setDetails({...details})}}>+</button>
                                    </Form.Group>
                                    <Form.Group className="mt-3">
                                        <Form.Label>Correct Answer</Form.Label>
                                        <Form.Control as="select" value={details.q[currentPage-1].correctAnswer} onChange={(e) =>{details.q[currentPage-1].correctAnswer=e.target.value;;setDetails({...details})}} required>
                                            {details.q[currentPage-1].choises.map((option, index) => (
                                                <option key={index} value={details.q[currentPage-1].choises[index]}>
                                                    {`Option ${index + 1}`}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mt-3">
                                        <Form.Label>Mark</Form.Label>
                                        <Form.Control type="number" min="1" placeholder="Enter the mark for the question" value={details.q[currentPage-1].mark} onChange={(e) => {details.q[currentPage-1].mark=e.target.value;setDetails({...details})}} required />
                                    </Form.Group>
                                    <Form.Group className="mt-3">

                                        <Form.Label>Explanation</Form.Label>
                                        <Form.Control as="textarea" placeholder="Enter the explanation for the question" rows={3} value={details.q[currentPage-1].explanation} onChange={(e) => {details.q[currentPage-1].explanation=e.target.value;setDetails({...details})}} required />
                                    </Form.Group>
                                    <Form.Group className="mt-3">
                                        <Form.Label>Mode</Form.Label>
                                        <Form.Control as="select" value={details.q[currentPage-1].mode} onChange={(e) => {details.q[currentPage-1].mode=e.target.value;setDetails({...details})}} required>
                                            <option value="easy">Easy</option>
                                            <option value="medium">Medium</option>
                                            <option value="hard">Hard</option>
                                           
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </Col>

                            <Col sm={1} md={2} lg={3}></Col>
                        </Row>
                    </Container>
                 
                  ):(<></>)}
                    <Container>
                    <br/>
                    <Row>
                      <Col  sm={12} sx={12} md={3} lg={3} xl={3} xxl={3}>
                      {currentPage>1 && flag?( <center>
                         <button className={style.qbtn} onClick={()=>{setCurrentPage(currentPage-1)}}>Prev Question</button>
                         </center>):(<></>)}
             
                      </Col>
                      <Col  sm={12} sx={12} md={3} lg={3} xl={3} xxl={3}>
                       
                      {currentPage<details.q.length && flag?( <center>
                         <button className={style.qbtn}>Delete</button>
                         </center>):(<></>)}
                      </Col>
                      <Col  sm={12} sx={12} md={3} lg={3} xl={3} xxl={3}>
                      {flag?( <center>
                         <button className={style.qbtn} onClick={()=>{
                          if(currentPage<details.q.length)
                          {
                            save(false);
                          }
                          else
                          {
                            save(true);
                          }
                         }}>{currentPage<details.q.length?"Update And Next":"Save And Next"}</button>
                         </center>):(<></>)}
                      </Col>
                      <Col  sm={12} sx={12} md={3} lg={3} xl={3} xxl={3}>
                      {currentPage<details.q.length && flag?( <center>
                         <button className={style.qbtn} onClick={()=>{setCurrentPage(currentPage+1)}}>Next Question</button>
                         </center>):(<></>)}
                      </Col>
                    </Row>
                    </Container>

                </Container>
            </Container>
        </>
    )
}