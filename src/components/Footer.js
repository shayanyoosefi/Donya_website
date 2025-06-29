import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  width: 100%;
  background: #122524;
  color: #fff;
  padding: 2.2rem 0 1.2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  box-sizing: border-box;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-bottom: 1.2rem;
`;

const FooterLink = styled(Link)`
  color: #fff;
  font-size: 1.08rem;
  font-weight: 500;
  text-decoration: none;
  opacity: 0.85;
  transition: color 0.2s, opacity 0.2s;
  &:hover {
    color: #00bfae;
    opacity: 1;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 0.7rem;
`;

const SocialIcon = styled.a`
  color: #7be495;
  font-size: 1.5rem;
  opacity: 0.85;
  transition: color 0.2s, opacity 0.2s;
  &:hover {
    color: #00bfae;
    opacity: 1;
  }
`;

const Copyright = styled.div`
  color: #b2efcf;
  font-size: 0.98rem;
  margin-top: 0.5rem;
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