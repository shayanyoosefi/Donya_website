import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { RetellWebClient } from 'retell-client-js-sdk';
import { Link } from 'react-router-dom';


const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 77px;
  @media (max-width: 768px) {
    margin-top: 70px;
  }
`;

const Section = styled.section`
  padding: 6em 0;
  text-align: center;
  
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.backgroundAlt};
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  /* Center children horizontally */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.1rem;
    margin-bottom: 2rem;
  }
`;

const Slogan = styled.div`
  font-size: 2.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.backgroundAlt};
  border-radius: 16px;
  padding: 1.2rem 2.5rem;
  box-shadow: 0 2px 16px rgba(0,191,174,0.08);
  text-align: center;
  margin-bottom: 2.2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 1rem 1.5rem;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 28px;
  padding: 2.5rem 2.5rem 2.8rem 2.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.13);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 0;
  max-width: 420px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const MicRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  width: 100%;
  justify-content: center;
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
    fill: ${({ theme }) => theme.secondary};
  }
  rect:nth-child(1) { animation-name: ${wave1}; animation-delay: 0s; }
  rect:nth-child(2) { animation-name: ${wave2}; animation-delay: 0.1s; }
  rect:nth-child(3) { animation-name: ${wave3}; animation-delay: 0.2s; }
  rect:nth-child(4) { animation-name: ${wave4}; animation-delay: 0.3s; }
  rect:nth-child(5) { animation-name: ${wave5}; animation-delay: 0.2s; }
  rect:nth-child(6) { animation-name: ${wave6}; animation-delay: 0.1s; }
  rect:nth-child(7) { animation-name: ${wave7}; animation-delay: 0s; }

  @media (max-width: 380px) {
    width: 50px;
  }
`;

const MicButton = styled.button`
  background: ${({ theme, isListening, isSpeaking }) =>
    isListening ? '#ff5252' : isSpeaking ? theme.primary : theme.secondary};
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
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 10px rgba(55,72,54,0.18), 0 2px 12px rgba(0,0,0,0.13);
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
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.25rem;
  margin-bottom: 1.6rem;
  text-align: center;
  span.status-accent {
    color: ${({ theme }) => theme.primary};
    font-weight: 700;
  }
  span.status-highlight {
    color: ${({ theme }) => theme.secondary};
    font-weight: 700;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
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

const FeaturesGrid = styled.div`
  display: flex;
  gap: 2.5rem;
  margin: 2.5rem 0 3.5rem 0;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 32px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  padding: 2.5rem 2.2rem 2.2rem 2.2rem;
  max-width: 370px;
  min-width: 0;
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow 0.2s, transform 0.2s;
  &:hover {
    box-shadow: 0 8px 32px rgba(55,72,54,0.18);
    transform: translateY(-6px) scale(1.03);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 100%;
  }
`;

const FeatureNumber = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FeatureDesc = styled.p`
  font-size: 1.13rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AdminHeader = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: 2rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1.2rem;
  text-align: center;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const HorizontalFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.2rem;
  width: 100%;
  max-width: 1200px;
  margin: 2.5rem auto 3.5rem auto;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const HFeatureCard = styled.div`
  flex: 1 1 300px;
  background: ${({ theme }) => theme.card};
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  padding: 2.2rem 2.5rem;
  gap: 2.2rem;
  min-height: 160px;
  transition: box-shadow 0.2s, transform 0.2s;
  &:hover {
    box-shadow: 0 8px 32px rgba(55,72,54,0.18);
    transform: translateY(-4px) scale(1.02);
    cursor: pointer;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    padding: 2rem;
  }
`;

const HFeatureIcon = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const HFeatureContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const HFeatureTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.7rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HFeatureDesc = styled.p`
  font-size: 1.13rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactFormWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  background: ${({ theme }) => theme.card};
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.16);
  padding: 2.7rem 2.2rem 2.2rem 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 22px;
    padding: 2px;
    background: linear-gradient(120deg, #374836 0%, #445E4F 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
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
  margin-bottom: 3rem;
  text-align: center;
  max-width: 500px;
  color: ${({ theme }) => theme.textSecondary};

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FormTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.7rem;
  letter-spacing: 0.5px;
  text-align: center;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
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
  background: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.text};
  outline: none;
  transition: box-shadow 0.2s, background 0.2s;
  box-shadow: 0 2px 8px rgba(0,191,174,0.04);
  border: 2px solid transparent;
  &:focus {
    box-shadow: 0 0 0 2.5px ${({ theme }) => theme.secondary}, 0 2px 8px rgba(0,191,174,0.04);
    background: ${({ theme }) => theme.card};
    border: 2px solid ${({ theme }) => theme.secondary};
  }
  &:hover {
    background: ${({ theme }) => theme.card};
    border: 2px solid ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.white};
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
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    box-shadow: 0 6px 32px rgba(0,191,174,0.13);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1.1rem;
  }
