import React from "react";

import Radio from "@material-ui/core/Radio";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect } from 'react-redux'
import * as weatherInformationActions from "../../store/actions/index";

const temperatureControl = (props) => {

  /**
   * Sets the selected Radio Value from Redux
   * @param event
   */
  const handleChange = (event) => {
    const value = event.target.value;
    props.onChangeRadioSelectedValue(value);
  };

  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      textAlign: "center",
      margin: "60px 0",
      color: "#fff",
    },
  }));

  const classes = useStyles();

  const radioButtonCelcius = (
    <div>
      <FormControlLabel
        value="female"
        control={
          <Radio
            checked={props.selectedValue === "celcius"}
            onChange={handleChange}
            value="celcius"
            name="radio-button-celcius"
            color={"secondary"}
          />
        }
        label="Celcius"
      />
    </div>
  );

  const radioButtonFahrenheit = (
    <div>
      <FormControlLabel
        value="female"
        control={
          <Radio
            checked={props.selectedValue === "fahrenheit"}
            onChange={handleChange}
            value="fahrenheit"
            name="radio-button-fahrenheit"
            color={"secondary"}
          />
        }
        label="Fahrenheit"
      />
    </div>
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          {radioButtonCelcius}
        </Grid>
        <Grid item xs={6}>
          {radioButtonFahrenheit}
        </Grid>
      </Grid>
    </div>
  );
};

/**
 * Connecting Redux for receiving state
 * @param state
 * @returns {{selectedValue: (string|*)}}
 */
const mapStateToProps = (state) => {
  return {
    selectedValue: state.selectedValue,
  };
};

/**
 * Including Redux for dispatching Actions
 * @param dispatch
 * @returns {{onChangeRadioSelectedValue: (function(*=): *)}}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeRadioSelectedValue: (value) =>
      dispatch(weatherInformationActions.setRadioSelectedValue(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(temperatureControl);
