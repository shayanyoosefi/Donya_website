import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 2.2rem 0 1.2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-bottom: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.white};
  font-size: 1.08rem;
  font-weight: 500;
  text-decoration: none;
  opacity: 0.85;
  transition: color 0.2s, opacity 0.2s;
  &:hover {
    color: ${({ theme }) => theme.secondary};
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 0.7rem;

  @media (max-width: 768px) {
    gap: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.card};
  font-size: 1.5rem;
  opacity: 0.85;
  transition: color 0.2s, opacity 0.2s;
  &:hover {
    color: ${({ theme }) => theme.secondary};
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Copyright = styled.div`
  color: ${({ theme }) => theme.card};
  font-size: 0.98rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <NavLinks>
      <FooterLink to="/about-us">About Us</FooterLink>
      <FooterLink to="#">Pricing</FooterLink>
      <FooterLink to="/policy">Policy</FooterLink>
      <FooterLink to="/sign-in">Sign In</FooterLink>
    </NavLinks>
    <SocialLinks>
      <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIcon>
      <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></SocialIcon>
      <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialIcon>
      <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></SocialIcon>
    </SocialLinks>
    <Copyright>
      &copy; {new Date().getFullYear()} Donya. All rights reserved.
    </Copyright>
  </FooterWrapper>
);

export default Footer; 