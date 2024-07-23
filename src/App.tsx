import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Index from './pages/Index';
import MainScreen from 'components/MainScreen';
import Joingroup1 from 'components/join_group/join_group_1';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <MainScreen>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/1" element={<Joingroup1 />} />
          </Routes>
        </MainScreen>
      </Router>
    </RecoilRoot>
  );
}

export default App;
