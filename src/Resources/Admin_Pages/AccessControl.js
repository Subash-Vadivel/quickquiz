import React from 'react'
import style from '../Admin_css/accesscontrol.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Popup from 'reactjs-popup';

import axiosPrivate from '../../Api/axiosPrivate';
import { Button, Row ,Form,Col,Container,ButtonGroup} from 'react-bootstrap';
// const userData = [
//   { name: 'John Doe', email: 'johndoe@example.com', sno: 1, isAdmin: true, isModerator: false },
//   { name: 'Jane Smith', email: 'janesmith@example.com', sno: 2, isAdmin: false, isModerator: true },
//   { name: 'Bob Johnson', email: 'bobjohnson@example.com', sno: 3, isAdmin: false, isModerator: false },
// ]

export default function AccessControl() {
    
const [userData,setUserDate]=useState([]);
const [flag,setFlag]=useState(false);
const [flag2,setFlag2]=useState(false);

const [email,setEmail]=useState('');
const [role,setRole]=useState('isStaff');
const load=async()=>{
   await axiosPrivate.get("/user/getmoderators").then((res)=>{setUserDate(res.data.data)}).catch((err)=>{console.log(err)})
}
useEffect(()=>{
    load();
})
const togglePopup = () => {
    setFlag(!flag);
  }
  
const togglePopup2 = () => {
    setFlag2(!flag2);
  }

  const handleSubmitAdd=async(e)=>{
    
    e.preventDefault();
    await axiosPrivate.post("/user/addmoderator",{email,role}).then((res)=>{togglePopup()}).catch((err)=>{console.log(err)})
    setEmail('');
  }
  const handleSubmitRemove=async(e)=>{
    e.preventDefault();

    await axiosPrivate.post("/user/removemoderator",{email}).then((res)=>{togglePopup2()}).catch((err)=>{console.log(err)})
    setEmail('');
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
    <Form >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email:</Form.Label>
    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  </Form.Group>

  <Form.Group controlId="formBasicRole">
    <Form.Label>Role:</Form.Label>
    <Form.Control as="select" value={role} onChange={(e) => setRole(e.target.value)}>
      <option value="isStaff">Moderator</option>
      <option value="isAdmin">Admin</option>
    </Form.Control>
  </Form.Group>
  <br/>
  <ButtonGroup className="d-flex justify-content-center my-3">
    <Button type="submit" variant="success" onClick={handleSubmitAdd}>Update</Button>
    <Button type="button" variant="danger" onClick={togglePopup}>Cancel</Button>
  </ButtonGroup>
</Form>

 

  </Popup>
}


{flag2 && 
    <Popup
    
    open={flag2}
    onClose={togglePopup2}
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
    <Form >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email:</Form.Label>
    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  </Form.Group>

  <br/>
  <ButtonGroup className="d-flex justify-content-center my-3">
    <Button type="submit" variant="success" onClick={handleSubmitRemove}>Remove Access</Button>
    <Button type="button" variant="danger" onClick={togglePopup2}>Cancel</Button>
  </ButtonGroup>
</Form>

 

  </Popup>

}
        <Container>
        <Row className="text-center mt-3">
            <Col>
        <Button onClick={()=>setFlag(true)}>Add Moderator</Button> {" "}{" "}
        <Button onClick={()=>setFlag2(true)} variant='danger'>Remove Moderator</Button>

        </Col>
        </Row>
        </Container>
    <div className={style.tableContainer}>
      <table className={style.userTable}>
        <thead>
          <tr>
            <th className={style.columnHeader}>Sno</th>
            <th className={style.columnHeader}>Name</th>
            <th className={style.columnHeader}>Email</th>
            <th className={style.columnHeader}>Status</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td className={style.tableCell}>{index+1}</td>
              <td className={style.tableCell}>{user.firstName}</td>
              <td className={style.tableCell}>{user.email}</td>
              <td className={style.tableCell}>{user.isAdmin ? 'Admin' : user.isStaff ? 'Moderator' : 'Regular User'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}
