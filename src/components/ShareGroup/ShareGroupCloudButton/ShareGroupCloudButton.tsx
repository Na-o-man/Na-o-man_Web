import React from 'react';
import * as S from './Styles';

const ShareGroupCloudButton: React.FC = () => {
  return (
    <S.Layout>
      <S.ButtonContainer>
        <S.CloudBtn />
        <S.ButtonText>
          이미지
          <br />
          분류
        </S.ButtonText>
      </S.ButtonContainer>
      <S.ButtonContainer>
        <S.MiddleCloudBtn />
        <S.MiddleButtonText>다운로드</S.MiddleButtonText>
      </S.ButtonContainer>
      <S.ButtonContainer>
        <S.CloudBtn />
        <S.ButtonText>
          지난
          <br />
          안건
        </S.ButtonText>
      </S.ButtonContainer>
    </S.Layout>
  );
};

export default ShareGroupCloudButton;
