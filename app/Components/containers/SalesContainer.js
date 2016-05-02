/* =========================================================
          SALES LIST CONTAINER COMPONENT
============================================================ */
import React  from 'react'
import { connect } from 'react-redux'
import * as SaleAPI  from '../../API/salesAPI'
import { loadSearchLayout } from '../../Actions/SearchLayout'
import store  from '../../store'
import SalesForm  from '../views/SalesForm'
import SaleList  from '../views/SalesList'


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
