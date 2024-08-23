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
  backPath?: string;
}

const Header = ({ backarrow, hamburger, checkbtn, addbtn, backPath }: Prop) => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useRecoilState(checkModeState);
  return (
    <S.Layout>
      <S.IconLayout>
        {backarrow &&
          (backPath ? (
            <BackArrow width={'60%'} onClick={() => navigate(`${backPath}`)} />
          ) : (
            <BackArrow width={'60%'} onClick={() => navigate(-1)} />
          ))}
      </S.IconLayout>
      <S.IconLayout>
        {hamburger && (
          <Hamburger width={'60%'} onClick={() => navigate('/mypage')} />
        )}
        {checkbtn &&
          (isChecked ? (
            <Check
              width={'60%'}
              fill="rgba(124, 147, 205, 0.50)"
              onClick={() => {
                setIsChecked(!isChecked);
              }}
            />
          ) : (
            <Check
              width={'60%'}
              fill="url(#paint0_linear_4226_3050)"
              onClick={() => {
                setIsChecked(true);
              }}
            />
          ))}
        {addbtn && (
          <AddVoteBtn width={'60%'} onClick={() => navigate('/vote/create')} />
        )}
      </S.IconLayout>
    </S.Layout>
  );
};

export default Header;
