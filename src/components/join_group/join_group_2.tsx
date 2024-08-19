import * as S from './group2_styles';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Picture from './picture';
import axios from 'axios';
import { getCookie } from 'utils/UseCookies';

interface Member {
  profileId: number;
  name: string;
  image: string;
}

const Joingroup2: React.FC = () => {
  const navigate = useNavigate();
  const { inviteCode } = useParams<{ inviteCode: string }>();
  const location = useLocation();

  const groupData = location.state;

  const [groupName, setGroupName] = useState(groupData?.name || '');
  const [members, setMembers] = useState<Member[]>(
    groupData?.profileInfoList || [],
  );
  const [peopleCount, setPeopleCount] = useState(groupData?.memberCount || 0);

  const handleNext = () => {
    navigate('/Group/join/${inviteCode}/profile', {
      state: {
        members,
        shareGroupId: groupData.shareGroupId,
      },
    });
  };
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <S.Layout>
      <S.Container>
        <S.TextBox>
          <S.StyledFly />
          <S.Textstyeld>이 그룹이 맞으신가요?</S.Textstyeld>
        </S.TextBox>
        <S.FolderBox>
          <S.Stylefolder />
          <S.PictureBox>
            {members.slice(0, 3).map((member, index) => (
              <Picture
                key={member.profileId}
                name={member.name}
                image={member.image}
                style={{ left: `${12 + index * 55}px` }}
              />
            ))}
            {peopleCount > 3 && (
              <>
                <S.StyleCloud style={{ left: '162px' }} />
                <S.StyleCount style={{ left: '175px' }}>
                  +{peopleCount - 3}
                </S.StyleCount>
              </>
            )}
          </S.PictureBox>
          <S.StyleFilename>{groupName}</S.StyleFilename>
        </S.FolderBox>
        <S.ButtonBox>
          <S.StyleButton onClick={handleBackClick}>다시 찾기</S.StyleButton>
          <S.StyleButton2 onClick={handleNext}>맞아요!</S.StyleButton2>
        </S.ButtonBox>
      </S.Container>
    </S.Layout>
  );
};

export default Joingroup2;
