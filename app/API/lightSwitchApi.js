/* =========================================================
    LIGHT SWITCH ACTIONS MIDDLEWARE FOR REMOTE STATE
============================================================ */
import axios from 'axios';
import store from '../store';
import { toggleLightsSuccess } from '../Actions/LightSwitch';


/* =======================================
  DISPATCH GET LIGHT STATE TO ACTION
========================================== */
export function getLightState() {
  return axios.get('http://localhost:3001/activeState/')
    .then(response => {
      store.dispatch(toggleLightsSuccess(response.data));
      return response;
    });
}

/* =======================================
  DISPATCH LIGHT TOGGLE STATE TO ACTION
========================================== */
export function toggleState(activeQuery) {
  return axios({
    method: 'post',
    url: 'http://localhost:3001/activeState/',
    data: {
      isActive: activeQuery
    }},
  )
  .then(response => {
    getLightState();
    return response })
  }
