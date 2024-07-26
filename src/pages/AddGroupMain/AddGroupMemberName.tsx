import React from 'react';
import Header from 'components/Header/Header';
import NavigationBar from 'components/navigationbar/NavigationBar';
import AddGroupMembername from 'components/AddGroup/AddGroupMembername/AddGroupMembername';
import * as S from './Styles';

const AddGroupMemberName: React.FC = () => {
  return (
    <S.Layout>
      <Header backarrow />
      <AddGroupMembername />
    </S.Layout>
  );
};

export default AddGroupMemberName;
