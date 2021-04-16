import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setRadioSelectedValue = (value) => {
  return {
    type: actionTypes.SET_RADIO_SELECTED_VALUE,
    value: value
  };
};

export const setBarchartVisibility = (id, day, showBarChart) => {
  return {
    type: actionTypes.SET_BARCHART_VISIBILITY,
    id: id,
    day: day,
    showBarChart: showBarChart
  };
};

export const setWeatherInformation = (weatherInformation) => {
  return {
    type: actionTypes.SET_WEATHER_INFORMATION,
    weatherInformation: weatherInformation,
  };
};

export const setWeatherInformationStart = () => {
  return {
    type: actionTypes.SET_WEATHER_INFORMATION_START,
  };
};

export const initWeatherInformation = () => {
  return (dispatch) => {
    dispatch(setWeatherInformationStart());
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=62b4b957dbc74ac2867536beec3ad9de&cnt=40&units=metric"
      )
      .then((response) => {
        dispatch(setWeatherInformation(response.data));
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
};
