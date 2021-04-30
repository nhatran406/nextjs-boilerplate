import React from 'react';
import useStyles from './styles';
import { IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const BoxWhite = props => {
  const { iconUrl, content } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.iconLocation}>
        <img src={iconUrl} alt="icon" className={classes.icon} />
      </div>
      <div className={classes.content}>{content}</div>
      <div className={classes.navigateBtn}>
        <IconButton aria-label="left-arrow" className={classes.leftArrow}>
          <ArrowForwardIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default BoxWhite;
