import React, { createContext, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const [user, setUser] = useState({});

  const values = useMemo(
    () => ({ isAuth, setAuth, user, setUser }),
    [isAuth, setAuth]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
