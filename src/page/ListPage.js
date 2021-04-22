import React, { useState } from 'react';
import styled from 'styled-components';

const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center;
`;

const ListPage = () => {
  const [post, setPost] = useState({
    id: '',
    title: '',
    content: '',
  });

  const [posts, setPosts] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용2' },
    { id: 3, title: '제목3', content: '내용3' },
    { id: 4, title: '제목4', content: '내용4' },
  ]);

  const handleWrite = () => {
    //ListPage의 setPosts에 무엇을 담아야 함?
    let post = { id: 6, title: '인풋값' };
  };

  const handleForm = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    // ⚡ computed property 네임 (변수의 값을 속성변수로 사용 할 수 있음)
    setPost({ [e.target.name]: e.target.value });
    console.log(post.title);
    console.log(post.content);
  };

  return (
    <div>
      <h1>리스트페이지</h1>
      <form>
        <input
          type="text"
          placeholder="제목을 입력하세요..."
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요..."
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            번호: {post.id} 제목:{post.title}
          </div>
          <button>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
