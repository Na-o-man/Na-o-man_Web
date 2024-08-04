import React from 'react';
import * as S from './Styles';
import { AddVoteBtn, BackArrow, Check, Hamburger } from 'assets/icon';
import { useNavigate } from 'react-router-dom';

interface Prop {
  backarrow?: boolean;
  hamburger?: boolean;
  checkbtn?: boolean;
  addbtn?: boolean;
}

const Header = ({ backarrow, hamburger, checkbtn, addbtn }: Prop) => {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <S.IconLayout>
        {backarrow && <BackArrow width={'80%'} onClick={() => navigate(-1)} />}
      </S.IconLayout>
      <S.IconLayout>
        {hamburger && <Hamburger width={'80%'} />}
        {checkbtn && <Check width={'80%'} />}
        {addbtn && <AddVoteBtn width={'80%'} />}
      </S.IconLayout>
    </S.Layout>
  );
};

export default Header;
