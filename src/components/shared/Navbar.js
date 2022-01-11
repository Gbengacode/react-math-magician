/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  MobileIcon,
} from '../../assets/styles/NavBarStyle';
import SideBar from './SideBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpenProps={isOpen} toggleProps={toggle} />
      <Nav>
        <NavContainer>
          <NavLogo to="/">Maths Magician</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/calculator">Calculator</NavLink>
              <NavLink to="/quote">Quote</NavLink>
            </NavItem>
          </NavMenu>
          <MobileIcon>
            <FaBars onClick={toggle} />
          </MobileIcon>
        </NavContainer>
      </Nav>
    </>

  );
};
export default Navbar;
