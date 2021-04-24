import '../App.css';
import React from 'react';

const Bottom = (props) => {
  const { addNumber } = props;
  return (
    <div className="sub_container">
      <h1>Bootom</h1>
      <button onClick={addNumber}>증가</button>
    </div>
  );
};

export default Bottom;
