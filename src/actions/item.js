import {ITEM_HAS_ERROR,ITEM_IS_LOADDING,ITEM_FETCH_DATA} from './actionTypes';

export function itemsHasErrored(bool) {
  return {
    type: ITEM_HAS_ERROR,
    bool
  }
}

export function itemsIsLoading(bool) {
  return {
    type: ITEM_IS_LOADDING,
    bool
  }
}

export function itemsFetchDataSuccess(items) {
  return {
    type: ITEM_FETCH_DATA,
    items
  }
}
