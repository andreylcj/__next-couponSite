import React from 'react'
import '../assets/styles/globals.css';
import Layout from '../layout/Layout';
import Head from 'next/head'
import { Provider } from 'react-redux';
import Store from '../redux_store/Store'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={Store}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp