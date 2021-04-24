import '../App.css';
import React from 'react';

const Top = (props) => {
  //구조분할 할당 하는게 좋음
  const { number } = props;

  return (
    <div className="sub_container">
      <h1>TOP 화면</h1>
      번호: {number}
    </div>
  );
};

export default Top;
