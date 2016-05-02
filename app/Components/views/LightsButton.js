/* =========================================================
                LIGHT SWITCH BUTTON VIEW
============================================================ */
import React  from 'react'
import LightBulbIcon  from './icons/lightBulbIcon'


// STATELESS FUNCTIONAL COMPONENTS
export default function(props) {
  function toggleButtonHandler(e) {
    e.preventDefault();
    let activeQuery = !props.isActive.isActive ? true : false;
    return props.toggleState(activeQuery)
  }

  return (
    <div className="btn--lights">
        <label>
          <button onClick={toggleButtonHandler}></button>
          <LightBulbIcon />
        </label>
    </div>
    );
}
