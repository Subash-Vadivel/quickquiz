import React from 'react'
import about_styles from '../../User_css/about.module.css'
import {Card,Container,Row} from 'react-bootstrap'

export default function TermsCondition() {
  return (
    <>
    <div className={about_styles.hr}><span><b>Temrs & Conditions</b></span></div>
    <br></br> 
    <Container>
    <Card className={about_styles.card}>
    <Card.Title><center>QuickQuiz</center></Card.Title>
    <Card.Body>
   Welcome to Quickquiz, a technical learning and quiz platform designed to enhance your knowledge and skills. By using our platform, you agree to the following terms and conditions:

<Row>1. Account Creation: You must create an account with Quickquiz to access our platform. When creating an account, you must provide accurate and complete information about yourself. You are responsible for maintaining the confidentiality of your login credentials and all activities that occur under your account.</Row>

<Row>2. Age Restrictions: Quickquiz is designed for individuals who are 13 years of age or older. If you are under 13 years of age, you may not use our platform.</Row>

<Row>3. Platform Usage: Quickquiz provides a platform for technical learning and quizzes. You agree to use our platform only for lawful purposes and in accordance with these terms and conditions. You must not use our platform for any illegal or unauthorized purpose.</Row>

<Row>4. Prohibited Activities: You must not engage in any activity that disrupts or interferes with our platform, including but not limited to hacking, scraping, or attempting to access our platform without permission. You must not upload, post, or transmit any content that is unlawful, harmful, threatening, abusive, defamatory, vulgar, obscene, invasive of another's privacy, or otherwise objectionable.</Row>

<Row>5. Intellectual Property: Quickquiz owns all intellectual property rights in our platform, including but not limited to trademarks, copyrights, and patents. You agree not to use any of our intellectual property without our prior written consent.</Row>

<Row>6. User-Generated Content: You may upload or post content on our platform, including but not limited to comments and questions. You retain ownership of all content that you upload or post on our platform, but you grant us a non-exclusive, worldwide, royalty-free, transferable license to use, modify, and distribute your content.</Row>

<Row>7. Termination: Quickquiz reserves the right to terminate your account at any time, without notice, for any reason or no reason. You may also terminate your account at any time by contacting us.</Row>

<Row>8. Disclaimer of Warranties: Quickquiz provides our platform "as is" and without any warranty or guarantee. We do not guarantee that our platform will be free of errors or uninterrupted. We disclaim all warranties, express or implied, including but not limited to warranties of merchantability and fitness for a particular purpose.</Row>

<Row>9. Limitation of Liability: In no event will Quickquiz be liable to you or any third party for any damages, including but not limited to direct, indirect, incidental, special, or consequential damages, arising out of your use of our platform or your inability to use our platform.</Row>

<Row>10. Indemnification: You agree to indemnify and hold Quickquiz, its affiliates, officers, agents, and employees harmless from any claim, demand, or damage, including reasonable attorneys' fees, arising out of your use of our platform or your violation of these terms and conditions.</Row>

<Row>11. Governing Law: These terms and conditions will be governed by and construed in accordance with the laws of the jurisdiction in which Quickquiz operates.</Row>

<Row>12. Modification: Quickquiz reserves the right to modify these terms and conditions at any time, without notice, by posting the revised terms and conditions on our platform. Your continued use of our platform after the posting of the revised terms and conditions constitutes your agreement to the revised terms and conditions.</Row>

By using Quickquiz, you acknowledge that you have read and understood these terms and conditions, and you agree to be bound by them. If you do not agree to these terms and conditions, you may not use our platform.
    </Card.Body>
    </Card>
    </Container>
    </>
  )
}
