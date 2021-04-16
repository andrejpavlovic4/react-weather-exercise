import reducer from "./reducer";
import * as actionTypes from "../actions/actionTypes";

describe("reducer ", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      loading: true,
      weatherInformation: null,
      city: null,
      selectedValue: "celcius",
      showBarChart: false,
      toggledArray: [],
      id: null,
    });
  });

  it("should ", () => {
    expect(
      reducer({
        loading: true,
        weatherInformation: null,
        city: null,
        selectedValue: "celcius",
        showBarChart: false,
        toggledArray: [],
        id: null,
      }, {type: actionTypes.SET_RADIO_SELECTED_VALUE, value: 'celcius'})
    ).toEqual({
      loading: true,
      weatherInformation: null,
      city: null,
      selectedValue: "celcius",
      showBarChart: false,
      toggledArray: [],
      id: null,
    });
  });
});
