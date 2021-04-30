/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import ReactDom from 'react-dom';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'assets/styles/theme';
import 'assets/scss/index.scss';

import CssBaseline from '@material-ui/core/CssBaseline';

export default class MyApp extends App {
  componentDidMount() {
    if (process.env.NODE_ENV !== 'production') {
      const axe = require('react-axe');
      axe(React, ReactDom, 1000);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Component {...pageProps} />
          </CssBaseline>
        </ThemeProvider>
      </>
    );
  }
}
