import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { LoginContext } from '../contexts/LoginContext';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

function Profile() {
  const { login } = useContext(LoginContext);
  const { level } = useContext(ChallengesContext);

  const [githubName, setGithubName] = useState('');

  useEffect(() => {
    if (login !== '') {
      axios.get(`https://api.github.com/users/${login}`).then(response => {
        setGithubName(response.data.name);
      });
    }
  }, []);

  return (
    <div className={styles.profileContainer}>
      <img
        src={`https://github.com/${login}.png`}
        alt={`https://api.github.com/users/${githubName}`}
      />
      <div>
        <strong>{githubName}</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level {level}
        </p>
      </div>
    </div>
  );
}

export default Profile;
