import '../App.css';
import React from 'react';
import { useSelector } from 'react-redux';

const Top = () => {
  const number = useSelector((store) => store.number);

  return (
    <div className="sub_container">
      <h1>TOP 화면</h1>
      번호: {number}
    </div>
  );
};

export default Top;
