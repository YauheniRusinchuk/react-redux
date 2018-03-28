import {ITEM_HAS_ERROR,ITEM_FETCH_DATA} from './actionTypes';
import axios from 'axios';

export function fetchRequest(url) {
  return (dispatch) => {
    axios.get(url)
      .then(res => {
        dispatch(itemsFetchDataSuccess(res.data.articles))
      }).catch((err) => {})
  }
}


export function itemsHasErrored(msg) {
  return {
    type: ITEM_HAS_ERROR,
    msg
  }
}



export function itemsFetchDataSuccess(items) {
  return {
    type: ITEM_FETCH_DATA,
    items
  }
}
