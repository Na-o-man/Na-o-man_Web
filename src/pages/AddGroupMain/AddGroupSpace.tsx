import React from 'react';
import Header from 'components/Header/Header';
import AddGroupPhotoSpace from 'components/AddGroup/AddGroupSpace/Space';
import * as S from './Styles';

const AddGroupSpace: React.FC = () => {
  return (
    <S.Layout>
      <Header backarrow hamburger />
      <AddGroupPhotoSpace />
    </S.Layout>
  );
};

export default AddGroupSpace;
