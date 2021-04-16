import React from "react";

import Carousel from "react-material-ui-carousel";
import Card from "./Card/Card";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

const cardSlider = (props) => {
  /**
   *
   * @param items
   * @param n
   *
   * Grouping items into n equal distributed arrays
   *
   */
  const group = (items, n) =>
    items.reduce((acc, x, i) => {
      const idx = Math.floor(i / n);
      acc[idx] = [...(acc[idx] || []), x];
      return acc;
    }, []);

  const weatherInformation = props.weatherInformation;
  const simplifiedWeatherObject = [];
  const relevantWeatherData = [];
  let sum = 0;
  let average = 0;
  let indexGroup;
  const dayCounter = [];
  const dayData = [];

  /**
   * Creates object with only the days and temperatures
   */
  for (let i = 0; i < weatherInformation.length; i++) {
    const currentDay = new Date(weatherInformation[i].dt_txt).toLocaleString(
      "en-US",
      {
        month: "long",
        day: "numeric",
      }
    );

    const currentDayTime = new Date(weatherInformation[i].dt_txt).toLocaleString(
      "en-US",
      {
        hour: "numeric"
      }
    );

    simplifiedWeatherObject.push({
      id: weatherInformation[i].dt,
      day: currentDay,
      temp: weatherInformation[i].main.temp,
      icon: weatherInformation[i].weather[0].icon,
      dayTime: currentDayTime
    });
  }

  const weatherData = [...simplifiedWeatherObject];

  /**
   * Creates an object with day counts (ex. "April 15": 2)
   */
  const countList = weatherData.reduce(function (p, c) {
    p[c.day] = (p[c.day] || 0) + 1;
    return p;
  }, {});

  /**
   * Converts above object to array, so we can map through it
   */
  Object.keys(countList).map((key) => dayCounter.push(countList[key]));

  /**
   * Create array of objects with individual data (like days and temperatures)
   */
  dayCounter.map((element) => {
    return dayData.push(weatherData.splice(0, element));
  });

  /**
   * Groups simplified weather object and creates final object with only the relevant
   * data (average temperature of one day and the day name in the format: mm-dd)
   */
  dayData.map((group) => {
    group.map((element, i) => {
      indexGroup = i;
      sum += element.temp;
      return sum;
    });
    average = sum / group.length;

    relevantWeatherData.push({
      id: group[indexGroup].id,
      day: group[0].day,
      temp: Math.round(average),
      icon: group[indexGroup].icon,
      dayTime: group[indexGroup].dayTime
    });
    sum = 0;
    return average;
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <Carousel
          autoPlay={false}
          animation="slide"
          duration={"500"}
          navButtonsAlwaysVisible={true}
          indicators={false}
          cycleNavigation={false}
          navButtonsWrapperProps={{ style: { top: 0, height: "10%" } }}
          fullHeightHover={false}
          timeout={500}
          navButtonsProps={{
            style: {
              marginRight: "20vw",
              marginLeft: "20vw",
            },
          }}
        >
          {group(relevantWeatherData, 3).map((item, index) => {
            return <Card item={item} key={index} data={relevantWeatherData}/>;
          })}
        </Carousel>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.weatherInformation,
    weatherInformation: state.weatherInformation.list,
  };
};

export default connect(mapStateToProps)(cardSlider);
