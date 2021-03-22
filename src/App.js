import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';

// 0. React 엔진 - 데이터변경감지해서 UI 그려주는!!
// 1. 실행 과정 (index.html) - SPA, index.html에서 body만 바꾸는 기술, 페이지 이동이 아니다.
// 2. JSX 문법 - javascript에서 html을 사용가능하게 하는 문법

// 1) return시에 하나의 Dom만 리턴할 수 있다.
// 2) 변수선언은 let혹은 const로만 해야한다.
// 3) if사용 불가능 X => 삼항연산자 사용가능
// 4) css 디자인 - 외부파일에 정의하고 사용하자

function App() {
  console.log('App 실행됨');

  const [num, setNum] = useState(5);
  // 다운로드 받음
  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '코스' },
  ];

  const [users, setUsers] = useState(sample); // 래퍼런스가 변경되야 동작된다
  const download = () => {
    // setUsers([...sample]);  // 깊은 복사를 하면 래퍼런스가 변경되어 데이터가 같이도 무조건 다시그려지게 된다.. 사용X
    console.log(sample);
    setUsers([...sample, { id: num, name: '조자룡' }]);
    setNum(num + 1);
  };

  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id},{u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
