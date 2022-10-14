import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next</title>
        <meta name="description" content="Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Next</h1>
      </main>
    </div>
  );
};

export default Home;
