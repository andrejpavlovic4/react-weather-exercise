import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import BarChart from "../../BarChart/BarChart";
import { connect } from "react-redux";
import * as weatherInformationActions from "../../../store/actions";

const card = (props) => {

  /**
   * Toggles Barchart onClick
   * @param id
   * @param day
   */
  const toggleBarChart = (id, day) => {
    props.setBarChartVisibility(id, day, props.showBarChart);
  };

  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      marginBottom: 30,
    },
    media: {
      height: 180,
      width: 250,
    },
    card: {
      maxWidth: 345,
      marginTop: 200,
      backgroundColor: "transparent",
      color: "#fff",
      boxShadow: "0 10px 20px rgba(0, 0, 0, .3)",
      border: "1px solid rgba(255, 255, 255, .2)",
    },
    typography: {
      textAlign: "center",
    },
  }));

  const classes = useStyles();
  const items = [];
  let card;

  card = (
    <Grid
      container
      justify="center"
      spacing={8}
      className={classes.root}
      key="1"
    >
      {props.item.map((value) => (
        <Grid item key={value.id}>
          <Card
            onClick={() => toggleBarChart(value.id, value.day)}
            className={classes.card}
            key={value.id}
          >
            <CardActionArea key={value.id}>
              <CardMedia
                className={classes.media}
                image={`http://openweathermap.org/img/wn/${value.icon}@4x.png`}
                alt={"OpenWeather Icon"}
                title="Contemplative Reptile"
              />
              <CardContent key={value.id}>
                <Typography
                  className={classes.typography}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {`${value.day}`}
                </Typography>
                <Typography
                  className={classes.typography}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {`Average: ${
                    props.selectedValue === "celcius"
                      ? value.temp + " °C"
                      : value.temp * 1.8 + 32 + " °F"
                  }`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
  items.push(card);

  // Rendering of the Barchart and sending the day of the clicked Card
  let barChart;
  if (props.showBarChart) {
    barChart = <BarChart day={props.day} />;
  }

  return (
    <div>
      {items}
      {barChart}
    </div>
  );
};

/**
 * Connect with Redux for state receiving
 * @param state
 * @returns {{showBarChart: (boolean|*), selectedValue: (string|*)}}
 */
const mapStateToProps = (state) => {
  return {
    selectedValue: state.selectedValue,
    showBarChart: state.showBarChart,
    id: state.id,
    day: state.day
  };
};

/**
 * Connect with Redux for dispatching actions
 * @param dispatch
 * @returns {{setBarChartVisibility: (function(): *)}}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    setBarChartVisibility: (id, day, showBarChart) =>
      dispatch(
        weatherInformationActions.setBarchartVisibility(id, day, showBarChart)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(card);
