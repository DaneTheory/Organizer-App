/* =========================================================
              QUOTES LIST CONTAINER COMPONENT
============================================================ */
import React  from 'react'
import { connect } from 'react-redux'
import * as QuoteAPI  from '../../API/quotesApi'
import { loadSearchLayout } from '../../Actions/SearchLayout'
import store  from '../../store'
import QuotesForm  from '../views/QuotesForm'
import QuoteList  from '../views/QuotesList'


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