`;
  

// Retell AI integration
const AGENT_ID = 'agent_0ccfd1ffb79bf836aefff15912';

const useRetellAI = () => {
  const [status, setStatus] = useState('idle'); // idle | connecting | connected | disconnected
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const retellClientRef = useRef(null);

  useEffect(() => {
    // Initialize Retell client
    retellClientRef.current = new RetellWebClient();
    setStatus('idle');
    setIsListening(false);
    setIsSpeaking(false);
    // Clean up on unmount
    return () => {
      if (retellClientRef.current) {
        retellClientRef.current.stopCall();
      }
    };
  }, []);

  // Attach event listeners
  useEffect(() => {
    const client = retellClientRef.current;
    if (!client) return;
    const handleCallStarted = () => setStatus('connected');
    const handleCallEnded = () => {
      setStatus('disconnected');
      setIsListening(false);
      setIsSpeaking(false);
    };
    const handleAgentStartTalking = () => {
      setIsSpeaking(true);
      setIsListening(false);
    };
    const handleAgentStopTalking = () => {
      setIsSpeaking(false);
      setIsListening(true);
    };
    const handleError = (err) => {
      setStatus('disconnected');
      setIsListening(false);
      setIsSpeaking(false);
      // Optionally log error
      // console.error('Retell error:', err);
    };
    client.on('call_started', handleCallStarted);
    client.on('call_ended', handleCallEnded);
    client.on('agent_start_talking', handleAgentStartTalking);
    client.on('agent_stop_talking', handleAgentStopTalking);
    client.on('error', handleError);
    return () => {
      client.off('call_started', handleCallStarted);
      client.off('call_ended', handleCallEnded);
      client.off('agent_start_talking', handleAgentStartTalking);
      client.off('agent_stop_talking', handleAgentStopTalking);
      client.off('error', handleError);
    };
  }, []);

  const startConversation = async () => {
    setStatus('connecting');
    try {
      // Fetch a fresh access token from your backend
      const resp = await fetch('http://localhost:5001/api/retell-token', { method: 'POST' });
      const { access_token } = await resp.json();
      await retellClientRef.current.startCall({
        accessToken: access_token,
        // sampleRate: 24000, // Optional: set sample rate
      });
      setIsListening(true);
    } catch (err) {
      setStatus('disconnected');
      setIsListening(false);
      setIsSpeaking(false);
    }
  };

  const stopConversation = () => {
    retellClientRef.current.stopCall();
    setStatus('disconnected');
    setIsListening(false);
    setIsSpeaking(false);
  };

  return { status, isListening, isSpeaking, startConversation, stopConversation };
};

const VoiceInterface = ({ status, isListening, isSpeaking, onStart, onStop }) => (
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
      <MicButton
        onClick={isListening ? onStop : onStart}
        disabled={status === 'connecting'}
        isListening={isListening}
        isSpeaking={isSpeaking}
        style={{
          cursor: status === 'connecting' ? 'not-allowed' : 'pointer',
        }}
      >
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
      {status === 'connecting' && <span className="status-accent">Connecting...</span>}
      {status === 'connected' && (
        isListening ? <span className="status-highlight">Listening...</span>
        : isSpeaking ? <span className="status-highlight">Agent is speaking...</span>
        : <span className="status-accent">Press the mic to talk</span>
      )}
      {status === 'disconnected' && <span className="status-accent">Connection lost.</span>}
      {status === 'idle' && <span className="status-accent">Ready to start.</span>}
    </CallText>
    {/* Debug status indicator */}
    <div style={{ color: '#374836', fontSize: '0.95rem', marginTop: 8, textAlign: 'center' }}>
      <b style={{ color: '#374836' }}>Status:</b> {status}
    </div>
  </Card>
);

const GetStarted = () => {
  const { status, isSpeaking, isListening, startConversation, stopConversation } = useRetellAI();

  return (
    <PageContainer>
      <TopBar />
      <Content>
        <Section className='hero-section'>
          <Slogan>Talk to Our AI Assistant</Slogan>
          <VoiceInterface
            status={status}
            isListening={isListening}
            isSpeaking={isSpeaking}
            onStart={startConversation}
            onStop={stopConversation}
          />
        </Section>

        <Section>
          <SectionTitle>Let our AI assistant handle 90% of your admin work</SectionTitle>
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
            <HFeatureCard>
              <HFeatureIcon>
                {/* Checklist/Document Icon */}
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="16" y="16" width="48" height="48" rx="8" fill="#DFF6E6" stroke="#122524" strokeWidth="2"/>
                  <rect x="26" y="28" width="28" height="4" rx="2" fill="#7be495"/>
                  <rect x="26" y="38" width="18" height="4" rx="2" fill="#B2EFCF"/>
                  <rect x="26" y="48" width="22" height="4" rx="2" fill="#B2EFCF"/>
                  <polyline points="30,54 36,60 50,46" fill="none" stroke="#7be495" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </HFeatureIcon>
              <HFeatureContent>
                <HFeatureTitle>Automated Paperwork</HFeatureTitle>
                <HFeatureDesc>
                  Let our AI handle invoices, reminders, and routine paperwork so you can focus on what matters most.
                </HFeatureDesc>
              </HFeatureContent>
            </HFeatureCard>
          </HorizontalFeatures>
        </Section>
        
        <Section className='admin-section'>
          <SectionTitle>What Donya can do for you?</SectionTitle>
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
        </Section>

        <Section>
          <Wrapper>
            <Title>Welcome to Donya</Title>
            <Subtitle>
              Your AI-powered business website assistant. Instantly create a beautiful website for your business and get an AI assistant to handle bookings, answer FAQs, and delight your customers.
            </Subtitle>
          </Wrapper>
          <ContactFormWrapper>
            <FormTitle>Let us call you!</FormTitle>
            <ContactForm>
              <FormInput id="name" name="name" type="text" placeholder="Name" required />
              <FormInput id="phone" name="phone" type="tel" placeholder="Phone Number" required />
              <FormInput id="email" name="email" type="email" placeholder="Email" required />
              <SubmitButton type="submit">Submit</SubmitButton>
            </ContactForm>
          </ContactFormWrapper>
        </Section>
      </Content>
      <Footer />
    </PageContainer>
  );
};

export default GetStarted; 