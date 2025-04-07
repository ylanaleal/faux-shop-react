import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

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
  const { user, logout } = useAuth();
  const { cartItems } = useCart();

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
            <span
              style={{
                color: '#fff',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                fontSize: '1.5rem',
              }}
            >
              Faux Shop
            </span>
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

            {user && (
              <NavItem>
                <NavLink tag={Link} to="/cart">
                  <span style={{ color: '#fff' }}>Cart</span>
                </NavLink>
              </NavItem>
            )}

            <NavItem>
              {user ? (
                <NavLink
                  onClick={logout}
                  style={{
                    color: '#fff',
                    cursor: 'pointer',
                  }}
                >
                  Sair
                </NavLink>
              ) : (
                <NavLink tag={Link} to="/login">
                  <span style={{ color: '#fff' }}>Login</span>
                </NavLink>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
