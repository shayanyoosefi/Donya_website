import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
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
  justify-content: flex-start;
  color: #fff;
  margin-top: 150px;
`;

const Slogan = styled.div`
  font-size: 2.1rem;
  font-weight: 700;
  color: #fff;
  background: rgba(0,191,174,0.18);
  border-radius: 16px;
  padding: 1.2rem 2.5rem;
  box-shadow: 0 2px 16px rgba(0,191,174,0.08);
  text-align: center;
  margin-bottom: 2.2rem;
`;

const Card = styled.div`
  background: #122524;
  border-radius: 28px;
  padding: 2.5rem 2.5rem 2.8rem 2.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.13);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 340px;
  max-width: 420px;
`;

const MicRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const wave1 = keyframes`
  0%, 100% { height: 10px; }
  20% { height: 26px; }
  40% { height: 38px; }
  60% { height: 26px; }
  80% { height: 10px; }
`;
const wave2 = keyframes`
  0%, 100% { height: 18px; }
  25% { height: 34px; }
  50% { height: 10px; }
  75% { height: 30px; }
`;
const wave3 = keyframes`
  0%, 100% { height: 14px; }
  20% { height: 38px; }
  40% { height: 18px; }
  60% { height: 34px; }
  80% { height: 14px; }
`;
const wave4 = keyframes`
  0%, 100% { height: 30px; }
  25% { height: 10px; }
  50% { height: 38px; }
  75% { height: 18px; }
`;
const wave5 = keyframes`
  0%, 100% { height: 18px; }
  20% { height: 34px; }
  40% { height: 10px; }
  60% { height: 38px; }
  80% { height: 18px; }
`;
const wave6 = keyframes`
  0%, 100% { height: 26px; }
  25% { height: 10px; }
  50% { height: 34px; }
  75% { height: 38px; }
`;
const wave7 = keyframes`
  0%, 100% { height: 10px; }
  20% { height: 26px; }
  40% { height: 38px; }
  60% { height: 26px; }
  80% { height: 10px; }
`;

const AnimatedSoundWave = styled.svg`
  height: 38px;
  width: 70px;
  margin: 0 10px;
  rect {
    transform-origin: bottom;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  rect:nth-child(1) { animation-name: ${wave1}; animation-delay: 0s; }
  rect:nth-child(2) { animation-name: ${wave2}; animation-delay: 0.1s; }
  rect:nth-child(3) { animation-name: ${wave3}; animation-delay: 0.2s; }
  rect:nth-child(4) { animation-name: ${wave4}; animation-delay: 0.3s; }
  rect:nth-child(5) { animation-name: ${wave5}; animation-delay: 0.2s; }
  rect:nth-child(6) { animation-name: ${wave6}; animation-delay: 0.1s; }
  rect:nth-child(7) { animation-name: ${wave7}; animation-delay: 0s; }
`;

const MicButton = styled.button`
  background: #4be18a;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 6px rgba(75,225,138,0.13), 0 2px 12px rgba(0,0,0,0.10);
  border: none;
  cursor: pointer;
  outline: none;
  transition: box-shadow 0.2s, background 0.2s;
  z-index: 2;
  &:hover, &:focus {
    background: #00bfae;
    box-shadow: 0 0 0 10px rgba(0,191,174,0.18), 0 2px 12px rgba(0,0,0,0.13);
  }
`;

const MicIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="4" width="6" height="12" rx="3" fill="#fff"/>
    <rect x="7" y="16" width="10" height="2" rx="1" fill="#fff"/>
    <rect x="11" y="18" width="2" height="3" rx="1" fill="#fff"/>
  </svg>
);

const CallText = styled.div`
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 1.6rem;
  text-align: center;
`;
const Phone = styled.span`
  color: #4be18a;
  font-weight: 600;
`;

const DemoButton = styled.button`
  background: #7be495;
  color: #122524;
  border: none;
  border-radius: 16px;
  padding: 0.9rem 2.5rem;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #4be18a;
    color: #122524;
  }
`;

const SectionHeader = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 3.2rem;
  margin-bottom: 1.2rem;
  text-align: center;
  letter-spacing: 0.5px;
`;

const FeaturesGrid = styled.div`
  display: flex;
  gap: 2.5rem;
  margin: 2.5rem 0 3.5rem 0;
  justify-content: center;
  flex-wrap: wrap;
`;

const FeatureCard = styled.div`
  background: #fff;
  border-radius: 32px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  padding: 2.5rem 2.2rem 2.2rem 2.2rem;
  max-width: 370px;
  min-width: 300px;
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FeatureNumber = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: #7be495;
  margin-bottom: 1.2rem;
`;

const FeatureTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1.1rem;
`;

const FeatureDesc = styled.p`
  font-size: 1.13rem;
  color: #444;
  margin-bottom: 0;
