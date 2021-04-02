import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Home from '../home/Home';

const HomePage = () => {
  // http 요청(fetch, axios(다운로드 받아야함))
  const [boards, setBoards] = useState([]);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    // 값 받아오기
    let datas = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];

    setBoards([...datas]);
  }, []);

  return (
    <div>
      <Header />
      <Home
        boards={boards}
        setBoards={setBoards}
        number={number}
        setNumber={setNumber}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
