import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './Progress.css'

import {
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  ProgressBar,
} from "react-bootstrap";

function Progress({ test_status }) {
  const easy = test_status.easy.value;
  const medium = test_status.medium.value;
  const hard = test_status.hard.value;

  const easy_total = test_status.easy.total;
  const medium_total = test_status.medium.total;
  const hard_total = test_status.hard.total;

  const easy_percent = ((easy / easy_total) * 100).toFixed(1);
  const medium_percent = ((medium / medium_total) * 100).toFixed(1);
  const hard_percent = ((hard / hard_total) * 100).toFixed(1);

  const total_tests =
    parseInt(easy_total) + parseInt(medium_total) + parseInt(hard_total);
  const total_completed_tests = (
    parseInt(easy) +
    parseInt(medium) +
    parseInt(hard)
  ).toFixed(1);
  const total_percent = ((total_completed_tests / total_tests) * 100).toFixed(
    1
  );

  return (
    <>
      <Card
        className="user_profile_progress_card"
        style={{ width: "100%", height: "auto" }}
      >
        <Card.Body>
          <Container fluid>
            <Row className="progress-row">
              <Col md="auto" className="progress-col">
                <div style={{ width: "150px" }}>
                  <CircularProgressbarWithChildren
                    styles={buildStyles({
                      pathColor: "#18354C",
                      trailColor: "#d6d6d6",
                    })}
                    value={total_percent}
                  >
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                      <strong>{`${total_percent}%`}</strong>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              </Col>
              <Col className="list-col">
                <ListGroup className="status-section" variant="flush">
                  <ListGroup.Item>{`Easy: ${easy}/${easy_total}`}</ListGroup.Item>
                  <ProgressBar
                    now={easy_percent}
                    label={`${easy_percent}%`}
                    className="progress-bar-easy"
                    style={{ backgroundColor: "#00bfff" }}
                  />
                  <ListGroup.Item>{`Medium: ${medium}/${medium_total}`}</ListGroup.Item>
                  <ProgressBar
                    now={medium_percent}
                    label={`${medium_percent}%`}
                    className="progress-bar-medium"
                    style={{ backgroundColor: "#ff6347" }}
                  />
                  <ListGroup.Item>{`Hard: ${hard}/${hard_total}`}</ListGroup.Item>
                  <ProgressBar
                    now={hard_percent}
                    label={`${hard_percent}%`}
                    className="progress-bar-hard"
                    style={{ backgroundColor: "#00ff7f" }}
                  />
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

export default Progress;
