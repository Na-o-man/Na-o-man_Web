/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/colors';
import AddGroupInputCount from './pages/AddGroupMain/AddGroupInputCount';
import AddGroupSpace from './pages/AddGroupMain/AddGroupSpace';
import AddGroupMemberName from './pages/AddGroupMain/AddGroupMemberName';
import AddGroupType from './pages/AddGroupMain/AddGroupType';
import AddGroupLoading from './pages/AddGroupMain/AddGroupLoading';
import AddGroupShare from './pages/AddGroupMain/AddGroupShare';
import MainScreen from 'components/MainScreen';
import Joingroup from 'pages/join_group';
import VoteMainPage from 'pages/Vote/VoteMainPage';
import ShareGroupMain from 'pages/ShareGroup/ShareGroupMain/ShareGroupMain';
import ShareGroupDetailPage from 'pages/ShareGroup/ShareGroupDetailPage/ShareGroupDetailPage';
import EnterMain from 'pages/EnterMain/EnterMain';
import EnterLogin from 'pages/EnterMain/EnterLogin/EnterLogin';
import EnterClause from 'pages/EnterMain/EnterClause/EnterClause';
import EnterGuide from 'pages/EnterMain/EnterGuide/EnterGuide';
import EnterProfile from 'pages/EnterMain/EnterProfile/EnterProfile';
import ShareGroupFolder from 'pages/ShareGroup/ShareGroupFolder/ShareGroupFolder';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <MainScreen>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/*" element={<Joingroup />} />
              <Route path="shareGroups" element={<ShareGroupMain />} />
              <Route path="shareGroups/:id" element={<ShareGroupFolder />} />
              <Route
                path="shareGroups/detail/:id"
                element={<ShareGroupDetailPage />}
              />
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
              <Route path="/" element={<EnterMain />}>
                <Route path="login" element={<EnterLogin />}>
                  <Route path="clause" element={<EnterClause />}>
                    <Route path="profile" element={<EnterProfile />}>
                      <Route path="guide" element={<EnterGuide />} />
                    </Route>
                  </Route>
                </Route>
              </Route>
              <Route path="vote" element={<VoteMainPage />} />
              <Route path="vote/list" element={<VoteMainPage />} />
              <Route path="vote/create" element={<VoteMainPage />} />
              <Route path="vote/excute" element={<VoteMainPage />} />
              <Route path="vote/detail" element={<VoteMainPage />} />
            </Routes>
          </ThemeProvider>
        </MainScreen>
      </Router>
    </RecoilRoot>
  );
}

export default App;
