import { combineReducers } from 'redux';
import CommentReducer from './Comment';

const rootReducer = combineReducers({
  CommentReducer,
});

export default rootReducer;