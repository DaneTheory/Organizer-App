/* =========================================================
          LIGHT SWITCH CONTAINER COMPONENT
============================================================ */
import React  from 'react'
import { connect } from 'react-redux'
import * as LightSwitchAPI  from '../../API/lightSwitchApi'
import store  from '../../store'
import LightsButton  from '../views/LightsButton'


const LightSwitchContainer = React.createClass({
  componentDidMount: function() {
    LightSwitchAPI.getLightState();
  },
  render: function() {
    return (
      <div>
        <LightsButton isActive={this.props.isActive}
                      getLightState={LightSwitchAPI.getLightState}
                      toggleState={LightSwitchAPI.toggleState} />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    isActive: store.lightsState.isActive
  };
};

export default connect(mapStateToProps)(LightSwitchContainer);
