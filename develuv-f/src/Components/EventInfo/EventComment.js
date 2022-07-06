import React, { useState } from 'react';
import './EventComment.scss'
import moment from 'moment';
import 'moment/locale/ko'

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const date = moment().fromNow()
const CommentList = React.memo(function CommentList({ comments }) {
  return (
    <ul className='ul'>
      {comments.map(comment => (
        <li className='li' key={comment.id}><span className='nickname'>닉네임</span>
          <span className='text'>{comment.text}</span>
          <button className='deleteButton'>삭제</button>
          <span className='date'>{date}</span>
        </li>
      ))}
    </ul>
  );
});

function EventComment({ comments, onCreate }) {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('');
  const onChange = e => {
    setText(e.target.value)
    setCount(e.target.value.length)
  };
  const onSubmit = e => {
    if (text) {
      e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
      onCreate(text);
      setText(''); // 인풋 초기화
      setCount(0)
      let textarea = document.querySelector('.textarea');
      textarea.style.height = 'auto';
    } else {
      alert('댓글입력후 등록버튼을 눌러주세요')
    }
  };
  const autoResizeTextarea = () => {

    let textarea = document.querySelector('.textarea');
    if (textarea) {
      textarea.style.height = 'auto';
      let height = textarea.scrollHeight; // 높이
      textarea.style.height = `${height + 8}px`;
    }

  }
  return (
    <div className='EventComment'>
      <div className='commentTitle'>댓글</div>
      <CommentList comments={comments} />
      <div className="commentBox">
        <form onSubmit={onSubmit}>
          <div className='name'>닉네임
            <span className='count'>({count} / 200)</span>
          </div>
          <div className='inputBox'>
            <textarea
              value={text}
              placeholder="댓글을 입력하세요"
              onChange={onChange}
              maxLength="200"
              className='textarea'
              onKeyDown={autoResizeTextarea}  // keydown이되엇을때마다 autoResizeTextarea실행
              onKeyUp={autoResizeTextarea}
            />
            <span className='button'>
              <button type="submit"> 등록</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EventComment;