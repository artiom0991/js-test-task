import { useEffect, useRef } from "react";
import { Settings } from "components/Settings/Settings";
import { Main } from "components/Main/Main";
import { handleChatSwitch } from "handlers/handleChatSwitch";
import { useAppContext } from "context/AppContext";

export const App = () => {
  const lastHashRef = useRef(location.hash);
  const { getSummary, setSummary } = useAppContext();

  useEffect(() => {
    const interval = setInterval(async () => {
      if (location.hash !== lastHashRef.current) {
        lastHashRef.current = location.hash;
        await handleChatSwitch(location.hash, setSummary);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Main />
      <Settings />
    </>
  );
};
