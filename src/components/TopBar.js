import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopBarWrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2.5rem 0.5rem 2.5rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1rem 0.5rem 1rem;
    gap: 0.5rem;
  }
`;
const Brand = styled(Link)`
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  background: #00bfae;
  padding: 0.3rem 1.2rem;
  border-radius: 20px;
  box-shadow: 0 2px 12px rgba(0,191,174,0.08);
  text-decoration: none;
  @media (max-width: 600px) {
    margin-bottom: 0.5rem;
  }
`;
const RightOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    gap: 1rem;
  }
`;
const OptionLink = styled(Link)`
  color: #fff;
  font-size: 1.08rem;
  font-weight: 500;
  cursor: pointer;
  opacity: 0.88;
  text-decoration: none;
  transition: opacity 0.2s, color 0.2s;
  &:hover {
    opacity: 1;
    color: #00bfae;
  }
`;
const SignInButtonLink = styled(Link)`
  background: #00bfae;
  color: #fff;
  font-size: 1.08rem;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  padding: 0.4rem 1.3rem;
  margin-left: 0.5rem;
  text-decoration: none;
  box-shadow: 0 2px 12px rgba(0,191,174,0.08);
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  opacity: 0.95;
  &:hover {
    background: #009e8e;
    color: #fff;
    opacity: 1;
  }
`;

const TopBar = () => (
  <TopBarWrapper>
    <Brand to="/">Donya</Brand>
    <RightOptions>
      <OptionLink to="/about-us">About Us</OptionLink>
      <OptionLink to="#">Pricing</OptionLink>
      <OptionLink to="/policy">Policy</OptionLink>
      <SignInButtonLink to="/sign-in">Sign In</SignInButtonLink>
    </RightOptions>
  </TopBarWrapper>
);

export default TopBar; 