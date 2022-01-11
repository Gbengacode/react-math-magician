import styled from 'styled-components';
import { NavLink as LinkA } from 'react-router-dom';

export const Nav = styled.nav`
  margin: 0;
  padding: 15px;
  
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 768px){
    display: flex;
    justify-content: space-around;
  }
`;

export const NavLogo = styled(LinkA)`
  color: #e8b8b8;
  font-size: 1.5rem;
  text-decoration: none;
  margin-top: 20px;
  margin-left: 35px;
  flex: 1;
  @media(max-width: 768px){
    font-size: 1rem;
  }
`;

export const MobileIcon = styled.div`
   display: none;

@media(max-width: 768px) {
   display: block;
   color: #fff
}

`;
export const NavMenu = styled.ul`
  display: flex;
  list-style-type: none;

@media(max-width: 768px) {
   display: none;
}
`;

export const NavItem = styled.li`
  
`;
export const NavLink = styled(LinkA)`
  text-decoration: none;
  padding: 10px;
  margin-right: 50px;
  font-size: 1.1rem;
  color: #fff;
  cursor: pointer;
  &:hover {
      text-decoration: underline;
      text-decoration-color: #8a3dff;
      text-decoration-thickness: 3px;
  }

`;
