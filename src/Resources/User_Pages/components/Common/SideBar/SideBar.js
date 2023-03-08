import React from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import "./SideBar.css";

const Sidebar = ({ username, profileImageUrl, completedCourses }) => (
  <Container fluid>
    <br />
    <Row className="align-items-center">
      <Col xs={4} md={3}>
        <div class="user_photo-container">
          <svg viewBox="0 0 220 220">
            <circle
              shape-rendering="geometricPrecision"
              class="user_indicator"
              cx="110"
              cy="110"
              r="96"
            />
          </svg>
          <div class="user_img-box">
            <img
              className="user_profile_image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5QosVId6p_7TpOxmBapAiJHQk_RA8KLySg&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </Col>
      <Col xs={8} md={9}>
        <h4 className="profile-username">{username}</h4>
      </Col>
    </Row>
    <br />
    <Row>
      <Col>
        <ListGroup variant="flush">
          <ListGroup.Item active style={{ backgroundColor: "#18354C" }}>
            Completed Courses
          </ListGroup.Item>
          {completedCourses.map((course, index) => (
            <ListGroup.Item key={index}>{course}</ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  </Container>
);

export default Sidebar;
