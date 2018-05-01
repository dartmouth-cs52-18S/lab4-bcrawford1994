import { combineReducers } from 'redux';

import PostReducer from './post-reducer';

const rootReducer = combineReducers({
  posts: PostReducer,
});

export default rootReducer;

/*
import CountReducer from './count-reducer';

const rootReducer = combineReducers({
  count: CountReducer,
});

export default rootReducer;
*/
