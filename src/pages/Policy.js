import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { FaShieldAlt } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1.5rem 2rem 1.5rem;
  position: relative;
  overflow: hidden;
  background: none;
  box-sizing: border-box;
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, #00bfae66 0%, transparent 70%);
    z-index: 0;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -120px;
    right: -120px;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, #7be49588 0%, transparent 70%);
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    padding-top: 5rem;
  }
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 2.7rem;
  font-weight: 900;
  margin-bottom: 1.1rem;
  letter-spacing: 1.5px;
  text-align: center;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const AccentBar = styled.div`
  width: 240px;
  height: 10px;
  background: ${({ theme }) => theme.secondary};
  border-radius: 12px;
  margin: 0 auto 2.1rem auto;
  box-shadow: 0 4px 16px rgba(0,191,174,0.18);

  @media (max-width: 768px) {
    width: 180px;
    height: 8px;
  }
`;

const GlassCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 26px;
  box-shadow: 0 12px 48px rgba(0,191,174,0.18);
  padding: 3.2rem 2.7rem 2.7rem 2.7rem;
  max-width: 760px;
  width: 100%;
  color: ${({ theme }) => theme.text};
  font-size: 1.22rem;
  line-height: 1.9;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  text-align: left;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    font-size: 1rem;
  }
`;

const WatermarkIcon = styled(FaShieldAlt)`
  position: absolute;
  bottom: 24px;
  right: 32px;
  font-size: 5.2rem;
  color: #00bfae55;
  pointer-events: none;
  z-index: 1;
`;

const Policy = () => (
  <PageContainer>
    <TopBar />
    <Wrapper>
      <Header>Policy</Header>
      <AccentBar />
      <GlassCard>
        Our policy information will be here.
        <WatermarkIcon />
      </GlassCard>
    </Wrapper>
    <Footer />
  </PageContainer>
);

export default Policy; 