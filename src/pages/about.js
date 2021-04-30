/* eslint-disable react/display-name */
import React from 'react';
import dynamic from 'next/dynamic';
import { ViewLoading } from 'components';
const AboutView = dynamic(() => import('views/About'), {
  loading: () => <ViewLoading />,
});

export default function RegisterPage() {
  return (
    <>
      <AboutView />
    </>
  );
}
