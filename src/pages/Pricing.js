import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 150px;
`;

const Pricing = () => (
  <Wrapper>
    <TopBar />
    <div>Pricing plans will be listed here.</div>
  </Wrapper>
);

export default Pricing; 