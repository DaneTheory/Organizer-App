/* =========================================================
                    SALES LIST VIEW
============================================================ */
import React from 'react';
import { Link } from 'react-router';


// STATELESS FUNCTIONAL COMPONENTS
export default function(props) {
  return (
    <div>
      <div className="data-list">
        {props.sales.map(sale => {
          return (
            <div key={sale.id} className="data-list-item">
              <div className="details">
                {sale.sale}
              </div>
              <div className="btn--delete">
                <button onClick={props.deleteSale.bind(null, sale.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
