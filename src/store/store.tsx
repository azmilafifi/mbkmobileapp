// store.ts
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reduceers/authReducers';
import formReducer from '../slice/formSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
