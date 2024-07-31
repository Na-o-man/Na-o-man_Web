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
import VoteMainPage from 'pages/Vote/VoteMainPage';
import ShareGroupMain from 'pages/ShareGroupMain/ShareGroupMain';
import ShareGroupDetailPage from 'pages/ShareGroupDetailPage/ShareGroupDetailPage';
import EnterMain from 'pages/EnterMain/EnterMain';
import EnterLogin from 'pages/EnterMain/EnterLogin/EnterLogin';
import EnterClause from 'pages/EnterMain/EnterClause/EnterClause';
import EnterGuide from 'pages/EnterMain/EnterGuide/EnterGuide';
import EnterProfile from 'pages/EnterMain/EnterProfile/EnterProfile';
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
              <Route path="/" element={<EnterMain />}>
                <Route path="login" element={<EnterLogin />}>
                  <Route path="clause" element={<EnterClause />}>
                    <Route path="profile" element={<EnterProfile />}>
                      <Route path="guide" element={<EnterGuide />} />
                    </Route>
                  </Route>
                </Route>
              </Route>
              <Route path="group" element={<ShareGroupMain />}>
                <Route path="detail" element={<ShareGroupDetailPage />} />
                <Route path="add" element={<AddGroupInputCount />}>
                  <Route path="groupname" element={<AddGroupSpace />} />
                  <Route path="membername" element={<AddGroupMemberName />} />
                  <Route path="grouptype" element={<AddGroupType />} />
                  <Route path="loading" element={<AddGroupLoading />} />
                  <Route path="groupshare" element={<AddGroupShare />} />
                </Route>
                <Route path="join" element={<Joingroup1 />}>
                  <Route path=":id" element={<Joingroup2 />}>
                    <Route path="profile" element={<Joingroup3 />} />
                  </Route>
                </Route>
              </Route>
              <Route path="vote" element={<VoteMainPage />}>
                <Route path="list" element={<VoteMainPage />} />
                <Route path="create" element={<VoteMainPage />} />
                <Route path="excute" element={<VoteMainPage />} />
                <Route path="detail" element={<VoteMainPage />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </MainScreen>
      </Router>
    </RecoilRoot>
  );
}

export default App;
