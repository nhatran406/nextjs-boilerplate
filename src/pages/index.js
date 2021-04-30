/* eslint-disable react/display-name */
import React from 'react';
import dynamic from 'next/dynamic';
import { ViewLoading } from 'components';
const MainView = dynamic(() => import('views/Main'), {
  loading: () => <ViewLoading />,
});
import { AppStore } from 'stores';

export default function Root() {
  return (
    <>
      <AppStore.Provider>
        <MainView />
      </AppStore.Provider>
    </>
  );
}
