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
  return axios.get('http://localhost:3001/sales/')
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
    url: 'http://localhost:3001/sales/',
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
  return axios.delete('http://localhost:3001/sales/' + saleId)
    .then(response => {
      store.dispatch(deleteSaleSuccess(saleId));
      return response;
    });
}
