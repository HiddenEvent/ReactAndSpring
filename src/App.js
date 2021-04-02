import './App.css';
import { createRef, useEffect, useMemo, useRef, useState } from 'react';

function App() {
  const [list, setList] = useState([
    { id: 1, name: '홍길동' },
    { id: 1, name: '테스트' },
  ]);

  const myRef = useRef(null); // 1개밖에 안만들어진다.

  // createRef() 동적으로 래퍼런스를 생성해주는 함수
  const myRefs = Array.from({ length: list.length }).map(() => createRef());

  return (
    <div>
      <button
        onClick={() => {
          // myRef.current.style.backgroundColor = 'red';
          myRefs[0].current.style.backgroundColor = 'red';
        }}
      >
        색변경
      </button>
      <div ref={myRef}>박스</div>
      {list.map((n, index) => (
        <h1 ref={myRefs[index]}>{n.name}</h1>
      ))}
    </div>
  );
}

export default App;
