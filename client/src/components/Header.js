import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';

class Header extends Component{

  render() {
    return (
      <Navbar color="dark" expand="md">
        <NavbarBrand tag={Link} to="/">
          Home
        </NavbarBrand>
        <Nav className="" navbar>
          <NavItem className="text-light">
            <NavLink tag={Link} to="/new">
              Post New Blog
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;