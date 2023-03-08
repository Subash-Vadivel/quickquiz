import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <Container>
      <Row>
        <Col>
          <h3>{minutes}:{remainingSeconds < 10 ? '0' : ''}{remainingSeconds}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Timer;