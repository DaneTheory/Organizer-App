/* ===================================================
                MEETINGS LIST ACTIONS
====================================================== */
import * as types from '../Constants/ActionTypes';

// ON AJAX SUCCESS, LOAD EXISTING MEETINGS
export function getMeetingsSuccess(meetings) {
  return {
    type: types.GET_MEETINGS,
    meetings
  };
}

// ON AJAX SUCCESS, DELETE RELATIVE MEETING
export function deleteMeetingSuccess(meetingId) {
  return {
    type: types.DELETE_MEETING,
    meetingId
  };
}
