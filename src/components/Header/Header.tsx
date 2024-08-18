import React from 'react';
import * as S from './Styles';
import { AddVoteBtn, BackArrow, Check, Hamburger } from 'assets/icon';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { checkModeState } from 'recoil/states/share_group';

interface Prop {
  backarrow?: boolean;
  hamburger?: boolean;
  checkbtn?: boolean;
  addbtn?: boolean;
}

const Header = ({ backarrow, hamburger, checkbtn, addbtn }: Prop) => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useRecoilState(checkModeState);
  return (
    <S.Layout>
      <S.IconLayout>
        {backarrow && <BackArrow width={'80%'} onClick={() => navigate(-1)} />}
      </S.IconLayout>
      <S.IconLayout>
        {hamburger && (
          <Hamburger width={'80%'} onClick={() => navigate('/mypage')} />
        )}
        {checkbtn &&
          (isChecked ? (
            <Check
              width={'80%'}
              fill="rgba(124, 147, 205, 0.50)"
              onClick={() => {
                setIsChecked(!isChecked);
              }}
            />
          ) : (
            <Check
              width={'80%'}
              fill="url(#paint0_linear_4226_3050)"
              onClick={() => {
                setIsChecked(true);
              }}
            />
          ))}
        {addbtn && <AddVoteBtn width={'80%'} />}
      </S.IconLayout>
    </S.Layout>
  );
};

export default Header;
