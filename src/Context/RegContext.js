import React, { createContext, useState } from "react";

const RegContext = createContext();

const RegisterProvider = ({ children }) => {
  const [register, setRegister] = useState({});

  const value = React.useMemo(
    () => ({
      register,
      setRegister,
    }),
    [register, setRegister]
  );

  return (
    <RegContext.Provider value={value}>
      {children}
    </RegContext.Provider>
  );
};

export { RegContext, RegisterProvider };