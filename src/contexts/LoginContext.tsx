import { createContext, ReactNode, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface LoginContextData {
  login: string;
  handleLogin: (user: string) => void;
}

interface LoginProviderProps {
  children: ReactNode;
  login: string;
}

export const LoginContext = createContext({} as LoginContextData);

export function LoginProvider({ children, ...rest }: LoginProviderProps) {
  const [login, setLogin] = useState(rest.login ?? '');

  useEffect(() => {
    Cookies.set('login', String(login));
  }, [login]);

  function handleLogin(user: string) {
    setLogin(user);
  }

  return (
    <LoginContext.Provider value={{ login, handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
}
