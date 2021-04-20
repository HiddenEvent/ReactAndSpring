import { Route } from 'react-router';
import Navigation from './components/Navigation';
import ListPage from './page/ListPage';
import WritePage from './page/WritePage';

// 글쓰기, 글삭제, 글목록보기
function App() {
  return (
    <div>
      <Navigation />
      <Route path="/" exact={true} component={ListPage} />
      <Route path="/Write" exact={true} component={WritePage} />
    </div>
  );
}

export default App;
