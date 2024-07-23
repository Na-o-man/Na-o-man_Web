import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CloudBtn } from 'assets/icon';
import { Fly } from 'assets/icon';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #bbcfe5;
`;

const UrlInputbarContainer = styled.div`
  width: 250px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 18px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center; /* 가운데 정렬 */
  justify-content: center; /* 가운데 정렬 */
  margin-top: 18px;
`;

const UrlInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 18px;
  //border: 2px solid #8ba5c1;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);

  box-sizing: border-box; /* 패딩과 테두리를 포함한 전체 크기를 지정 */

  text-align: center; /* 입력 필드의 텍스트를 가운데 정렬 */

  ::placeholder {
    color: #8da5c1;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 55px; /* 입력 필드 높이와 동일하게 설정 */

    text-align: center; /* placeholder 텍스트를 가운데 정렬 */
  }
`;

const Textstyeld = styled.div`
  //width: 204px;
  //height: 22px;
  flex-shrink: 0;
  color: #fff;

  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Nextbutton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 120px;

  svg {
    width: 78px;
    height: 48px;
    flex-shrink: 0;
  }
`;

const StyledFly = styled(Fly)`
  margin-right: 9px;
  width: 15.255px;
  height: 18.686px;
`;
const Joingroup1: React.FC = () => {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handlenNext = () => {
    navigate('/group2');
  }; //해당 url로 이동하기

  return (
    <>
      <Container>
        <Textstyeld>
          <StyledFly />
          그룹 링크를 입력해주세요.
        </Textstyeld>
        <UrlInputbarContainer>
          <UrlInput placeholder="URL을 입력해주세요"></UrlInput>
          <Nextbutton>
            <CloudBtn>→</CloudBtn>
          </Nextbutton>
        </UrlInputbarContainer>
      </Container>
    </>
  );
};

export default Joingroup1;
