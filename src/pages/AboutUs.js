import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
`;

const Wrapper = styled.div`
  flex: 1;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1.5rem 2rem 1.5rem;
  margin-top: 100px;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin-top: 80px;
    padding-top: 5rem;
  }
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 2.7rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Mission = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.3rem;
  max-width: 700px;
  text-align: center;
  margin-bottom: 5rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`;

const Section = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.10);
  padding: 2.5rem 2rem;
  max-width: 700px;
  width: 100%;
  margin-bottom: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SectionText = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.08rem;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactSection = styled(Section)`
  position: relative;
  overflow: hidden;
  border: none;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 18px;
    padding: 2px;
    background: linear-gradient(120deg, #374836 0%, #445E4F 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 1;
  }
`;

const ContactHeader = styled.h2`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.7rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: 0.5px;
  text-align: center;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContactText = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.13rem;
  line-height: 1.7;
  margin-bottom: 1.7rem;
  text-align: center;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.13rem;
  font-weight: 600;
  text-decoration: none;
  margin: 0.5rem 1.2rem 0.5rem 0;
  background: ${({ theme }) => theme.backgroundAlt};
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  transition: background 0.2s, color 0.2s;
  z-index: 2;
  &:hover {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.white};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1rem;
    margin: 0.5rem;
  }
`;

const AboutUs = () => (
  <PageContainer>
    <Wrapper>
      <TopBar />
      <Header>About Us</Header>
      <Mission>
        Donya is on a mission to empower every business owner with a beautiful online presence and an AI assistant that handles the busywork—so you can focus on what matters most.
      </Mission>
      <Section>
        <SectionTitle>Our Vision</SectionTitle>
        <SectionText>
          We believe every entrepreneur deserves a website and a digital assistant that works 24/7. Our platform combines cutting-edge AI with stunning design to help you grow, connect, and succeed.
        </SectionText>
      </Section>
      <Section>
        <SectionTitle>Our Values</SectionTitle>
        <SectionText>
          <b>Innovation:</b> We push boundaries to deliver the best AI solutions.<br/>
          <b>Empowerment:</b> We help you take control of your business and brand.<br/>
          <b>Support:</b> We're here for you, every step of the way.
        </SectionText>
      </Section>
      <Section>
        <SectionTitle>AI solutions for your business</SectionTitle>
        <SectionText>
          Donya, located in Saddle River, US, specializes in AI voice agents that revolutionize customer service. Our cutting-edge technology enhances support automation and communication efficiency, ensuring your business stays ahead in a competitive landscape. With a commitment to quality and innovation, we empower businesses to deliver seamless customer experiences, fostering loyalty and satisfaction. Let us help you transform the way you engage with your customers and streamline your operations.
        </SectionText>
      </Section>
      <ContactSection>
        <ContactHeader>Contact Us</ContactHeader>
        <ContactText>
          Have questions or want to learn more? Reach out to our team!
        </ContactText>
        <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
          <ContactLink href="mailto:hello@donya.ai"><FaEnvelope/> hello@donya.ai</ContactLink>
          <ContactLink href="tel:+18887472074"><FaPhoneAlt/> (888) 747-2074</ContactLink>
        </div>
      </ContactSection>
    </Wrapper>
    <Footer />
  </PageContainer>
);

export default AboutUs; 