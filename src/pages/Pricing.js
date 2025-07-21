import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';

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

const Pricing = () => (
  <Wrapper>
    <TopBar />
    <div>Pricing plans will be listed here.</div>
  </Wrapper>
);

export default Pricing; 