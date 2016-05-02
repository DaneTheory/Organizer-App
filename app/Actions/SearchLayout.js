/* ===================================================
                DEFAULT LIST ACTIONS
====================================================== */
import * as types from '../Constants/ActionTypes';

// RETURN LIST TYPE AND INFO OF LIST FROM LOCAL STATE
export function loadSearchLayout(searchType, title) {
  return {
    type: types.LOAD_SEARCH_LAYOUT,
    searchType,
    title
  };
}
