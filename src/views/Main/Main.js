import React from 'react';
import Head from 'next/head';
import useStyles from './styles';
// import Router from 'next/router';
import { MainLayout } from 'layout';
import { Header, Footer } from 'components';

export default function MainView() {
  const classes = useStyles();

  // route to path
  // const onClick= () => {
  //   Router.push('/register-form');
  // };

  return (
    <>
      <MainLayout>
        <Head>
          <title>Nextjs Boilerplate</title>
          <meta
            name="description"
            content="Nextjs - Welcome to Nextjs Boilerplate"
          ></meta>
        </Head>
        <main>
          <div className={classes.pageContainer}>
            <div className={classes.contentWrap}>
              <Header />
              <p>Home</p>
            </div>
            <Footer />
          </div>
        </main>
      </MainLayout>
    </>
  );
}
