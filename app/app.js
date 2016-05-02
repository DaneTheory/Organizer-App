/* =========================================================
            ROOT PROVIDER FOR REACTJS APPLICATION
============================================================ */
import React  from 'react'
import ReactDOM  from 'react-dom'
import { Provider } from 'react-redux'
import Router  from './Router'
import store  from './store'

// HOT RELOADING
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>{Router}</Provider>,
  document.getElementById('root')
);
