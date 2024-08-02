<<<<<<< Updated upstream
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';

const AddGrouploading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/addCount/groupshare');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

=======
import React from 'react';
import * as S from './Styles';

const AddGrouploading = () => {
>>>>>>> Stashed changes
  return (
    <S.Layout>
      <S.Fly />
      <S.Text>그룹 생성 중입니다...</S.Text>
    </S.Layout>
  );
};

export default AddGrouploading;
