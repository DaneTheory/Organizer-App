/* ===================================================
                SALES LIST ACTIONS
====================================================== */
import * as types from '../Constants/ActionTypes';

// ON AJAX SUCCESS, LOAD EXISTING SALES
export function getSalesSuccess(sales) {
  return {
    type: types.GET_SALES,
    sales
  };
}

// ON AJAX SUCCESS, DELETE RELATIVE SALE
export function deleteSaleSuccess(saleId) {
  return {
    type: types.DELETE_SALE,
    saleId
  };
}
