import React from 'react';
import Lottie from 'react-lottie';
import ViewLoadingJson from './View-loading.json';

const ViewLoading = ({ height = 200 }) => {
  return (
    <div>
      <Lottie
        options={{
          animationData: ViewLoadingJson,
          autoplay: true,
        }}
        height={height}
      />
    </div>
  );
};

export default ViewLoading;
