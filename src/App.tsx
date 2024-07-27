/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import AddGroupInputCount from './pages/AddGroupMain/AddGroupInputCount';
import AddGroupSpace from './pages/AddGroupMain/AddGroupSpace';
import AddGroupMemberName from './pages/AddGroupMain/AddGroupMemberName';
import AddGroupType from './pages/AddGroupMain/AddGroupType';
import AddGroupLoading from './pages/AddGroupMain/AddGroupLoading';
import AddGroupShare from './pages/AddGroupMain/AddGroupShare';
import MainScreen from 'components/MainScreen';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/colors';
import VoteMainPage from 'pages/Vote/VoteMainPage';
import EnterMain from 'pages/EnterMain/EnterMain';
import EnterLogin from 'pages/EnterMain/EnterLogin/EnterLogin';
import EnterClause from 'pages/EnterMain/EnterClause/EnterClause';
import EnterGuide from 'pages/EnterMain/EnterGuide/EnterGuide';
import EnterProfile from 'pages/EnterMain/EnterProfile/EnterProfile';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <MainScreen>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="vote" element={<VoteMainPage />} />
              <Route
                path="addCount/headCount"
                element={<AddGroupInputCount />}
              />
              <Route path="addCount/space" element={<AddGroupSpace />} />
              <Route
                path="addCount/membername"
                element={<AddGroupMemberName />}
              />
              <Route path="addCount/grouptype" element={<AddGroupType />} />
              <Route path="addCount/loading" element={<AddGroupLoading />} />
              <Route path="addCount/groupshare" element={<AddGroupShare />} />
              <Route path="enter" element={<EnterMain />}>
                <Route path="login" element={<EnterLogin />}>
                  <Route path="clause" element={<EnterClause />}>
                    <Route path="profile" element={<EnterProfile />}>
                      <Route path="guide" element={<EnterGuide />} />
                    </Route>
                  </Route>
                </Route>
              </Route>
            </Routes>
          </ThemeProvider>
        </MainScreen>
      </Router>
    </RecoilRoot>
  );
}

export default App;
