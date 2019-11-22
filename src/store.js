import {createStore, combineReducers} from 'redux';
import componentLike from './reducers/component_like';

const configureStore = () => {
  return createStore(componentLike);
};

export default configureStore;