`;

const AdminHeader = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1.2rem;
  text-align: center;
  letter-spacing: 0.5px;
`;

const HorizontalFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  width: 100%;
  max-width: 1200px;
  margin: 2.5rem auto 3.5rem auto;
`;

const HFeatureCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  padding: 2.2rem 2.5rem;
  gap: 2.2rem;
  min-height: 160px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
  }
`;

const HFeatureIcon = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
`;

const HFeatureContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const HFeatureTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.7rem;
`;

const HFeatureDesc = styled.p`
  font-size: 1.13rem;
  color: #444;
  margin-bottom: 0;
`;

const ContactFormWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto 3rem auto;
  background: #23242a;
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.16);
  padding: 2.7rem 2.2rem 2.2rem 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 22px;
    padding: 2px;
    background: linear-gradient(120deg, #00bfae 0%, #7be495 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 1;
  }
`;

const FormTitle = styled.h3`
  color: #7be495;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.7rem;
  letter-spacing: 0.5px;
  text-align: center;
  z-index: 2;
`;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  z-index: 2;
`;

const FormLabel = styled.label`
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 0.3rem;
  letter-spacing: 0.2px;
`;

const FormInput = styled.input`
  padding: 0.85rem 1.1rem;
  border-radius: 10px;
  border: none;
  font-size: 1.08rem;
  background: #2d2e32;
  color: #fff;
  outline: none;
  transition: box-shadow 0.2s, background 0.2s;
  box-shadow: 0 2px 8px rgba(0,191,174,0.04);
  border: 2px solid transparent;
  &:focus {
    box-shadow: 0 0 0 2.5px #00bfae, 0 2px 8px rgba(0,191,174,0.04);
    background: #263238;
    border: 2px solid #00bfae;
  }
  &:hover {
    background: #263238;
    border: 2px solid #7be495;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #00bfae 0%, #7be495 100%);
  color: #122524;
  border: none;
  border-radius: 10px;
  padding: 1rem 0;
  font-size: 1.13rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 0.7rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  z-index: 2;
  &:hover {
    background: linear-gradient(90deg, #7be495 0%, #00bfae 100%);
    color: #fff;
    box-shadow: 0 6px 32px rgba(0,191,174,0.13);
  }
`;

