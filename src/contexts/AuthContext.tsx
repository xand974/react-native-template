import React, {useState, ReactElement} from 'react';

type ContextProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLogged: boolean) => void;
};

export const AuthContext = React.createContext<ContextProps>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const AuthContextProvider = ({children}: {children: ReactElement}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const value = React.useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
    }),
    [isLoggedIn],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
