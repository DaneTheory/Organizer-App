/* ===================================================
                LIGHT SWITCH ACTIONS
====================================================== */
import * as types from '../Constants/ActionTypes';


// ON SUCCESSFUL AJAX RETURN, TOGGLE LOCAL STATE
export function toggleLightsSuccess(isActive) {
  return {
    type: types.TOGGLE_LIGHTS,
    isActive,
    lightSwitchAction: lightSwitchAction(isActive)
  };
}

// CALLBACK FOR toggleLightsSuccess
export function lightSwitchAction(isActive) {
  let docBody = document.querySelector('body');
  let lightSwitch = isActive.isActive ? lightsOff(docBody) : lightsOn(docBody);

  function lightsOff(docBody){
    docBody.classList.remove('lightsOn');
    docBody.classList.add('lightsOff');
  }
  function lightsOn(docBody){
    docBody.classList.remove('lightsOff');
    docBody.classList.add('lightsOn');
  }
}
