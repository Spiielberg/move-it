import Head from 'next/head';

import Login from '../components/Login';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <div className={styles.body}>
        <Login />
      </div>
    </>
  );
}
