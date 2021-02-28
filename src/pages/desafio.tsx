import { useEffect } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Router from 'next/router';

import SideBar from '../components/SideBar';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Challenge.module.css';

interface ChallengeProps {
  login: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Challenge(props: ChallengeProps) {
  useEffect(() => {
    if (!props.login || props.login === '') {
      Router.push('/');
    }
  }, []);

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Desafio | move.it</title>
        </Head>

        <SideBar />

        <>
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  let { login } = ctx.req.cookies;

  if (!login) {
    login = '';
  }

  return {
    props: {
      login,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
