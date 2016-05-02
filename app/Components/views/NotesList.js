/* =========================================================
                    NOTES LIST VIEW
============================================================ */
import React from 'react';
import { Link } from 'react-router';


// STATELESS FUNCTIONAL COMPONENTS
export default function(props) {
  return (
    <div>
      <div className="list--notes">
        {props.notes.map(note => {
          return (
            <div key={note.id} className="list--items">
              <div className="list--note">
                {note.note}
              </div>
              <div className="btn--delete">
                <button onClick={props.deleteNote.bind(null, note.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
