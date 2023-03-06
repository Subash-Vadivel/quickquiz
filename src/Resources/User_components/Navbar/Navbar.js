import React from 'react'
import './navbar.css'
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { useAuth } from '../../../Authentication';

function NavBar() {
  const auth = useAuth();
  const menuData = [
    {
      path: '/',
      name: "Learn"
    },
    {
      path: '/practice',
      name: "Practice"
    },
    {
      path: '/test',
      name: "Test"
    }
  ]
  return (
    <>
      <Navbar className='user-navbar' expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="user_brand">Quick Quiz</Navbar.Brand>
          <Navbar.Toggle className='user_navbar_toggle' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          { !auth.user &&
            <>
              <Nav className="ms-auto">
                {menuData.map((item) => (
                  <NavLink to={item.path} key={item.name}>
                    <div className='user_list_item'>{item.name}</div>
                  </NavLink>
                ))}
              </Nav>
              <Nav className="ms-auto">
                  <button className='btn btn-success user_btn'>Profile</button>
              </Nav>
            </>
          }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar