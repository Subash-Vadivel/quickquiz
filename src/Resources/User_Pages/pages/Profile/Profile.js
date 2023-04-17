import React from 'react'
import BadgeCard from '../../components/Common/Badge/BadgeCard';
import PreviousTestsList from '../../components/Common/PreviousTest/PreviousTest';
import Progress from '../../components/Common/ProgressBar/Progress';
import Sidebar from '../../components/Common/SideBar/SideBar';
import { Card } from 'react-bootstrap';
import './Profile.css'

function Profile() {
  const username = "Roshi";
  const profileImageUrl = "https://icon_url";
  const completedCourses = [
    "React Fundamentals",
    "React Hooks",
    "React Bootstrap",
  ];

  const courses = [
    {
      id: 1,
      name: "HTML",
      totalModules: 10,
      completedModules: 5,
    },
    {
      id: 2,
      name: "CSS",
      totalModules: 8,
      completedModules: 4,
    },
    {
      id: 3,
      name: "JS",
      totalModules: 6,
      completedModules: 2,
    },
    {
      id: 4,
      name: "React",
      totalModules: 12,
      completedModules: 6,
    },
    {
      id: 5,
      name: "Node",
      totalModules: 8,
      completedModules: 3,
    },
    {
      id: 6,
      name: "MongoDB",
      totalModules: 6,
      completedModules: 2,
    },
    {
      id: 7,
      name: "Node",
      totalModules: 8,
      completedModules: 3,
    },
    {
      id: 8,
      name: "MongoDB",
      totalModules: 6,
      completedModules: 2,
    },
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

  
  const test_status = {
    easy: { value: "15", total: "35" },
    medium: { value: "10", total: "20" },
    hard: { value: "5", total: "10" },
  };
  return (
    <>
    <div className="user_profile_hr"><span><b>Profile</b></span></div>
    {/* <Card className="user_profile_headcontainer">
          <Card.Body className="user_profile_cardbody">
            <Card.Title className="user_profile_title"></Card.Title>
          </Card.Body>
    </Card>
    <br></br>   */}
      <div className="user_profile_container">
        <div className="user_profile_sidebar">
          <Sidebar
            username={username}
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
              <BadgeCard courses={courses} />
            </>
          </div>
          <div className="user_profile_tests" style={{ width: "100%" }}>
            <>
              <PreviousTestsList tests={tests} />
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile