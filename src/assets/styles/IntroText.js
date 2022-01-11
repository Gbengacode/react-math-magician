import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 50px;
  margin-top: 50px;
`;
export const H1 = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 900;
  line-height: 50px;
  font-family: 'Poppins', sans-serif;
  @media(max-width: 768px) {
  font-size: 1.4rem;
  font-weight: 1000;
  line-height: 35px;
  }
`;

export const Text = styled.div`
  width: 400px;
  @media(max-width: 768px) {
    width: 200px;
  }
`;
export const Ps = styled.p`
  color: #d2c7c7;
  font-size: 1rem;
  text-align: left;
  @media(max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Button = styled(Link)`
  display: block;
  background: #db7093;
  padding: 10px;
  border: none;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  width: 150px;
  text-decoration: none;
  outline: none;

  &:hover {
    background: #fff;
    border: 2px solid #db7093;
    outline: none;
    color: #db7093;
  }
  
`;
