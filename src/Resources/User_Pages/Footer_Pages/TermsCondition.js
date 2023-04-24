import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
export default function TermsCondition() {
  return (
    <Container>
    <h1 className="text-center mt-5 mb-4">Terms and Conditions</h1>
    <Row>
      <Col md={10} lg={8} className="mx-auto">
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h2>General Terms:</h2>
            <ul>
              <li>QuickQuiz.rido.live is a platform that provides online quizzes for entertainment and educational purposes only.</li>
              <li>By using this platform, you acknowledge that you are at least 18 years old or that you have obtained consent from your parent or legal guardian.</li>
              <li>QuickQuiz.rido.live reserves the right to modify or update these terms and conditions at any time without prior notice.</li>
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>User Conduct:</h2>
            <ul>
              <li>Users agree to use the platform for lawful purposes only and to refrain from any activity that violates any applicable laws or regulations.</li>
              <li>Users must not submit any content that is defamatory, harmful, abusive, obscene, or illegal.</li>
              <li>Users are solely responsible for the content they submit to the platform, and QuickQuiz.rido.live will not be liable for any damages resulting from user-submitted content.</li>
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Intellectual Property:</h2>
            <ul>
              <li>QuickQuiz.rido.live owns all the intellectual property rights to the website and its contents, including text, graphics, logos, and images.</li>
              <li>Users agree not to reproduce, modify, distribute, or exploit any part of the website without prior written consent from QuickQuiz.rido.live.</li>
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Limitation of Liability:</h2>
            <ul>
              <li>QuickQuiz.rido.live shall not be liable for any damages, including but not limited to direct, indirect, incidental, punitive, or consequential damages, arising out of or in connection with the use of the platform.</li>
              <li>QuickQuiz.rido.live shall not be liable for any loss or damage resulting from any interruption, error, delay, or other malfunction of the website.</li>
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Indemnification:</h2>
            <ul>
              <li>Users agree to indemnify and hold harmless QuickQuiz.rido.live and its affiliates, officers, directors, employees, and agents from any claim, demand, or damages arising out of or in connection with the use of the platform or any user-submitted content.</li>
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Governing Law:</h2>
            <ul>
              <li>These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which QuickQuiz.rido.live is based.</li>
              <li>Any dispute arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of the jurisdiction in which QuickQuiz.rido.live is based.</li>
            </ul>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      </Row>
      </Container>



        )
}
