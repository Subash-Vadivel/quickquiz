import React from 'react'
import './NavBar.css'
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { useAuth } from '../../../../../Authentication';
import {MdOutlineMarkChatUnread} from 'react-icons/md'
import {MdOutlineMarkChatRead } from 'react-icons/md'
import {GiNotebook} from 'react-icons/gi'

function NavBar() {
  const auth = useAuth();
  const menuData = [
    {
      path: "/",
      name: "Learn",
      icon: MdOutlineMarkChatUnread,
    },
    {
      path: "/practice",
      name: "Practice",
      icon: MdOutlineMarkChatRead,
    },
    {
      path: "/test",
      name: "Test",
      icon: GiNotebook,
    },
  ];
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
                    {/* < {item.icon} className='user_nav_icons' /> */}
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

export default NavBar