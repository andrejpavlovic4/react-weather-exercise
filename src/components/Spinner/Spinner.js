import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
}));

const spinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={100} color={'secondary'}/>
    </div>
  );
}

export default spinner;