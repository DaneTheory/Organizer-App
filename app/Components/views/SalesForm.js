/* =========================================================
            SALES LIST "ADD MORE" BUTTON VIEW
============================================================ */
import React from 'react';


// STATELESS FUNCTIONAL COMPONENT WITHOUT TYPICAL INHERITANCE
export default function(props) {

  function submitButtonHandler(e) {
    e.preventDefault();
    let saleInput = document.querySelector('#saleInput');
    let sale = saleInput.value;
    props.addSale(sale)
  }

  return (
    <form className="salesForm">
      <input id="saleInput"
             type="text"
             placeholder="Add Sale"
             value={props.sales.sale} />
             <div className="btn--add">
               <button type="submit" onClick={submitButtonHandler}>Add</button>
             </div>
    </form>
    );
}
