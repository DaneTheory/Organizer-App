/* =========================================================
                    SALES REDUCER
============================================================ */
import * as types from '../Constants/ActionTypes';
import _ from 'lodash';


const initialState = {
  sales: []
};

const Sales = function(state = initialState, action) {
  switch(action.type) {

    case types.GET_SALES:
      return Object.assign({}, state, { sales: action.sales });

    case types.ADD_SALE:
      return Object.assign({}, state, { sales: action.sale });

    case types.DELETE_SALE:
      const deleteSale = _.filter(state.sales, sale => sale.id != action.saleId);
        return Object.assign({}, state, { sales: deleteSale });

    default:
      return state;
  }
}

export default Sales;
