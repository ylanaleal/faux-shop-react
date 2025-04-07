import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import logo from '../assets/images/fauxShop.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar style={{ backgroundColor: '#000' }} dark expand="md">
        <NavbarBrand>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'black',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            {' '}
            <img
              src={logo}
              width="50px;"
              style={{
                paddingRight: '5px',
                marginRight: '5px',
              }}
            />
            <span style={{ color: '#fff' }}>Faux Shop</span>
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" style={{ color: 'black' }}>
                <span style={{ color: '#fff' }}>Home</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/cart" style={{ color: 'black' }}>
                <span style={{ color: '#fff' }}>Cart</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/login" style={{ color: 'black' }}>
                <span style={{ color: '#fff' }}>Login</span>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
