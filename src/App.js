import './App.css';
import React, { useState } from 'react';
import Top from './components/Top';
import Bottom from './components/Bottom';

function App() {
  const [number, setNumber] = useState(1);

  const addNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div className="container">
      <h1>최상단 화면</h1>

      {/* 탑에다 number 넘기기 */}
      <Top number={number} />

      {/* 바텀에다가 setNumber를 바로 넘기지 말자.
          1. 하위에 필요한 함수를 만들어 놓는다. 
          2. 안그러면 number 속성을 하위 컴포넌트에서 마음대로 수정가능 하기 때문이다.
       */}
      <Bottom addNumber={addNumber} />
    </div>
  );
}

export default App;
