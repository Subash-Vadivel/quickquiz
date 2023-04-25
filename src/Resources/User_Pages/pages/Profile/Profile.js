import React, { useEffect, useState } from 'react'
import BadgeCard from '../../components/Common/Badge/BadgeCard';
import PreviousTestsList from '../../components/Common/PreviousTest/PreviousTest';
import Progress from '../../components/Common/ProgressBar/Progress';
import Sidebar from '../../components/Common/SideBar/SideBar';
import { Card } from 'react-bootstrap';
import './Profile.css'
import { useAuth } from '../../../../Authentication';
import axiosPrivate from '../../../../Api/axiosPrivate';

function Profile() {
const id=JSON.parse(useAuth().details).user_id;
const [flag,setflag]=useState(false);
const [data,setdata]=useState();
const [test_status,setteststatus]=useState({})
const load=async()=>{
await axiosPrivate.post('/user/userdetails',{uid:id}).then((res)=>{setdata(res.data.data);
  console.log(res.data.data.medium);
  setteststatus({
    easy: { value: res.data.data.easy, total: res.data.easyCount },
    medium: { value: res.data.data.medium, total: res.data.mediumCount },
    hard: { value: res.data.data.hard, total: res.data.hardCount },
  });
  
  setflag(true);console.log(res.data)}).catch((err)=>{console.log(err)});
}
   useEffect(()=>{
load();
   },[])


  const username = "Roshi";
  const profileImageUrl = "https://icon_url";
  const completedCourses = [
    "React Fundamentals",
    "React Hooks",
    "React Bootstrap",
  ];

  

  const tests = [
    {
      id: 1,
      name: "Test 1",
      date: "2022-03-05",
      score: 85,
    },
    {
      id: 2,
      name: "Test 2",
      date: "2022-02-20",
      score: 70,
    },
    {
      id: 3,
      name: "Test 3",
      date: "2022-01-15",
      score: 60,
    },
  ];

  
  // const test_status = {
  //   easy: { value: "15", total: "35" },
  //   medium: { value: "10", total: "20" },
  //   hard: { value: "5", total: "10" },
  // };
  return (
    <>
    {
      flag?
    (
<>
    <div className="user_profile_hr"><span><b>Profile</b></span></div>
    {/* <Card className="user_profile_headcontainer">
          <Card.Body className="user_profile_cardbody">
            <Card.Title className="user_profile_title"></Card.Title>
          </Card.Body>
    </Card> */}
    <br></br>  
      <div className="user_profile_container">
        <div className="user_profile_sidebar">
          <Sidebar
            username={data.firstName}
            profileImageUrl={profileImageUrl}
            completedCourses={completedCourses}
          />
        </div>
        <div className="user_profile_content" >
          <div className="user_profile_progress">
            <Progress test_status={test_status} />
          </div>
          <div className="user_profile_badges" style={{ width: "100%" }}>
            <>
              {/* <BadgeCard courses={courses} /> */}
            </>
          </div>
          <div className="user_profile_tests" style={{ width: "100%" }}>
            <>
              <PreviousTestsList tests={data.test} />
            </>
          </div>
        </div>
      </div>
     </> 
      ):(<p>Loading</p>)}
    </>
  );
}

export default Profile