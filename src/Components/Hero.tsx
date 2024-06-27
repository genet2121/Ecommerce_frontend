// src/components/Hero.tsx
import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  background-color: #f8f9fa;
  padding: 50px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 36px;
  color: #333;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  color: #666;
`;

const Hero: React.FC = () => {
  return (
    <HeroWrapper>
      <HeroTitle>Don't miss amazing deals</HeroTitle>
      <HeroSubtitle>Sign up for the daily newsletter</HeroSubtitle>
      <input type="email" placeholder="Your email address" />
      <button>Subscribe</button>
    </HeroWrapper>
  );
};

export default Hero;
