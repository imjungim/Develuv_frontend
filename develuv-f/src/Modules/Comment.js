/* 액션 타입 선언 */
const ADD_COMMENT = 'ADD_COMMENT';


/* 액션 생성함수 선언 */
let nextId = 1; // todo 데이터에서 사용 할 고유 id
export const addCommnet = text => ({
  type: ADD_COMMENT,
  comment: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
    text
  }
});

/* 초기 상태 선언 */
const initialState = [
];

const CommentReducer = (state = initialState, action)=>{
  switch (action.type) {
    case ADD_COMMENT:
      return state.concat(action.comment);
    default:
      return state;
  }
}

export default CommentReducer