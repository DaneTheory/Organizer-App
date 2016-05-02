/* =========================================================
                    LIGHTS REDUCER
============================================================ */
import _  from 'lodash'
import * as types  from '../Constants/ActionTypes'


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
