/* =========================================================
                    MEETINGS LIST REDUCER
============================================================ */
import * as types from '../Constants/ActionTypes';
import _ from 'lodash';


const initialState = {
  meetings: []
};

const Meetings = function(state = initialState, action) {
  switch(action.type) {

    case types.GET_MEETINGS:
      return Object.assign({}, state, { meetings: action.meetings });

    case types.ADD_MEETING:
      return Object.assign({}, state, { meetings: action.meeting });

    case types.DELETE_MEETING:
      const deleteMeeting = _.filter(state.meetings, meeting => meeting.id != action.meetingId);
        return Object.assign({}, state, { meetings: deleteMeeting });

    default:
      return state;
  }
}

export default Meetings;
