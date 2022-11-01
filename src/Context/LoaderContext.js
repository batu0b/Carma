import React, { useState, createContext, useMemo } from "react";
import { LoaderModal } from "../Components/LoaderModel";

const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);

  const value = useMemo(
    () => ({
      setLoader,
      loader,
    }),
    [loader]
  );

  return (
    <LoaderContext.Provider value={value}>
      <LoaderModal animationType="none" visible={loader} />
      {children}
    </LoaderContext.Provider>
  );
};

export { LoaderContext, LoaderProvider };
