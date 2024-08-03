import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';

const AddGrouploading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/group/add/groupshare');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <S.Layout>
      <S.Fly />
      <S.Text>그룹 생성 중입니다...</S.Text>
    </S.Layout>
  );
};

export default AddGrouploading;
