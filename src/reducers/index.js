import {combineReducers} from 'redux';
import { itemsHasErrored,  items } from './items';

export default combineReducers({
  items,
  itemsHasErrored
});
