import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #00bfae 0%, #2d2e32 100%);
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 150px;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 500px;
`;

const CTAButton = styled(Link)`
  background: #fff;
  color: #00bfae;
  border: none;
  border-radius: 30px;
  padding: 0.9rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
  display: inline-block;
  &:hover {
    background: #00bfae;
    color: #fff;
  }
`;

const Home = () => (
  <PageContainer>
    <Wrapper>
      <TopBar />
      <Title>Welcome to Donya</Title>
      <Subtitle>
        Your AI-powered business website assistant. Instantly create a beautiful website for your business and get an AI assistant to handle bookings, answer FAQs, and delight your customers.
      </Subtitle>
      <CTAButton to="/get-started">Get Started</CTAButton>
    </Wrapper>
    <Footer />
  </PageContainer>
);

export default Home; 