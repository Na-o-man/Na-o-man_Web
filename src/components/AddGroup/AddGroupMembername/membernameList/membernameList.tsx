import React, { useState } from 'react';
import * as S from './Styles';
import { useRecoilState } from 'recoil';
import { namesState } from '../../../../recoil/states/addgroupState'; // Recoil 상태가 정의된 파일을 import

interface MembernameCreateProps {
  addName: (name: string) => void;
}

const MembernameCreate: React.FC<MembernameCreateProps> = ({ addName }) => {
  const [newName, setNewName] = useState<string>(''); /*상태타입 정의 */

  const handleAddName = () => {
    if (newName.trim() !== '') {
      addName(newName.trim()); /*새로운 이름 추가함수 호출 */
      setNewName(''); /*입력 필드 초기화 */
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddName(); // Enter 키로 이름 추가
    }
  };

  return (
    <S.nameCreatelayout>
      <S.MemberInput />
      <S.nameCreateComponent>
        <S.inputname
          type="text"
          placeholder="이름"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <S.inputplus onClick={handleAddName}>추가</S.inputplus>
      </S.nameCreateComponent>
    </S.nameCreatelayout>
  );
};

const MembernameList: React.FC = () => {
  const [names, setNames] = useRecoilState(namesState); // Recoil 상태 사용

  const addName = (name: string) => {
    const newNames = [...names, name];
    setNames(newNames);
  };

  const removeName = (index: number) => {
    const newNames = names.filter((_, i) => i !== index); /*이름 제거*/
    setNames(newNames);
  };

  return (
    <S.nameLayout>
      <S.nameFolder />
      <S.nameList>
        {names.map((name, index) => (
          <S.nameContainer key={index}>
            <S.NowImportName />
            <S.name>{name}</S.name>
            <S.nameButton
              className="nameButton"
              onClick={() => removeName(index)}
            >
              ⓧ
            </S.nameButton>
          </S.nameContainer>
        ))}
      </S.nameList>
      <MembernameCreate addName={addName} />
    </S.nameLayout>
  );
};

export default MembernameList;
