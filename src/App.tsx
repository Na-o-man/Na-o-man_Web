import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Index from './pages/Index';
import MainScreen from 'components/MainScreen';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/colors';
import Profile from 'components/join_group/profile';
import Joingroup1 from 'components/join_group/join_group_1';
import Joingroup2 from 'components/join_group/join_group_2';
import Joingroup3 from 'components/join_group/join_group_3';
function App() {
  return (
    <RecoilRoot>
      <Router>
        <MainScreen>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<Joingroup1 />} />
              <Route path="/1" element={<Joingroup2 />} />
              <Route path="/2" element={<Joingroup3 />} />
            </Routes>
          </ThemeProvider>
        </MainScreen>
      </Router>
    </RecoilRoot>
  );
}

export default App;
