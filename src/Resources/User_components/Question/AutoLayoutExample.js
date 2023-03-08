import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import Sidebar from '../sidebar';
import Timer from '../src/timer';
function AutoLayoutExample() {
  return (
    <div className='container-fluid'>
    <br/>
    <>
    <header className='shadow no-padding'>
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
  </header>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
    <>
    <Row>
    <Col md={4} >
    <div>
       <h5>Question 1</h5>
      <h6 style={{ display: 'inline-block', marginRight: '10px'}}>Multi Choice Type Question</h6>
      <h6 style={{ display: 'inline-block',float:'right' }}>Marks:1</h6> 
      <p>The last day of century cannot be:</p>
    </div>
  </Col>
      <Col md={5} >
      <br/>
        <Form.Control type="text" placeholder="Monday" onMouseOver={(e) => e.target.style.cursor = "pointer"} readOnly /> <br/>
        <Form.Control type="text" placeholder="Wednesday" onMouseOver={(e) => e.target.style.cursor = "pointer"}readOnly /> <br/>
        <Form.Control type="text" placeholder="Friday" onMouseOver={(e) => e.target.style.cursor = "pointer"}readOnly /> <br/>
        <Form.Control type="text" placeholder="Tuesday" onMouseOver={(e) => e.target.style.cursor = "pointer"} readOnly /> <br/>
        <Button variant="danger">Clear</Button>{' '}
        <br/>
        <br/>
      </Col>
      <Col md={3} className="text-end">
       <Sidebar/>
      </Col>
    </Row>
      <br/>
      <footer style={{textAlign:"center"}}>
      <Button variant="primary" size="md">
        back
      </Button>{' '}
      <Button variant="primary" size="md">
      next
    </Button>{' '}
    </footer>
      </>
    </div>
  );
}

export default AutoLayoutExample;