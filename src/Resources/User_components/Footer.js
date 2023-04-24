import style from '../User_css/footer.module.css';
import { Row,Col,Container } from 'react-bootstrap';
import logofoot from '../User_images/logo.png'
import { SocialIcon } from 'react-social-icons';
import {useNavigate} from 'react-router-dom';
function Footer()
{
    
    const navigate = useNavigate();
    return(<>
    <Container className={style.footerTop}>
        <span className={style.footerTopItem}><img src={logofoot} alt="..."/></span>
    </Container>
    <Container fluid className={style.footerMain}>
        <Row className={style.footRow}>
            <Col md={3} sm={6}  xs={6}><ul type="none" className={style.footLi}>
                <li onClick={()=>{navigate('/about')}}>About Quick Quiz</li>
                <li onClick={()=>{navigate('/')}}>Home</li>
                <li onClick={()=>{navigate('/contactus')}}>Contact Us</li>
                <li onClick={()=>{navigate('/practice')}}>Practice</li>
                <li  onClick={()=>{navigate('/support')}}>Support</li>
                <li>Careers</li>
                <li>Blog</li>
                </ul></Col>
            <Col md={3} sm={6} xs={6}>
                <ul type="none" className={style.footLi}>
                    <li>Info</li>
                    <li onClick={()=>{navigate('/test')}}>Compete</li>
                    <li>Business Partner</li>
                    <li onClick={()=>{navigate('/becomeamember')}}>Become a Member</li>
                    <li onClick={()=>
                    {
                        window.location.href="https://www.freeprivacypolicy.com/live/acd31768-fe6b-4bee-b4dd-28d76fe45b06";
                    }
                    }>Privacy Policy</li>
                    <li onClick={()=>{navigate('/terms&conditions')}}>Terms & Conditions</li>
                    {/* &#38; */}
                </ul>
            </Col>
            <Col md={6}>
            <ul type="none" className={style.footLi}>
                <li>Availability</li>
                <li>We are in</li>
                <br></br>
                <SocialIcon url="https://jaketrent.com" bgColor="#4267B2" fgColor="#FEFEFE" network="facebook" style={{marginRight:"20px"}}/>
                <SocialIcon url="https://jaketrent.com" bgColor="#4267B2" fgColor="#FEFEFE" network="instagram" style={{marginRight:"20px"}}/>
                <SocialIcon url="https://jaketrent.com" bgColor="#4267B2" fgColor="#FEFEFE" network="twitter" style={{marginRight:"20px"}}/>
                </ul>
                </Col>
        </Row>
    </Container>
    <Container fluid className={style.footerEnd}>
        <p className={style.footerEndTxt}>© 2023 Team Alpha. All rights reserved.</p>
    </Container>
    </>);
}
export default Footer;