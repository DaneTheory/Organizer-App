/* =========================================================
    NOTES LIST ACTIONS MIDDLEWARE FOR REMOTE STATE
============================================================ */
import axios from 'axios';
import store from '../store';
import { getNotesSuccess, deleteNoteSuccess } from '../Actions/Notes';


/* =======================================
  GET AVAILABLE NOTES LIST FROM SERVER
========================================== */
export function getNotes() {
  return axios.get('http://localhost:3001/notes?isActive=true')
    .then(response => {
      store.dispatch(getNotesSuccess(response.data));
      // console.log(getNotesSuccess(response.data));
        // if(response.data{isActive}){
        //
        // }
      return response;
    });
}

/* ===============================================
  ADD NEW NOTES TO SERVER THEN UPDATE COMPONENT
================================================== */
export function addNote(note) {
  return axios({
    method: 'post',
    url: 'http://localhost:3001/notes/',
    data: {
      note: note,
      isActive: true
    }},
  )
  .then(response => {
      getNotes()
      return response;
  });
}

/* =========================================================
  DELETE SELECTED NOTES FROM SERVER THEN UPDATE COMPONENT
============================================================ */
export function deleteNote(noteId) {
  return axios.delete('http://localhost:3001/notes/' + noteId)
    .then(response => {
      store.dispatch(deleteNoteSuccess(noteId));
      return response;
    });
}
