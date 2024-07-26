import React from 'react';
import AddGroupshare from 'components/AddGroup/AddGroupShare/AddGroupshare';
import NavigationBar from 'components/navigationbar/NavigationBar';
import * as S from './Styles2';

const AddGroupShare: React.FC = () => {
  return (
    <S.Layout>
      <AddGroupshare />
      <NavigationBar />
    </S.Layout>
  );
};

export default AddGroupShare;