const GetStarted = () => {
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="elevenlabs/convai-widget-embed"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    
    // Add error handling
    script.onerror = () => {
      console.error('Failed to load ElevenLabs Convai widget script');
    };
    
    script.onload = () => {
      console.log('ElevenLabs Convai widget script loaded successfully');
    };
    
    // Append to head instead of body
    document.head.appendChild(script);
    
    return () => {
      // Only remove if the script still exists
      const existingScript = document.querySelector('script[src*="elevenlabs/convai-widget-embed"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <PageContainer>
      <Wrapper>
        <TopBar />
        <Slogan>Empower Your Business with AI.</Slogan>
        <Card>
          <MicRow>
            <AnimatedSoundWave viewBox="0 0 70 38" fill="none">
              <rect x="4" y="18" width="4" height="10" rx="2" fill="#4be18a"/>
              <rect x="14" y="10" width="4" height="26" rx="2" fill="#4be18a"/>
              <rect x="24" y="16" width="4" height="14" rx="2" fill="#4be18a"/>
              <rect x="34" y="6" width="4" height="30" rx="2" fill="#4be18a"/>
              <rect x="44" y="16" width="4" height="14" rx="2" fill="#4be18a"/>
              <rect x="54" y="10" width="4" height="26" rx="2" fill="#4be18a"/>
              <rect x="64" y="18" width="4" height="10" rx="2" fill="#4be18a"/>
            </AnimatedSoundWave>
            <MicButton tabIndex={0} aria-label="Microphone">
              <MicIcon />
            </MicButton>
            <AnimatedSoundWave viewBox="0 0 70 38" fill="none">
              <rect x="4" y="18" width="4" height="10" rx="2" fill="#4be18a"/>
              <rect x="14" y="10" width="4" height="26" rx="2" fill="#4be18a"/>
              <rect x="24" y="16" width="4" height="14" rx="2" fill="#4be18a"/>
              <rect x="34" y="6" width="4" height="30" rx="2" fill="#4be18a"/>
              <rect x="44" y="16" width="4" height="14" rx="2" fill="#4be18a"/>
              <rect x="54" y="10" width="4" height="26" rx="2" fill="#4be18a"/>
              <rect x="64" y="18" width="4" height="10" rx="2" fill="#4be18a"/>
            </AnimatedSoundWave>
          </MicRow>
          <CallText>
            Call <Phone>(888) 747-2074</Phone> to try us out.
          </CallText>
          <DemoButton>Book a demo</DemoButton>
        </Card>
        <SectionHeader>What Donya can do for you?</SectionHeader>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureNumber>01</FeatureNumber>
            <FeatureTitle>Build your brand</FeatureTitle>
            <FeatureDesc>
              We will build your personal brand starting with your website. We will also create videos and content which showcase you.
            </FeatureDesc>
          </FeatureCard>
          <FeatureCard>
            <FeatureNumber>02</FeatureNumber>
            <FeatureTitle>Scale your business</FeatureTitle>
            <FeatureDesc>
              We help you to qualify customers, manage schedules and menus, payments and book keeping. We make sure you can scale your business effortlessly.
            </FeatureDesc>
          </FeatureCard>
          <FeatureCard>
            <FeatureNumber>03</FeatureNumber>
            <FeatureTitle>24x7 AI assistant</FeatureTitle>
            <FeatureDesc>
              We are available 24x7 for your customers, making sure they get all the assistance they need. Your trusted assistant makes you more successful.
            </FeatureDesc>
          </FeatureCard>
        </FeaturesGrid>
        <AdminHeader>Let our AI assistant handle 90% of your admin work</AdminHeader>
        <HorizontalFeatures>
          <HFeatureCard>
            <HFeatureIcon>
              {/* Browser/Page Icon */}
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="18" width="60" height="44" rx="6" fill="#DFF6E6" stroke="#122524" strokeWidth="2"/>
                <rect x="18" y="28" width="24" height="6" rx="2" fill="#7be495"/>
                <rect x="18" y="38" width="16" height="4" rx="2" fill="#B2EFCF"/>
                <rect x="18" y="46" width="12" height="4" rx="2" fill="#B2EFCF"/>
                <rect x="36" y="46" width="16" height="4" rx="2" fill="#B2EFCF"/>
                <polygon points="60,56 70,66 62,66 62,74 54,74 54,66 46,66" fill="#7be495" stroke="#122524" strokeWidth="2"/>
              </svg>
            </HFeatureIcon>
            <HFeatureContent>
              <HFeatureTitle>Personalized Website</HFeatureTitle>
              <HFeatureDesc>
                Stand out with a personalized, Cactus-free storefront—no coding, no extra cost. Just you, fully branded.
              </HFeatureDesc>
            </HFeatureContent>
          </HFeatureCard>
          <HFeatureCard>
            <HFeatureIcon>
              {/* Target Icon */}
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="30" fill="#DFF6E6" stroke="#122524" strokeWidth="2"/>
                <circle cx="40" cy="40" r="18" fill="#B2EFCF" stroke="#122524" strokeWidth="2"/>
                <circle cx="40" cy="40" r="8" fill="#7be495" stroke="#122524" strokeWidth="2"/>
                <polygon points="60,20 74,6 70,26" fill="#7be495" stroke="#122524" strokeWidth="2"/>
              </svg>
            </HFeatureIcon>
            <HFeatureContent>
              <HFeatureTitle>Customer qualification</HFeatureTitle>
              <HFeatureDesc>
                AI qualifies new leads for you based on your requirements! Pam also follows up and makes sure you don't miss any new opportunities
              </HFeatureDesc>
            </HFeatureContent>
          </HFeatureCard>
          <HFeatureCard>
            <HFeatureIcon>
              {/* Calendar Icon */}
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="20" width="56" height="44" rx="6" fill="#DFF6E6" stroke="#122524" strokeWidth="2"/>
                <rect x="20" y="32" width="40" height="20" rx="3" fill="#B2EFCF"/>
                <rect x="20" y="56" width="12" height="4" rx="2" fill="#7be495"/>
                <rect x="48" y="56" width="12" height="4" rx="2" fill="#7be495"/>
                <circle cx="64" cy="64" r="8" fill="#7be495" stroke="#122524" strokeWidth="2"/>
                <polyline points="60,64 63,67 68,61" fill="none" stroke="#122524" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </HFeatureIcon>
            <HFeatureContent>
              <HFeatureTitle>Scheduling and coordination</HFeatureTitle>
              <HFeatureDesc>
                AI manages your calendar, keeps on top of upcoming engagements and sends reminders, to-dos to ensure smooth operations
              </HFeatureDesc>
            </HFeatureContent>
          </HFeatureCard>
        </HorizontalFeatures>
        <ContactFormWrapper>
          <FormTitle>Let us call you!</FormTitle>
          <ContactForm>
            <FormInput id="name" name="name" type="text" placeholder="Name" required />
            <FormInput id="phone" name="phone" type="tel" placeholder="Phone Number" required />
            <FormInput id="email" name="email" type="email" placeholder="Email" required />
            <SubmitButton type="submit">Submit</SubmitButton>
          </ContactForm>
        </ContactFormWrapper>
        {/* ElevenLabs Convai Widget */}
        <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <elevenlabs-convai agent-id="agent_01jxah5atcfbxvcatmjn4960xz"></elevenlabs-convai>
        </div>
      </Wrapper>
      <Footer />
    </PageContainer>
  );
};

export default GetStarted; 