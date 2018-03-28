import {combineReducers} from 'redux';
import { itemHasErrored, itemIsLoading, items } from './items';

export default combineReducers({
  items,
  itemIsLoading,
  itemHasErrored
});
