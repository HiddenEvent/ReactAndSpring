import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성
// styled-components => js파일과 css파일 관리!
const StyleHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Header = () => {
  return (
    <StyleHeaderDiv>
      <div>
        <div>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/login/10">로그인</Link>
            </li>
          </ul>
        </div>
      </div>
    </StyleHeaderDiv>
  );
};

export default Header;
