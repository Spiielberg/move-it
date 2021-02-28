import { useContext, useState, KeyboardEvent, useEffect } from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';

import { LoginContext } from '../contexts/LoginContext';

import styles from '../styles/components/Login.module.css';

function Login() {
  const [userInput, setUserInput] = useState('');

  const { handleLogin } = useContext(LoginContext);

  function handleGithubLogin() {
    if (userInput !== '') {
      handleLogin(userInput);

      Router.push('/desafio');
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleGithubLogin();
    }
  }

  return (
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
          onKeyDown={handleKeyDown}
        />
        <button type='button' onClick={handleGithubLogin}>
          <img src='icons/arrow-left.svg' alt='Arrow left' />
        </button>
      </div>
    </div>
  );
}

export default Login;
