import React from "react";
import styles from './PreviousTest.module.css'
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";

function PreviousTestList({ tests }) {
  
  return (
    <>
      <Container>
        <Row>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item active style={{ backgroundColor: "#18354C" }}>
                Completed Test
              </ListGroup.Item>
              {tests.map((test) => (
                <ListGroup.Item key={test._id}>
                <Row>
                  <Col sm={8}>
                  <h4 className={styles.testName}>{test.qnName}</h4>
                  <p className={styles.testDate}>{new Date(test.updatedAt).toUTCString()}</p>
                  </Col>
                  <Col sm={4}>
                  <p className={styles.testScore}>Correct Answers: {test.correctanswers}/{test.totalquestions}</p>
                  <p className={styles.testScore}>Score : {test.score}/{test.totalscore}</p>
                  </Col>
                </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PreviousTestList;
