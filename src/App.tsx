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
              <Route path="/" element={<EnterMain />} />
              <Route path="login" element={<EnterLogin />} />
              <Route path="login/clause" element={<EnterClause />} />
              <Route path="login/profile" element={<EnterProfile />} />
              <Route path="login/profile/guide" element={<EnterGuide />} />
              <Route path="group" element={<ShareGroupMain />} />
              <Route path="group/detail" element={<ShareGroupDetailPage />} />
              <Route path="group/add/member" element={<AddGroupMemberName />} />
              <Route path="group/add/space" element={<AddGroupSpace />} />
              <Route path="group/add/grouptype" element={<AddGroupType />} />
              <Route path="group/add/loading" element={<AddGroupLoading />} />
              <Route path="group/add/groupshare" element={<AddGroupShare />} />
              <Route path="group/add/groupCount" element={<AddGroupInputCount />} />
              <Route path="group/join" element={<Joingroup1 />} />
              <Route path="group/join/:id" element={<Joingroup2 />} />
              <Route path="group/join/:id/profile" element={<Joingroup3 />} />
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
