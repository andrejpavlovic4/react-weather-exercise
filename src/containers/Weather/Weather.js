import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Heading from "../../components/Heading/Heading";
import TemperatureControl from "../../components/TemperatureControl/TemperatureControl";
import CardSlider from "../../components/CardSlider/CardSlider";
import Spinner from "../../components/Spinner/Spinner";
import * as weatherInformationActions from "../../store/actions/index";

export class Weather extends Component {
  /**
   * Get our Weather data from OpenWeatherMap API
   */
  componentDidMount() {
    this.props.onInitWeatherInformation();
  }

  render() {
    let weather;

    if (!this.props.loading) {
      weather = (
        <Fragment>
          <Heading />
          <TemperatureControl />
          <CardSlider />
        </Fragment>
      );
    } else {
      weather = <Spinner />;
    }

    return <Fragment>{weather}</Fragment>;
  }
}

/**
 * Connect to Redux for state receiving
 * @param state
 * @returns {{weatherInformation: (null|*), loading: (boolean|"eager"|"lazy"|string|*)}}
 */
const mapStateToProps = (state) => {
  return {
    weatherInformation: state.weatherInformation,
    loading: state.loading,
    showBarchart: state.showBarchart,
  };
};

/**
 * Connect to Redux for dispatching actions
 * @param dispatch
 * @returns {{onInitWeatherInformation: (function(): *)}}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onInitWeatherInformation: () =>
      dispatch(weatherInformationActions.initWeatherInformation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
