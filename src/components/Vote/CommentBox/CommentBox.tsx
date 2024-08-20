import React from 'react';
import * as S from './Styles';
import { CommentBack } from 'assets/icon';

interface CommentBoxProps {
  comment?: string;
  name?: string;
  profileImage?: string;
}

const CommentBox = ({ comment, name, profileImage }: CommentBoxProps) => {
  return (
    <>
      {!comment && <S.EmptyBox>아직 투표한 사람이 없어요 !</S.EmptyBox>}
      {comment && (
        <S.Layout>
          <S.TextLayout>{comment}</S.TextLayout>
          <S.UserLayout>
            {name}
            <S.IconLayout src={profileImage} />
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
      )}
    </>
  );
};

export default CommentBox;
