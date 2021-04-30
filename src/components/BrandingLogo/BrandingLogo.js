import React from 'react';
import useStyles from './styles';
import { Link } from '@material-ui/core';

const BrandingLogo = () => {
  const classes = useStyles();
  return (
    <Link href="/">
      <div className={classes.root}>
        <div className={classes.combinedShape}>
          <img
            src="static/img/logo.svg"
            alt="Branding logo"
            className={classes.logo}
          />
        </div>
      </div>
    </Link>
  );
};

export default BrandingLogo;
