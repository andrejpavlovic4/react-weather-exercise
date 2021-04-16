import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: true,
  weatherInformation: null,
  city: null,
  selectedValue: "celcius",
  showBarChart: false,
  toggledArray: [],
  id: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_WEATHER_INFORMATION:
      return {
        ...state,
        weatherInformation: action.weatherInformation,
        city: action.weatherInformation.city.name,
        loading: false,
      };
    case actionTypes.SET_WEATHER_INFORMATION_START:
      return {
        ...state,
      };
    case actionTypes.SET_BARCHART_VISIBILITY:

      let showBarChart;

      // Filter the id of the Card on which a click happened
      const toggledCardById = state.weatherInformation.list
        .filter((element) => element.dt === action.id)
        .map((element) => element.dt);

      // Copy array (immutability) and add the newest Card ID to the clicked Array (Array which holds all Card IDs)
      const clickedArray = [...state.toggledArray];
      clickedArray.push(...toggledCardById);

      // Toggle the Barchart on a Card that was clicked on so that the card that is clicked
      // next doesn't result in a UN-toggling manner.
      showBarChart =
        (action.id === state.toggledArray[state.toggledArray.length - 1]) && action.showBarChart === !showBarChart;

      return {
        ...state,
        showBarChart: !showBarChart,
        toggledArray: clickedArray,
        id: action.id,
        day: action.day
      };
    case actionTypes.SET_RADIO_SELECTED_VALUE:
      return {
        ...state,
        selectedValue: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
