/* =========================================================
                  NOTES COMPONENT LAYOUT
============================================================ */
import React  from 'react'
import { connect } from 'react-redux'
import * as NoteAPI  from '../../API/notesApi'
import store  from '../../store'
import NotesForm  from '../views/NotesForm'
import NotesList  from '../views/NotesList'

const NotesLayout = React.createClass({
  componentDidMount: function() {
    NoteAPI.getNotes();
  },
  render: function() {
    return (
      <div>
          <NotesList notes={this.props.notes} deleteNote={NoteAPI.deleteNote} />
          <input type="checkbox" className="notesForm--toggle" id="notesForm--toggle"/>
          <label htmlFor="notesForm--toggle" className="toggle--label">
            <span className="toggle--plus">&#x02A2D;</span> NOTE
          </label>
          <NotesForm notes={this.props.notes}
            addNote={NoteAPI.addNote}/>
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    notes: store.notesState.notes
  };
};

export default connect(mapStateToProps)(NotesLayout);
