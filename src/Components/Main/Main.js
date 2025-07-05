import styled from "styled-components";
import Draggable from "react-draggable";
import { useTranslation } from "react-i18next";
import { Summary } from "components/Summary/Summary";
import { Switch, Match } from "components/UI/Switch";
import { Logo } from "components/UI/Layout/Logo";
import { Header } from "components/UI/Layout/Header";
import { NavigationButton } from "components/UI/Layout/NavigationButton";
import { WindowDescription } from "components/UI/Layout/WindowDescription";
import { Show } from "components/UI/Show";
import { TitleText } from "components/UI/Layout/TitleText";
import { WindowNavigation } from "components/UI/Layout/WindowNavigation";
import { useAppContext } from "context/AppContext";

const MainContainer = styled.div`
  width: 400px;
  height: auto;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  will-change: transform;
  color: #111827;
  top: 100px;
  right: 100px;
  position: fixed;
`;

export const Main = () => {
  const { t } = useTranslation();
  const {
    isMainOpen,
    setMainOpen,
    isMainMinimized,
    setMainMinimized,
    isSettingsOpen,
    setSettingsOpen,
  } = useAppContext();

  return (
    <Switch>
      <Match when={isMainOpen}>
        <Draggable handle=".drag-handle">
          <MainContainer>
            <Header className="drag-handle">
              <WindowDescription>
                <Logo>G</Logo>
                <TitleText>Grensa.AI</TitleText>
              </WindowDescription>
              <WindowNavigation>
                <NavigationButton
                  icon="settings.svg"
                  alt={t("main.buttons.options")}
                  title={t("main.buttons.options")}
                  onClick={() => setSettingsOpen(true)}
                />
                <Show
                  when={isMainMinimized}
                  fallback={
                    <NavigationButton
                      icon="minimize.svg"
                      alt={t("main.buttons.minimize")}
                      title={t("main.buttons.minimize")}
                      onClick={() => setMainMinimized(true)}
                    />
                  }
                >
                  <NavigationButton
                    icon="maximize.svg"
                    alt={t("main.buttons.maximize")}
                    title={t("main.buttons.maximize")}
                    onClick={() => setMainMinimized(false)}
                  />
                </Show>
                <NavigationButton
                  icon="close.svg"
                  alt={t("main.buttons.close")}
                  title={t("main.buttons.close")}
                  onClick={() => setMainOpen(false)}
                />
              </WindowNavigation>
            </Header>
            <Switch>
              <Match when={!isMainMinimized}>
                <Summary />
              </Match>
            </Switch>
          </MainContainer>
        </Draggable>
      </Match>
    </Switch>
  );
};
