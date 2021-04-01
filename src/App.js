import './App.css';
import { useEffect, useState } from 'react';

// 0. React 엔진 - 데이터변경감지해서 UI 그려주는!!
// 1. 실행 과정 (index.html) - SPA, index.html에서 body만 바꾸는 기술, 페이지 이동이 아니다.
// 2. JSX 문법 - javascript에서 html을 사용가능하게 하는 문법

// 1) return시에 하나의 Dom만 리턴할 수 있다.
// 2) 변수선언은 let혹은 const로만 해야한다.
// 3) if사용 불가능 X => 삼항연산자 사용가능
// 4) css 디자인 - 외부파일에 정의하고 사용하자

function App() {
  const [list, setList] = useState([1, 2, 3, 4]); // [1,2,3,4]
  const [str, setStr] = useState('합계');

  // str변경하였는데, getAddResult가 호출이된다..
  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log('sum', sum);
    return sum;
  };

  // ✨ 해결방법 => useMemo함수 사용
  const addResult = useMemo(() => getAddResult(), [list]); // 인자값1: [기억할 함수], 인자값2: [의존설정할 리스트]

  return (
    <div>
      <button
        onClick={() => {
          setStr('변경');
        }}
      >
        문자변경
      </button>

      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트에 값추가
      </button>
      <div>
        {list.map((i) => (
          <h1>{i}</h1>
        ))}
      </div>
      <div>
        {str} : {getAddResult()}
      </div>
    </div>
  );
}

export default App;
