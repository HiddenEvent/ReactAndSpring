import { useState } from 'react';
import { Route } from 'react-router';
import Navigation from './components/Navigation';
import ListPage from './page/ListPage';
import WritePage from './page/WritePage';

// 글쓰기, 글삭제, 글목록보기
function App() {
  // 공통으로 사용할 필요가 있는 변수는 APP에서 선언하여 각 컴포넌트로 전달 (실제로 이렇게 사용하면 💩)
  const [posts, setPosts] = useState([
    { id: 1, title: '내용1' },
    { id: 2, title: '내용2' },
    { id: 3, title: '내용3' },
    { id: 4, title: '내용4' },
  ]);

  return (
    <div>
      <Navigation />
      <Route path="/" exact={true} component={() => ListPage(posts)} />
      <Route path="/Write" exact={true} component={() => WritePage(setPosts)} />
    </div>
  );
}

export default App;
