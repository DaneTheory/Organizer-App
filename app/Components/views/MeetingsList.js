/* =========================================================
                    MEETINGS LIST VIEW
============================================================ */
import React from 'react';
import { Link } from 'react-router';


// STATELESS FUNCTIONAL COMPONENTS
export default function(props) {
  return (
    <div>
      <div className="data-list">
        {props.meetings.map(meeting => {
          return (
            <div key={meeting.id} className="data-list-item">
              <div className="details">
                {meeting.meeting}
              </div>
              <div className="btn--delete">
                <button onClick={props.deleteMeeting.bind(null, meeting.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
