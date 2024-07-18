import React from 'react';
import styled from 'styled-components';

const PhoneContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const PhoneScreen = styled.div`
  height: 100%;
  width: auto;
  background-color: white;
  overflow: hidden;
  position: relative;
  aspect-ratio: 430 / 932;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

interface SmartphoneScreenProps {
  children: React.ReactNode;
}

const MainScreen: React.FC<SmartphoneScreenProps> = ({ children }) => {
  return (
    <PhoneContainer>
      <PhoneScreen>
        <Content>{children}</Content>
      </PhoneScreen>
    </PhoneContainer>
  );
};

export default MainScreen;
