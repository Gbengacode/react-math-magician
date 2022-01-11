/* eslint-disable react/prop-types */
import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from '../../assets/styles/SideBarStyle';

const SiderBar = ({ isOpenProps, toggleProps }) => (
  <SidebarContainer isOpen={isOpenProps} onClick={toggleProps}>
    <Icon>
      <CloseIcon />
    </Icon>
    <SidebarMenu>
      <SidebarLink to="/">Home</SidebarLink>
      <SidebarLink to="/calculator">Calculator</SidebarLink>
      <SidebarLink to="/quote">Quote</SidebarLink>
    </SidebarMenu>
  </SidebarContainer>
);

export default SiderBar;
