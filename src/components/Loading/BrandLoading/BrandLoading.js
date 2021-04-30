import React from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import { useStyles } from './styles';

const BrandLoading = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <div className={classes.container}>
          <div>
            <img src="/static/img/logo.png" alt="branding logo" />
            <LinearProgress
              classes={{
                root: classes.linearProgressRoot,
                colorPrimary: classes.linearColorPrimary,
                barColorPrimary: classes.linearBarColorPrimary,
              }}
            />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default BrandLoading;
