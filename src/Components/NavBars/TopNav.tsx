// components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #4e46b4;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  li {
    display: inline;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Logo</Logo>
      <Nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
