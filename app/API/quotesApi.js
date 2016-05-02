/* =========================================================
    QUOTES LIST ACTIONS MIDDLEWARE FOR REMOTE STATE
============================================================ */
import axios from 'axios';
import store from '../store';
import { getQuotesSuccess, deleteQuoteSuccess } from '../Actions/Quotes';


/* =======================================
  GET AVAILABLE QUOTES LIST FROM SERVER
========================================== */
export function getQuotes() {
  return axios.get('https://orgapp-json-api.herokuapp.com/quotes/')
    .then(response => {
      store.dispatch(getQuotesSuccess(response.data));
      return response;
    });
}

/* ===============================================
  ADD NEW QUOTES TO SERVER THEN UPDATE COMPONENT
================================================== */
export function addQuote(quote) {
  return axios({
    method: 'post',
    url: 'https://orgapp-json-api.herokuapp.com/quotes/',
    data: {
      quote: quote,
      isActive: true
    }},
  )
  .then(response => {
      getQuotes()
      return response;
  });
}

/* =========================================================
  DELETE SELECTED QUOTES FROM SERVER THEN UPDATE COMPONENT
============================================================ */
export function deleteQuote(quoteId) {
  return axios.delete('https://orgapp-json-api.herokuapp.com/quotes/' + quoteId)
    .then(response => {
      store.dispatch(deleteQuoteSuccess(quoteId));
      return response;
    });
}
