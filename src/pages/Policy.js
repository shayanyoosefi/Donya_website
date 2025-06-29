import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { FaShieldAlt } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #b2f7ef 0%, #00bfae 100%);
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
`;

const Header = styled.h1`
  color: #003d33;
  font-size: 2.7rem;
  font-weight: 900;
  margin-bottom: 1.1rem;
  letter-spacing: 1.5px;
  text-align: center;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
`;

const AccentBar = styled.div`
  width: 240px;
  height: 10px;
  background: linear-gradient(90deg, #00bfae 0%, #009e8e 100%);
  border-radius: 12px;
  margin: 0 auto 2.1rem auto;
  box-shadow: 0 4px 16px rgba(0,191,174,0.18);
`;

const GlassCard = styled.div`
  background: rgba(255,255,255,0.97);
  border-radius: 26px;
  box-shadow: 0 12px 48px rgba(0,191,174,0.18);
  padding: 3.2rem 2.7rem 2.7rem 2.7rem;
  max-width: 760px;
  width: 100%;
  color: #003d33;
  font-size: 1.22rem;
  line-height: 1.9;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  text-align: left;
  position: relative;
  overflow: hidden;
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