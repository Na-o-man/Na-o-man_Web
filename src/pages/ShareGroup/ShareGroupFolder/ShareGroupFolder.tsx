// Share Group 1,2페이지 레이아웃
import React, { useEffect } from 'react';
import Header from 'components/Header/Header';
import * as S from './Styles';
import ShareGroupFolderView from 'components/ShareGroup/ShareGroupFolderView/ShareGroupFolderView';
import { useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  shareGroupId,
  shareGroupListState,
  shareGroupMemberListState,
} from 'recoil/states/share_group';
import { getShareGroupMembers } from 'apis/getMyShareGroup';

interface profile {
  profileId: number; // 프로필 id
  name: string; // 프로필 이름
  image: string; // URL 형식
  memberId: number | null; // 해당 프로필로 참여한 회원의 id. 생략할지 고민중
}

interface filteredProfile {
  profileId: number; // 프로필 id
  name: string; // 프로필 이름
  image: string; // URL 형식
  memberId: number; // 해당 프로필로 참여한 회원의 id
}

interface ShareGroup {
  shareGroupId: number; // 공유 그룹 id
  name: string; // 공유 그룹 이름
  image: string; // 공유 그룹 이미지 URL
  memberCount: number; // 공유 그룹에 참여한 회원 수
  createdAt: string; // 공유 그룹 생성일
}

const ShareGroupFolder: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const setGroupId = useSetRecoilState(shareGroupId);
  const [shareGroupMember, setShareGroupMember] = useRecoilState(
    shareGroupMemberListState,
  );
  const [shareGroupList, setShareGroupList] =
    useRecoilState(shareGroupListState);

  useEffect(() => {
    setGroupId(Number(id));
    getShareGroupMembers(Number(id)).then((res) => {
      if (res.data.hasOwnProperty('shareGroupId')) {
        const currentShareGroupItem: ShareGroup = {
          shareGroupId: res.data.shareGroupId,
          name: res.data.name,
          image: res.data.image,
          memberCount: res.data.memberCount,
          createdAt: res.data.createdAt,
        };
        setShareGroupList([...shareGroupList, currentShareGroupItem]);
      }
      if (res.data.hasOwnProperty('profileInfoList')) {
        // memberId가 null인 프로필은 제외
        const fileterdProfileInfoLists: filteredProfile[] =
          res.data.profileInfoList.filter(
            (profile: profile) => profile.memberId !== null,
          );
        // 전체 사진 폴더와 기타 폴더 추가
        setShareGroupMember([
          ...fileterdProfileInfoLists,
          {
            profileId: 0,
            name: '모든 사진',
            image: '',
            memberId: 0,
            isAllPhoto: true,
          },
          {
            profileId: -1,
            name: '기타 사진',
            image: '',
            memberId: 0,
            isEtcPhoto: true,
          },
        ]);
      }
    });
  }, [id]);

  return (
    <S.Layout isRightCloud={false}>
      <Header backarrow hamburger backPath="/group" />
      {shareGroupMember && <ShareGroupFolderView />}
    </S.Layout>
  );
};

export default ShareGroupFolder;
