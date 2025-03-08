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

import logo from '../assets/images/villa-pet-logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar style={{ backgroundColor: '#A3B7A9' }} dark expand="md">
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
              style={{ paddingRight: '5px', marginRight: '5px' }}
            />
            Villa Pet Hotel
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" style={{ color: 'black' }}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/sobre" style={{ color: 'black' }}>
                Sobre
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contato" style={{ color: 'black' }}>
                Contato
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
