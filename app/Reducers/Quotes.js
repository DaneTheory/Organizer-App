/* =========================================================
                    QUOTES REDUCER
============================================================ */
import * as types from '../Constants/ActionTypes';
import _ from 'lodash';


const initialState = {
  quotes: []
};

const Quotes = function(state = initialState, action) {
  switch(action.type) {

    case types.GET_QUOTES:
      return Object.assign({}, state, { quotes: action.quotes });

    case types.ADD_QUOTE:
      return Object.assign({}, state, { quotes: action.quote });

    case types.DELETE_QUOTE:
      const deleteQuote = _.filter(state.quotes, quote => quote.id != action.quoteId);
        return Object.assign({}, state, { quotes: deleteQuote });

    default:
      return state;
  }
}

export default Quotes;
