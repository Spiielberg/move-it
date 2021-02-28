import { LoginProvider } from '../contexts/LoginContext';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider login={pageProps.login}>
      <Component {...pageProps} />
    </LoginProvider>
  );
}

export default MyApp;
