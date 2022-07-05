import React, { useState } from 'react';

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const CommentList = React.memo(function CommentList({comments}) {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>{comment.text}</li>
      ))}
    </ul>
  );
});

function EventComment({ comments, onCreate  }) {
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text);
    setText(''); // 인풋 초기화
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="댓글을 입력하세요"
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <CommentList comments={comments} />
    </div>
  )
}

export default EventComment;