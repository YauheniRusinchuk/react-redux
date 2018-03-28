import {ITEM_HAS_ERROR,ITEM_IS_LOADDING,ITEM_FETCH_DATA} from './actionTypes';
import axios from 'axios';

export function fetchRequest(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true))

    axios.get(url)
      .then(res => {
        dispatch(itemsFetchDataSuccess(res.data))
      })
      .catch(err => dispatch(itemsHasErrored(true)))

  }
};


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
