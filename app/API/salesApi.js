/* =========================================================
    SALES LIST ACTIONS MIDDLEWARE FOR REMOTE STATE
============================================================ */
import axios from 'axios';
import store from '../store';
import { getSalesSuccess, deleteSaleSuccess } from '../Actions/Sales';


/* =======================================
  GET AVAILABLE SALES LIST FROM SERVER
========================================== */
export function getSales() {
  return axios.get('https://orgapp-json-api.herokuapp.com/sales/')
    .then(response => {
      store.dispatch(getSalesSuccess(response.data));
      return response;
    });
}

/* ===============================================
  ADD NEW SALES TO SERVER THEN UPDATE COMPONENT
================================================== */
export function addSale(sale) {
  return axios({
    method: 'post',
    url: 'https://orgapp-json-api.herokuapp.com/sales/',
    data: {
      sale: sale,
      isActive: true
    }},
  )
  .then(response => {
      getSales()
      return response;
  });
}

/* =========================================================
  DELETE SELECTED SALES FROM SERVER THEN UPDATE COMPONENT
============================================================ */
export function deleteSale(saleId) {
  return axios.delete('https://orgapp-json-api.herokuapp.com/sales/' + saleId)
    .then(response => {
      store.dispatch(deleteSaleSuccess(saleId));
      return response;
    });
}
