/* =========================================================
          SALES LIST CONTAINER COMPONENT
============================================================ */
import React from 'react';
import { connect } from 'react-redux';
import SaleList from '../views/SalesList';
import * as SaleAPI from '../../API/salesAPI';
import store from '../../store';
import { loadSearchLayout } from '../../Actions/SearchLayout';
import SalesForm from '../views/SalesForm';


const SalesListContainer = React.createClass({
  componentDidMount: function() {
    SaleAPI.getSales();
    store.dispatch(loadSearchLayout('sales', 'Sales Made'));
  },
  render: function() {
    return (
      <div>
        <SaleList sales={this.props.sales} deleteSale={SaleAPI.deleteSale} />
        <SalesForm sales={this.props.sales}
        addSale={SaleAPI.addSale}/>
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    sales: store.salesState.sales
  };
};

export default connect(mapStateToProps)(SalesListContainer);
