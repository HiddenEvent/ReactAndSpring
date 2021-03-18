import logo from './logo.svg';
import './App.css';

// 0. React 엔진 - 데이터변경감지해서 UI 그려주는!!
// 1. 실행 과정 (index.html) - SPA, index.html에서 body만 바꾸는 기술, 페이지 이동이 아니다.
// 2. JSX 문법 - javascript에서 html을 사용가능하게 하는 문법

// 1) return시에 하나의 Dom만 리턴할 수 있다.
// 2) 변수선언은 let혹은 const로만 해야한다.
// 3) if사용 불가능 X => 삼항연산자 사용가능
// 4) css 디자인 - 외부파일에 정의하고 사용하자

function App() {
  let list = [1, 2, 3];
  return (
    <div>
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
