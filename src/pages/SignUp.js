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
  color: #fff;
  margin-top: 150px;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-top: 80px;
    justify-content: flex-start;
    padding-top: 5rem;
  }
`;

const Form = styled.form`
  background: ${({ theme }) => theme.card};
  padding: 2.5rem 2rem;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 100%;
  min-width: 0;
  max-width: 420px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  background: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.text};
  outline: none;
  transition: box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0,191,174,0.04);
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.secondary};
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 8px;
  padding: 0.9rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SignUp = () => (
  <PageContainer>
    <Wrapper>
      <TopBar />
      <Form>
        <Title>Sign Up</Title>
        <Input type="text" placeholder="Name" required />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit">Sign Up</Button>
      </Form>
    </Wrapper>
    <Footer />
  </PageContainer>
);

export default SignUp; 