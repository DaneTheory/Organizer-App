/* =========================================================
                    LIGHTS REDUCER
============================================================ */
import * as types from '../Constants/ActionTypes';
import _ from 'lodash';


const initialState = {
  activeState: {}
};

const Lights = function(state = initialState, action) {
  switch(action.type) {
    case types.TOGGLE_LIGHTS:
      return Object.assign({}, state, { isActive: action.isActive });

    default:
      return state;
  }
}

export default Lights;
