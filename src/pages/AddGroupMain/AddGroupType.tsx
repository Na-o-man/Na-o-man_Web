import React from 'react';
import Header from 'components/Header/Header';
import NavigationBar from 'components/navigationbar/NavigationBar';
import AddGrouptype from 'components/AddGroup/AddGroupType/GroupType';
import * as S from './Styles';

const AddGroupType: React.FC = () => {
  return (
    <S.Layout>
      <Header backarrow />
      <Header hamburger />
      <AddGrouptype />
    </S.Layout>
  );
};

export default AddGroupType;
