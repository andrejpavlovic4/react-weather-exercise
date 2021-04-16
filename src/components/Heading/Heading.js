import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const heading = () => {
  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      textAlign: "center",
      color: "#fff",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2">Weather Forecast Munich</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default heading;
