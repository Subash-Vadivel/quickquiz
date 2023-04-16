import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Timer(props) {
  const [seconds, setSeconds] = useState(props.timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);

    const hour = Math.floor(seconds / 3600);
    const remin = seconds % 3600;
    const minutes = Math.floor(remin / 60);
    const remainingSeconds = remin % 60;

    if (hour === 0 && minutes === 0 && remainingSeconds === 0) {
      clearInterval(interval);
      props.submit();
    }

    return () => clearInterval(interval);
  }, [seconds]);

  const hour = Math.floor(seconds / 3600);
  const remin = seconds % 3600;
  const minutes = Math.floor(remin / 60);
  const remainingSeconds = remin % 60;

  return (
    <Container>
      <Row>
        <Col>
          <h3>
            {hour}:{minutes < 10 ? '0' : ''}{minutes}:{remainingSeconds < 10 ? '0' : ''}{remainingSeconds}
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Timer;
