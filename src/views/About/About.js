import React from 'react';
// import React, { useState, Fragment } from 'react';
import Head from 'next/head';
// import Router from 'next/router';
// import httpStatus from 'http-status';
import { MainLayout } from 'layout';
import { Header, Footer } from 'components';
// import { handleGeneralError } from 'helpers';
// import { apiName } from 'services';
import useStyles from './styles';

export default function RegisterFormView() {
  const classes = useStyles();
  //   const [loading, setLoading] = useState(false);

  //   const onClickBack = () => {
  //     Router.push('/');
  //   };

  // function MUST REPLACE from fetchXXX to clearly name
  //   const fetchXXX = async () => {
  //     setLoading(true);
  //     try {
  //       setLoading(true);
  //       const res = await apiName();
  //       if (res && [httpStatus.OK].includes(res.status)) {
  //         setLoading(false);
  //         return res.data;
  //       }
  //     } catch (error) {
  //       handleGeneralError(error);
  //       setLoading(false);
  //       return null;
  //     }
  //     return null;
  //   };

  return (
    <>
      <MainLayout>
        <Head>
          <title>Nextjs Boilerplate</title>
          <meta name="description" content="Nextjs Boilerplate - About"></meta>
        </Head>
        <main>
          <div className={classes.pageContainer}>
            <div className={classes.contentWrap}>
              <Header />
              <div className={classes.root}>
                <div className={classes.container}>
                  <p>Talk about...</p>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </main>
      </MainLayout>
    </>
  );
}
