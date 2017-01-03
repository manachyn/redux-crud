import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import user from './user';
import posts from './posts';

// import { combineReducers } from 'redux';
// import PostsReducer from './reducer_posts';
// import UserReducer from './reducer_user';
// import ValidateUserFieldsReducer from './reducer_validateUserFields';
// import ResendEmailReducer from './reducer_resendEmail';
// import UpdateEmailReducer from './reducer_updateEmail';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  routing,
  user,
  // validateFields: ValidateUserFieldsReducer,
  posts, //<-- Posts
  // form: formReducer, // <-- redux-form
  // resendEmail: ResendEmailReducer,
  // updateEmail: UpdateEmailReducer
});

export default rootReducer;
