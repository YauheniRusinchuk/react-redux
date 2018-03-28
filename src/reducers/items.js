import {ITEM_HAS_ERROR,ITEM_IS_LOADDING,ITEM_FETCH_DATA} from '../actions/actionTypes';



export function itemHasErrored(state=false, action) {
  switch (action.type) {
    case ITEM_HAS_ERROR:
      return action.hasErrored;
    default:
      return state;
  }
}

export function itemIsLoading(state=false, action) {
  switch (action.type) {
    case ITEM_IS_LOADDING:
      return action.isLoading;
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
