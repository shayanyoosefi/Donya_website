import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const TopBarWrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2.5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  background: ${({ theme }) => theme.primary};
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
  }
`;
const Brand = styled(Link)`
  color: ${({ theme }) => theme.white};
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  background: ${({ theme }) => theme.secondary};
  padding: 0.3rem 1.2rem;
  border-radius: 20px;
  box-shadow: 0 2px 12px rgba(0,191,174,0.08);
  text-decoration: none;
  z-index: 11;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const MenuIcon = styled.div`
  display: none;
  z-index: 11;
  @media (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.white};
    cursor: pointer;
  }
`;

const MobileMenuOverlay = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(55, 72, 54, 0.96);
    z-index: 10;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.25s ease;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const MobileMenuContainer = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  min-width: 220px;
  max-width: 90vw;
`;

const RightOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const OptionLink = styled(Link)`
  color: ${({ theme }) => theme.white};
  font-size: 1.08rem;
  font-weight: 500;
  cursor: pointer;
  opacity: 0.88;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  transition: opacity 0.2s, color 0.2s, background 0.2s, transform 0.1s ease-in-out;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.backgroundAlt};
  }
  &:active {
    transform: scale(0.95);
    background: ${({ theme }) => theme.card};
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    padding: 0.7rem 0;
    border-radius: 12px;
    background: none;
    margin: 0;
  }
`;
const SignInButtonLink = styled(Link)`
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.primary};
  font-size: 1.08rem;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  padding: 0.4rem 1.3rem;
  margin-left: 0.5rem;
  text-decoration: none;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  transition: background 0.2s, color 0.2s, transform 0.1s ease-in-out;
  cursor: pointer;
  opacity: 0.95;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    opacity: 1;
  }
  &:active {
    transform: scale(0.95);
    background: ${({ theme }) => theme.primary};
    filter: brightness(0.9);
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
    margin-left: 0;
    border-radius: 16px;
    margin-top: 0.5rem;
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.white};
    border: none;
  }
`;

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <TopBarWrapper>
      <Brand to="/">Donya</Brand>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <RightOptions>
        <OptionLink to="/about-us">About Us</OptionLink>
        <OptionLink to="#">Pricing</OptionLink>
        <OptionLink to="/policy">Policy</OptionLink>
        <SignInButtonLink to="/sign-in">Sign In</SignInButtonLink>
      </RightOptions>
      <MobileMenuOverlay isOpen={isOpen}>
        <MobileMenuContainer>
          <OptionLink to="/about-us" onClick={toggleMenu}>About Us</OptionLink>
          <OptionLink to="#" onClick={toggleMenu}>Pricing</OptionLink>
          <OptionLink to="/policy" onClick={toggleMenu}>Policy</OptionLink>
          <SignInButtonLink to="/sign-in" onClick={toggleMenu}>Sign In</SignInButtonLink>
        </MobileMenuContainer>
      </MobileMenuOverlay>
    </TopBarWrapper>
  );
};

export default TopBar; 