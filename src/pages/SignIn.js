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

const Form = styled.form`
  background: #23242a;
  padding: 2.5rem 2rem;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  min-width: 320px;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  background: #2d2e32;
  color: #fff;
  outline: none;
  transition: box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0,191,174,0.04);
  &:focus {
    box-shadow: 0 0 0 2px #00bfae;
  }
`;

const Button = styled.button`
  background: #00bfae;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.9rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.2s;
  &:hover {
    background: #009e8e;
  }
`;

const SignUpLink = styled(Link)`
  background: none;
  border: none;
  color: #00bfae;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1.2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: underline;
  transition: color 0.2s;
  &:hover {
    color: #fff;
  }
`;

const SignIn = () => (
  <PageContainer>
    <Wrapper>
      <TopBar />
      <Form>
        <Title>Sign In</Title>
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit">Sign In</Button>
      </Form>
      <SignUpLink to="/sign-up">Don't have an account? Sign Up</SignUpLink>
    </Wrapper>
    <Footer />
  </PageContainer>
);

export default SignIn; 