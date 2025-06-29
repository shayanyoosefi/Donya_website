import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

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