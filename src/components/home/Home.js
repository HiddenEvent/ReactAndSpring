import React from 'react';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'cos' ? 'blue' : 'red')};
`;

// Function 방식 = props로 데이터를 받아서 뿌려줄 수 있음
const Home = (props) => {
  // 구조분할 할당
  const { boards, setBoards, number, setNumber, user } = props;

  return (
    <div>
      <h1>홈페이지 입니다.</h1>
      <h1>Number: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>번호증가</button>

      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          제목: {board.title} 내용:{board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
