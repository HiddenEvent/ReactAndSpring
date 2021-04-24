import '../App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease, increase } from '../store';

const Bottom = () => {
  const dispatcher = useDispatch();

  return (
    <div className="sub_container">
      <h1>Bootom</h1>
      <button onClick={() => dispatcher(increase())}>증가</button>
      <button onClick={() => dispatcher(decrease())}>감소</button>
    </div>
  );
};

export default Bottom;
