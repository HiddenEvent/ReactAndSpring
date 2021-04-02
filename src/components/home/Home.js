import React from 'react';

// Function 방식 = props로 데이터를 받아서 뿌려줄 수 있음
const Home = (props) => {
  // 구조분할 할당
  const { boards, setBoards, number, setNumber } = props;

  console.log(boards);
  return (
    <div>
      <h1>홈페이지 입니다.</h1>
      <h1>Number: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>번호증가</button>

      <button onClick={() => setBoards([])}>전체삭제</button>
      {boards.map((board) => (
        <h3>
          제목: {board.title} 내용:{board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
