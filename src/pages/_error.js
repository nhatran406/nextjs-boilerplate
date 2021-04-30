import React from 'react';

function Error({ statusCode }) {
  return (
    <p>
      {statusCode ? `Lỗi ${statusCode} rồi :(( ` : 'Lỗi gì đó ở đây rồi nè'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
