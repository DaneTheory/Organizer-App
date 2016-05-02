/* =========================================================
            QUOTES LIST "ADD MORE" BUTTON VIEW
============================================================ */
import React from 'react';


// STATELESS FUNCTIONAL COMPONENT WITHOUT TYPICAL INHERITANCE
export default function(props) {
  function submitButtonHandler(e) {
    e.preventDefault();
    let quoteInput = document.querySelector('#quoteInput');
    let quote = quoteInput.value;
    props.addQuote(quote)
  }

  return (
    <form className="quotesForm">
      <input id="quoteInput"
             type="text"
             placeholder="Add Quote"
             value={props.quotes.quote} />
             <div className="btn--add">
               <button type="submit" onClick={submitButtonHandler}>Add</button>
             </div>
    </form>
    );
}
