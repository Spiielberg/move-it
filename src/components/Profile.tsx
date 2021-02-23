import styles from '../styles/components/Profile.module.css';

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/spiielberg.png' alt='Spielberg Hanielly' />
      <div>
        <strong>Spielberg Hanielly</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;
