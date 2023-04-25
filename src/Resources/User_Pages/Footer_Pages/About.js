import React from 'react'
import about_styles from '../../User_css/about.module.css'
import {Card,Container} from 'react-bootstrap'

export default function ContactUs() {
  return (
    <>
    <div className={about_styles.hr}><span><b>About</b></span></div>
    <br></br> 
    <Container>
    <Card className={about_styles.card}>
        <Card.Title><center>QuickQuiz</center></Card.Title>
        <Card.Body>
        Quickquiz is likely a web-based platform that offers a variety of technical courses and quizzes to help individuals learn and test their knowledge in different areas of technology. The platform may provide content in various formats such as videos, tutorials, articles, and interactive quizzes.

Users can sign up for an account on the platform, choose the courses they are interested in, and start learning. After completing a course or lesson, users can take quizzes or assessments to measure their understanding and progress. Quickquiz may also offer certification or badges to users who complete courses and perform well on quizzes.

Overall, Quickquiz is a useful platform for individuals who want to enhance their technical knowledge and skills. It offers a structured learning environment and provides users with a way to test their understanding and track their progress over time.
        </Card.Body>
    </Card>
    </Container>
    </>
  )
}
