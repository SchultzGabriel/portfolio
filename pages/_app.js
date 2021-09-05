/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
