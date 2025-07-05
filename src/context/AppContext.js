import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMainOpen, setMainOpen] = useState(true);
  const [isMainMinimized, setMainMinimized] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [getSummary, setSummary] = useState("");

  return (
    <AppContext.Provider
      value={{
        isMainOpen,
        setMainOpen,
        isMainMinimized,
        setMainMinimized,
        isSettingsOpen,
        setSettingsOpen,
        getSummary,
        setSummary,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
