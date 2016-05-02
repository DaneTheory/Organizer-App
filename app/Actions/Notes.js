/* ===================================================
                NOTES LIST ACTIONS
====================================================== */
import * as types from '../Constants/ActionTypes';

// ON AJAX SUCCESS, LOAD EXISTING NOTES
export function getNotesSuccess(notes) {
  return {
    type: types.GET_NOTES,
    notes
  };
}

// ON AJAX SUCCESS, DELETE RELATIVE NOTES
export function deleteNoteSuccess(noteId) {
  return {
    type: types.DELETE_NOTE,
    noteId
  };
}
