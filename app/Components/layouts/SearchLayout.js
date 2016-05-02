/* =========================================================
            LISTS LAYOUT WITH DISPLAY INFO
============================================================ */
import React  from 'react'

// STATELESS FUNCTIONAL COMPONENTS
export default function(props) {
  return (
    <div className="list">
      <div className="list--info">
        {props.totalResults} {props.title}
      </div>
      <div className="list--results">
        {props.children}
      </div>
    </div>
    );
}
