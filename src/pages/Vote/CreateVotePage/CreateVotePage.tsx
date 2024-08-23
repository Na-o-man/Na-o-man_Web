import React, { useEffect, useState } from 'react';
import VoteInput from 'components/Vote/VoteInput/VoteInput';
import PhotoContainer from 'components/Vote/PhotoContainer/PhotoContainer';
import * as S from './Styles';
import { useRecoilValue } from 'recoil';
import { shareGroupId } from 'recoil/states/share_group';

const CreateVotePage = () => {
  const groupId = useRecoilValue(shareGroupId);
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    setRenderKey((prevKey) => prevKey + 1);
  }, [groupId]);
  return (
    <S.Layout key={renderKey}>
      <VoteInput />
      <S.Container>
        <PhotoContainer />
      </S.Container>
    </S.Layout>
  );
};

export default CreateVotePage;
