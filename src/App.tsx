import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Index from './pages/Index';
import MainScreen from 'components/MainScreen';
function App() {
  return (
    <RecoilRoot>
      <Router>
        <MainScreen>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </MainScreen>
      </Router>
    </RecoilRoot>
  );
}

export default App;
