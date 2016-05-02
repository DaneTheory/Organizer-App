/* =========================================================
                    QUOTES LIST VIEW
============================================================ */
import React from 'react';
import { Link } from 'react-router';


// STATELESS FUNCTIONAL COMPONENTS
export default function(props) {
  return (
    <div>
      <div className="data-list">
        {props.quotes.map(quote => {
          return (
            <div key={quote.id} className="data-list-item">
              <div className="details">
                {quote.quote}
              </div>
              <div className="btn--delete">
                <button onClick={props.deleteQuote.bind(null, quote.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
