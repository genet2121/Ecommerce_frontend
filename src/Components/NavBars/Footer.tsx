// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #4e46b4;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <p>© 2016 Your Company. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
