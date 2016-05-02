/* =========================================================
             NOTES LIST "ADD MORE" BUTTON VIEW
============================================================ */
import React from 'react';


// STATELESS FUNCTIONAL COMPONENT WITHOUT TYPICAL INHERITANCE
export default function(props) {
  function submitButtonHandler(e) {
    e.preventDefault();
    let noteInput = document.querySelector('#noteInput');
    let note = noteInput.value;
    props.addNote(note)
  }

  return (
      <form className="notesForm">
        <textarea
          id="noteInput"
          name="noteInput"
          type="text"
          placeholder="Type Your New Note Here..."
          value={props.notes.note} />
        <label htmlFor="noteInput">Click Below To Add Notes</label>
        <div className="btn--add">
          <button type="submit" onClick={submitButtonHandler}>Add</button>
        </div>
      </form>
    );
}
