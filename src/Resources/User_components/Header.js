import '../css/header.css';
// import logo from '../images/newlogo5.png';

// import logo from '../images/DriveAwayLogo.png';
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
      {
            console.log(props.user.uid)
      }
      <Navbar className="color-nav" collapseOnSelect fixed="top" expand='md'>
            <Container>
                  <Navbar.Brand>
                              <div className="logo-wrapper">
                              < img src="" alt="logo"/>
                              </div>
                  </Navbar.Brand>

                  <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                  <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ms-auto'>
                              <Nav.Link className='nav-link'  onClick={()=>{navigate('/')}}>Home</Nav.Link>
                              <Nav.Link className='nav-link'  onClick={()=>{navigate('practice')}} >Practice</Nav.Link>
                              <Nav.Link className='nav-link' onClick={()=>{navigate('compete')}}>Compete</Nav.Link>
                              <Nav.Link className='nav-link' onClick={()=>{navigate('profile')}}>Compete</Nav.Link>
                              <Nav.Link className='nav-link' onClick={auth.logout}>Log Out</Nav.Link>                           
                        </Nav>
                  </Navbar.Collapse>
            </Container>
      </Navbar>
    
</>
    );
}
export default Header;