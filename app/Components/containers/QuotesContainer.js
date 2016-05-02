/* =========================================================
              QUOTES LIST CONTAINER COMPONENT
============================================================ */
import React from 'react';
import { connect } from 'react-redux';
import QuoteList from '../views/QuotesList';
import * as QuoteAPI from '../../API/quotesApi';
import store from '../../store';
import { loadSearchLayout } from '../../Actions/SearchLayout';
import QuotesForm from '../views/QuotesForm';


const QuotesListContainer = React.createClass({
  componentDidMount: function() {
    QuoteAPI.getQuotes();
    store.dispatch(loadSearchLayout('quotes', 'Quotes Recieved'));
  },
  render: function() {
    return (
      <div>
        <QuoteList quotes={this.props.quotes} deleteQuote={QuoteAPI.deleteQuote} />
        <QuotesForm quotes={this.props.quotes} addQuote={QuoteAPI.addQuote} />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    quotes: store.quotesState.quotes
  };
};

export default connect(mapStateToProps)(QuotesListContainer);
