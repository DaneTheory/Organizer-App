/* =========================================================
            MEETINGS LIST "ADD MORE" BUTTON VIEW
============================================================ */
import React  from 'react'


// STATELESS FUNCTIONAL COMPONENT WITHOUT TYPICAL INHERITANCE
export default function(props) {
  function submitButtonHandler(e) {
    e.preventDefault();
    let meetingInput = document.querySelector('#meetingInput');
    let meeting = meetingInput.value;
    props.addMeeting(meeting)
  }

  return (
    <form className="meetingsForm">
      <input id="meetingInput"
             type="text"
             placeholder="Add Meeting"
             value={props.meetings.meeting} />
             <div className="btn--add">
               <button type="submit" onClick={submitButtonHandler}>Add</button>
             </div>
    </form>
    );
}
