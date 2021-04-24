import './App.css';
import React, { useState } from 'react';
import Top from './components/Top';
import Bottom from './components/Bottom';

function App() {
  const [number, setNumber] = useState(1);

  return (
    <div className="container">
      <h1>최상단 화면</h1>

      {/* 탑에다 number 넘기기 */}
      <Top number={number} />

      {/* 바텀에다가 setNumber 넘기기 */}
      <Bottom />
    </div>
  );
}

export default App;
