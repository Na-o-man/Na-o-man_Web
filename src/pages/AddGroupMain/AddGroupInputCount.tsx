import React from 'react';
import Header from 'components/Header/Header';
import NavigationBar from 'components/navigationbar/NavigationBar';
import AddGroupHeadCount from 'components/AddGroup/AddGroupHeadCount/HeadCount';
import * as S from './Styles';

const AddGroupInputCount: React.FC = () => {
  return (
    <S.Layout>
      <Header backarrow />
      <Header hamburger />
      <AddGroupHeadCount />
    </S.Layout>
  );
};

export default AddGroupInputCount;
