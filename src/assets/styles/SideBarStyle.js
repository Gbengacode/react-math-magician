import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #534798;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}

`;

export const CloseIcon = styled(FaTimes)`
color: #fff

`;
export const Icon = styled.div`
position:absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SidebarMenu = styled.ul`
  
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px)
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &:hover { 
      transition: 0.3s ease-in-out;

   }
`;
