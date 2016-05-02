/* =========================================================
                  MAIN ROUTE LAYOUT
============================================================ */
import React  from 'react'
import { Link } from 'react-router'
import Home  from '../Home'
import LightSwitchContainer  from '../containers/LightsContainer'
import NotesLayout  from '../layouts/NotesLayout'


// STATELESS FUNCTIONAL COMPONENTS
export default function(props) {
  return (
    <div className="app">
      <header className="primary-header">
        <LightSwitchContainer />
        <nav className="lists--options">
          <ul>
            <li>
              <Link to="/" className="home" activeClassName="active">Home</Link>
            </li>
            <li>
              <Link to="/meetings" activeClassName="active">Meetings</Link>
            </li>

            <li>
              <Link to="/quotes" activeClassName="active">Quotes</Link>
            </li>

            <li>
              <Link to="/sales" activeClassName="active">Sales</Link>
            </li>
          </ul>
        </nav>
      <div className="lists--container">
        {props.children}
      </div>
      </header>
      <div>
        <NotesLayout />
      </div>
    </div>
    );
}
