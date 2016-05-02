/* =========================================================
          MEETINGS LIST CONTAINER COMPONENT
============================================================ */
import React from 'react';
import { connect } from 'react-redux';
import MeetingList from '../views/MeetingsList';
import * as MeetingAPI from '../../API/meetingsApi';
import store from '../../store';
import { loadSearchLayout } from '../../Actions/SearchLayout';
import MeetingsForm from '../views/MeetingsForm';


const MeetingsListContainer = React.createClass({
  componentDidMount: function() {
    MeetingAPI.getMeetings();
    store.dispatch(loadSearchLayout('meetings', 'Meetings Scheduled'));
  },
  render: function() {
    return (
      <div className="list--node">
        <MeetingList meetings={this.props.meetings}    deleteMeeting={MeetingAPI.deleteMeeting} />
        <MeetingsForm meetings={this.props.meetings}
        addMeeting={MeetingAPI.addMeeting} />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    meetings: store.meetingsState.meetings
  };
};

export default connect(mapStateToProps)(MeetingsListContainer);
