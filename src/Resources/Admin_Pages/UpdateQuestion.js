import React from 'react'
import { Button, Row ,Form,Col,Container,ButtonGroup} from 'react-bootstrap';
import style from '../Admin_css/updatequestion.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axiosPrivate from '../../Api/axiosPrivate';
import {FaSearch} from 'react-icons/fa'

export default function UpdateQuestion() {
 const [userData,setuserdata]=useState([]);
 const [searchTerm, setSearchTerm] = useState('');

const load=async(req,res)=>{
    await axiosPrivate.get("/question").then((res)=>{setuserdata(res.data.data.allQuestions)}).catch((err)=>{console.log(err)});
}
 useEffect(()=>{
    load();
 },[])

  return (
<>
<Container className={style.search}style={{ display: 'flex', flexDirection: 'row' }}>
    <Button style={{ width: '3%' }} className={`shadow-none ${style.button}`} variant = 'light'><FaSearch style={{'color':' rgba(71,11,130,1)'}}/></Button>
    <Form Style={ "width:97% "}>
      <Form.Control  type="text"  value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
             placeholder="Search username" className={`mr-sm-2 shadow-none ${style.searchbar}`} />
    </Form>
    
  </Container>
    <div className={style.tableContainer}>
      <table className={style.userTable}>
        <thead>
          <tr>
            <th className={style.columnHeader}>Sno</th>
            <th className={style.columnHeader}>Topic</th>
            <th className={style.columnHeader}>Name</th>
            <th className={style.columnHeader}>Mode</th>
            <th className={style.columnHeader}>Date</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td className={style.tableCell}>{index+1}</td>
              <td className={style.tableCell}>{user.categoryName}</td>
              <td className={style.tableCell}>{user.topic}</td>
              <td className={style.tableCell}>{user.mode}</td>
              <td className={style.tableCell}>{user.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</>  )
}
