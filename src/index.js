import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import reducer from './store';
import { Provider } from 'react-redux';

// 리덕스가 들고있는 함수, reducer는 store.js에서 exprot default가 되어 있기때문에 바로 사용가능 하다.
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    {/* store에 있는 모든 함수와 변수들을 전역으로 사용 가능해진다.  */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
