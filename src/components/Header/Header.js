import React from 'react';
import { Divider, AppBar, Toolbar, Grid } from '@material-ui/core';
import BrandingLogo from '../BrandingLogo';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="secondary">
      <Toolbar className={classes.toolBar}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          className={classes.gridContainer}
        >
          <Grid item xs={6} md={7} className={classes.noPad}>
            <div className={classes.logo}>
              <BrandingLogo />
              <div className={classes.divider}>
                <Divider
                  orientation="vertical"
                  className={classes.dividerInside}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={6} md={5} className={classes.contactArea}></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
