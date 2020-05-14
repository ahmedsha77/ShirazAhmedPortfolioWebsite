import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';

export default class Navybar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color='faded' dark>
          <NavbarBrand href="/" className="mr-auto" style={{color: 'lightgray'}} >Portfolio Website</NavbarBrand>
          <Button color="light">LinkedIn</Button>{' '}
          &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;
          <Button color="light">Github</Button>{' '}

        </Navbar>
      </div>
    );
  }
}
