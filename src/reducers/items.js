import {ITEM_HAS_ERROR,ITEM_FETCH_DATA} from '../actions/actionTypes';



export function itemsHasErrored(state=false, action) {
  switch (action.type) {
    case ITEM_HAS_ERROR:
      return action.msg
    default:
      return state;
  }
}



export function items(state=[],action) {
  switch (action.type) {
    case ITEM_FETCH_DATA:
      return action.items;
    default:
      return state;
  }
}
