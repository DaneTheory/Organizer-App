/* ===================================================
                QUOTES LIST ACTIONS
====================================================== */
import * as types from '../Constants/ActionTypes';

// ON AJAX SUCCESS, LOAD EXISTING QUOTES
export function getQuotesSuccess(quotes) {
  return {
    type: types.GET_QUOTES,
    quotes
  };
}

// ON AJAX SUCCESS, DELETE RELATIVE QUOTE
export function deleteQuoteSuccess(quoteId) {
  return {
    type: types.DELETE_QUOTE,
    quoteId
  };
}
