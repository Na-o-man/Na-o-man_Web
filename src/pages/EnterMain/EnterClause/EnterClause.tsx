import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import sky from '../../../assets/background/sky.png';
import typoblurred from '../../../assets/logo/typo-blurred.png';
import symbol from '../../../assets/logo/symbol.png';
import { Link, Outlet } from 'react-router-dom';
const EnterClause = () => {
  return (
    <>
      <S.Layout>
        <Link to="profile">
          <S.Logo src={typoblurred}></S.Logo>
          <S.Background src={sky}></S.Background>
          <S.TitleContainer>
            <S.Cloudrect />
            <S.Symbol src={symbol}></S.Symbol>
            <S.TitleBox>
              <S.TitleTextUp>
                <div>약관 동의가 필요해요.</div>
              </S.TitleTextUp>
              <S.Text>
                <S.IconNeed></S.IconNeed>
                <div>이용 약관 동의</div>
                <S.IconCheck1></S.IconCheck1>

                <S.IconNeed></S.IconNeed>
                <div>개인정보 이용 동의</div>
                <S.IconCheck1></S.IconCheck1>

                <S.IconChoice></S.IconChoice>
                <div>이용 약관 동의</div>
                <S.IconCheck1></S.IconCheck1>
              </S.Text>
              <S.TitleTextDown>
                <div>약관 전체 동의하고 넘어가기</div>
                <S.IconCheck3></S.IconCheck3>
              </S.TitleTextDown>
            </S.TitleBox>
          </S.TitleContainer>
        </Link>
        <Outlet />
      </S.Layout>
    </>
  );
};

export default EnterClause;
