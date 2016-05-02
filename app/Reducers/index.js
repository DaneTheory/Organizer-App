/* =========================================================
            MAIN FILE FOR COMBINING ALL REDUCERS
============================================================ */
import { combineReducers } from 'redux';


// Reducers
import Meetings from './Meetings';
import Quotes from './Quotes';
import Sales from './Sales';
import Notes from './Notes';
import Lights from './Lights';
import Search from './Search';

// Combine Reducers
var reducers = combineReducers({
    meetingsState: Meetings,
    quotesState: Quotes,
    salesState: Sales,
    notesState: Notes,
    lightsState: Lights,
    searchLayoutState: Search
});

export default reducers;
