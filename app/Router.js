/* =========================================================
                    APPLICATION ROUTES
============================================================ */
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


// Layouts
import MainLayout from './Components/layouts/MainLayout';
import SearchLayoutContainer from './Components/containers/SearchLayoutContainer';

// Pages
import Home from './Components/Home';

// Containers
import MeetingsListContainer from './Components/containers/MeetingsContainer';
import QuotesListContainer from './Components/containers/QuotesContainer';
import SalesListContainer from './Components/containers/SalesContainer';

// Buttons
import LightSwitchContainer from '../App/Components/containers/LightsContainer'

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

          <Route path="meetings">
            <Route component={SearchLayoutContainer}>
              <IndexRoute component={MeetingsListContainer} />
            </Route>
          </Route>

          <Route path="quotes">
            <Route component={SearchLayoutContainer}>
              <IndexRoute component={QuotesListContainer} />
            </Route>
          </Route>

          <Route path="sales">
            <Route component={SearchLayoutContainer}>
              <IndexRoute component={SalesListContainer} />
            </Route>
          </Route>
      </Route>
  </Router>
);
