import React, { useEffect, useState } from 'react';

import Home from '../home/Home';

const HomePage = () => {
  // http 요청(fetch, axios(다운로드 받아야함))
  const [boards, setBoards] = useState([]);
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    // 값 받아오기
    let datas = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];

    setBoards([...datas]);
    setUser({ id: 1, username: 'cos' });
  }, []);

  return (
    <div>
      <Home
        boards={boards}
        setBoards={setBoards}
        number={number}
        setNumber={setNumber}
        user={user}
        setUser={setUser}
      />
    </div>
  );
};

export default HomePage;
