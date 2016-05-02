import React  from 'react'
import { connect } from 'react-redux'
import SearchLayout  from '../layouts/SearchLayout'


const mapStateToProps = function(store) {
  let searchType = store.searchLayoutState.searchType;
  let totalResults = 0;

    if (searchType === 'meetings') {
      totalResults = store.meetingsState.meetings.length;
    } else if (searchType === 'quotes') {
      totalResults = store.quotesState.quotes.length;
    } else if (searchType === 'sales') {
      totalResults = store.salesState.sales.length;
    }

  return {
    searchType,
    title: store.searchLayoutState.title,
    totalResults
  };
};

export default connect(mapStateToProps)(SearchLayout);
