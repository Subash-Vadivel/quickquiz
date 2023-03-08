import style from '../User_css/header.module.css';
import logo from '../User_images/logo.png'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar,Container } from 'react-bootstrap';

import {useNavigate} from 'react-router-dom';
import { useAuth } from '../../Authentication';
function Header(props)
{
    const auth=useAuth();
      const navigate = useNavigate();
   return(
      <>
      <Navbar className={style.colorNav} collapseOnSelect  expand='md'>
            <Container>
                  <Navbar.Brand>
                              <div className={style.logoWrapper}>
                              < img src={logo} alt="logo"/>
                              </div>
                  </Navbar.Brand>

                  <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                  <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ms-auto'>
                              <Nav.Link className={style.navLink}  onClick={()=>{navigate('/')}}>Home</Nav.Link>
                              <Nav.Link className={style.navLink}  onClick={()=>{navigate('practice')}} >Practice</Nav.Link>
                              <Nav.Link className={style.navLink} onClick={()=>{navigate('test')}}>Compete</Nav.Link>
                              <Nav.Link className={style.navLink} onClick={()=>{navigate('profile')}}>Profile</Nav.Link>
                              <Nav.Link className={style.navLink} onClick={auth.logout}>Log Out</Nav.Link>                           
                        </Nav>
                  </Navbar.Collapse>
            </Container>
      </Navbar>
    
</>
    );
}
export default Header;