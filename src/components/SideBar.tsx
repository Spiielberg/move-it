import Router from 'next/router';

import styles from '../styles/components/SideBar.module.css';

function SideBar() {
  function handleGoBack() {
    Router.back();
  }

  return (
    <div className={styles.container}>
      <img src='icons/logo-blue.svg' alt='Logo' onClick={handleGoBack} />
    </div>
  );
}

export default SideBar;
