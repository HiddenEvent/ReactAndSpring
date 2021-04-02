import React from 'react';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성
// styled-components => js파일과 css파일 관리!
const StyleFooterDiv = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <StyleFooterDiv>
      <div>
        <div>
          <ul>
            <li>오시는길: 서울 구로구....</li>
            <li>전화번호: 02-1111-0222</li>
          </ul>
        </div>
      </div>
    </StyleFooterDiv>
  );
};

export default Footer;
