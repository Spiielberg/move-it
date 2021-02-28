import { createContext, ReactNode, useState } from 'react';

interface LoginContextData {
  login: string;
}

interface LoginProviderProps {
  children: ReactNode;
  login: string;
}

export const LoginContext = createContext({} as LoginContextData);

export function LoginProvider({ children, ...rest }: LoginProviderProps) {
  const [login, setLogin] = useState(rest.login ?? '');
  return (
    <LoginContext.Provider value={{ login }}>{children}</LoginContext.Provider>
  );
}
