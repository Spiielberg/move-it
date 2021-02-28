import { useEffect, useState } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Cookies from 'js-cookie';

import { LoginProvider } from '../contexts/LoginContext';

import styles from '../styles/pages/Home.module.css';

interface HomeProps {
  login: string;
}

export default function Home(props: HomeProps) {
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    Cookies.set('login', String(props.login));
  }, [props.login]);

  function handleGithubLogin() {
    console.log(userInput);
  }

  return (
    <LoginProvider login={props.login}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <div className={styles.body}>
        <div className={styles.container}>
          <img src='icons/logo.svg' alt='Logo' />
          <strong>Bem-vindo</strong>
          <div className={styles.githubText}>
            <img src='icons/github.svg' alt='Github' />
            <p>Faça login com seu Github para começar</p>
          </div>
          <div className={styles.inputDiv}>
            <input
              type='text'
              placeholder='Digite seu username'
              value={userInput}
              onChange={event => setUserInput(event.target.value)}
            />
            <button type='button' onClick={handleGithubLogin}>
              <img src='icons/arrow-left.svg' alt='Arrow left' />
            </button>
          </div>
        </div>
      </div>
    </LoginProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  let { login } = ctx.req.cookies;

  if (!login) {
    login = '';
  }

  return {
    props: {
      login,
    },
  };
};
