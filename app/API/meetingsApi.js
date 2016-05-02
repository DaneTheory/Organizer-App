/* =========================================================
    MEETINGS LIST ACTIONS MIDDLEWARE FOR REMOTE STATE
============================================================ */
import axios from 'axios';
import store from '../store';
import { getMeetingsSuccess, deleteMeetingSuccess } from '../Actions/Meetings';


/* =======================================
  GET AVAILABLE MEETINGS LIST FROM SERVER
========================================== */
export function getMeetings() {
  return axios.get('https://orgapp-json-api.herokuapp.com/meetings/')
    .then(response => {
      store.dispatch(getMeetingsSuccess(response.data));
      return response;
    });
}

/* ===============================================
  ADD NEW MEETING TO SERVER THEN UPDATE COMPONENT
================================================== */
export function addMeeting(meeting) {
  return axios({
    method: 'post',
    url: 'https://orgapp-json-api.herokuapp.com/meetings/',
    data: {
      meeting: meeting,
      isActive: true
    }},
  )
  .then(response => {
      getMeetings()
      return response;
  });
}

/* =========================================================
  DELETE SELECTED MEETING FROM SERVER THEN UPDATE COMPONENT
============================================================ */
export function deleteMeeting(meetingId) {
  return axios.delete('https://orgapp-json-api.herokuapp.com/meetings/' + meetingId)
    .then(response => {
      store.dispatch(deleteMeetingSuccess(meetingId));
      return response;
    });
}
