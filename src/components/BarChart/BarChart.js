import React from "react";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { connect } from "react-redux";
import { EventTracker, HoverState } from "@devexpress/dx-react-chart";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const barChart = (props) => {
  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      marginBottom: 30,
    },
  }));

  const classes = useStyles();
  const measurementInfo = [];

  /**
   * Filter the Weather Information and retrieving only those for the relevant day
   */
  const days = props.weatherInformation.filter(element => new Date(element.dt_txt).toLocaleString(
    "en-US",
    {
      month: "long",
      day: "numeric",
    }
  ) === props.day);

  /**
   * Creates a new Object with only temperatures and time stamps during the day
   */
  days.map((element) => {
    measurementInfo.push({
      temp: props.selectedValue === "celcius" ? (element.main.temp) : (element.main.temp * 1.8 + 32),
      hour: new Date(element.dt_txt).toLocaleString(
        "en-US",
        {
          hour: "numeric"
        })
    });
    return element;
  });

  return (
    <Grid
      justify={"center"}
      container
      spacing={8}
      className={classes.root}
    >
      <Grid item xs={6}>
        <Chart data={measurementInfo} color="#fff">
          <ArgumentAxis/>
          <ValueAxis/>
            <BarSeries color="#fff" valueField="temp" argumentField="hour"/>
            <EventTracker />
            <HoverState />
        </Chart>
      </Grid>
    </Grid>
  );
};

/**
 * Connect with Redux for state receiving
 * @param state
 * @returns {{weatherInformation: (string|string|HTMLElement|*)}}
 */
const mapStateToProps = (state) => {
  return {
    weatherInformation: state.weatherInformation.list,
    selectedValue: state.selectedValue
  };
};

export default connect(mapStateToProps)(barChart);
