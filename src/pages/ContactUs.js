import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

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
  color: ${({ theme }) => theme.text};
  margin-top: 150px;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-top: 80px;
    justify-content: flex-start;
    padding-top: 5rem;
  }
`;

const ContactUs = () => (
  <PageContainer>
    <Wrapper>
      <TopBar />
      <div>Contact us form will be here.</div>
    </Wrapper>
    <Footer />
  </PageContainer>
);

export default ContactUs; 