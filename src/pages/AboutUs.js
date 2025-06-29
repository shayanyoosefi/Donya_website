import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #00bfae 0%, #2d2e32 100%);
`;

const Wrapper = styled.div`
  flex: 1;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1.5rem 2rem 1.5rem;
  margin-top: 100px;
`;

const Header = styled.h1`
  color: #fff;
  font-size: 2.7rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
  text-align: center;
`;

const Mission = styled.p`
  color: #fff;
  font-size: 1.3rem;
  max-width: 700px;
  text-align: center;
  margin-bottom: 5rem;
  font-weight: 500;
`;

const Section = styled.div`
  background: #23242a;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.10);
  padding: 2.5rem 2rem;
  max-width: 700px;
  width: 100%;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #7be495;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.1rem;
`;

const SectionText = styled.p`
  color: #e0f7ef;
  font-size: 1.08rem;
  line-height: 1.7;
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
    background: linear-gradient(120deg, #00bfae 0%, #7be495 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 1;
  }
`;

const ContactHeader = styled.h2`
  color: #7be495;
  font-size: 1.7rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: 0.5px;
  text-align: center;
  z-index: 2;
`;

const ContactText = styled.p`
  color: #e0f7ef;
  font-size: 1.13rem;
  line-height: 1.7;
  margin-bottom: 1.7rem;
  text-align: center;
  z-index: 2;
`;

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #00bfae;
  font-size: 1.13rem;
  font-weight: 600;
  text-decoration: none;
  margin: 0.5rem 1.2rem 0.5rem 0;
  background: rgba(0,191,174,0.08);
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  transition: background 0.2s, color 0.2s;
  z-index: 2;
  &:hover {
    background: #00bfae;
    color: #fff;
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