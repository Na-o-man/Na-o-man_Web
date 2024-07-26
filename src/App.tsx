import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Index from './pages/Index';
import MainScreen from 'components/MainScreen';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/colors';
import VoteMainPage from 'pages/Vote/VoteMainPage';
function App() {
  return (
    <RecoilRoot>
      <Router>
        <MainScreen>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="vote" element={<VoteMainPage />} />
            </Routes>
          </ThemeProvider>
        </MainScreen>
      </Router>
    </RecoilRoot>
  );
}

export default App;
