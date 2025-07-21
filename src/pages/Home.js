import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

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
  justify-content: center;
  color: #fff;
  margin-top: 150px;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-top: 80px;
    justify-content: flex-start;
    padding-top: 5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 500px;
  color: ${({ theme }) => theme.textSecondary};

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled(Link)`
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.white};
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
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
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