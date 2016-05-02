/* =========================================================
                    NOTES LIST REDUCER
============================================================ */
import * as types from '../Constants/ActionTypes';
import _ from 'lodash';


const initialState = {
  notes: []
};

const Notes = function(state = initialState, action) {
  switch(action.type) {

    case types.GET_NOTES:
      return Object.assign({}, state, { notes: action.notes });

    case types.ADD_NOTE:
      return Object.assign({}, state, { notes: action.note });

    case types.DELETE_NOTE:
      const deleteNote = _.filter(state.notes, note => note.id != action.noteId);
        return Object.assign({}, state, { notes: deleteNote });

    default:
      return state;
  }
}

export default Notes;
