import React from 'react';
import * as S from './Styles';
import { CommentBack } from 'assets/icon';

interface props {
  image: string;
}

const CommentBox = ({ image }: props) => {
  return (
    <S.Layout>
      <S.TextLayout>정말 재미있네요</S.TextLayout>
      <S.UserLayout>
        아무개
        <S.IconLayout src={image} />
      </S.UserLayout>
      <CommentBack
        style={{
          position: 'absolute',
          top: -3,
          left: 0,
          width: '100%',
          zIndex: -1,
        }}
      />
    </S.Layout>
  );
};

export default CommentBox;
