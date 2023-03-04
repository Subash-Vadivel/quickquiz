import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>Sidebar</Col>
        <Col md={9}>Main Content</Col>
      </Row>
    </Container>
  );
};

export default Dashboard;