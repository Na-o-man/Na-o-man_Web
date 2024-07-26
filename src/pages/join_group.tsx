import React from 'react';
import MainScreen from 'components/MainScreen';
import Joingroup3 from 'components/join_group/join_group_3';
import Joingroup1 from 'components/join_group/join_group_1';
import Joingroup2 from 'components/join_group/join_group_2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Joingroup = () => {
  return (
    <Router>
      <MainScreen>
        <Routes>
          <Route path="/join_group" element={<Joingroup1 />} />
          <Route path="/join_group/2" element={<Joingroup2 />} />
          <Route path="/join_group/3" element={<Joingroup3 />} />
        </Routes>
      </MainScreen>
    </Router>
  );
};
export default Joingroup;
