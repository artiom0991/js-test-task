import styled from "styled-components";
import Draggable from "react-draggable";
import { useTranslation } from "react-i18next";
import { Header } from "components/UI/Layout/Header";
import { NavigationButton } from "components/UI/Layout/NavigationButton";
import { WindowDescription } from "components/UI/Layout/WindowDescription";
import { WindowIcon } from "components/UI/Layout/WindowIcon";
import { TitleText } from "components/UI/Layout/TitleText";
import { SettingsForm } from "components/UI/Layout/SettingsForm";
import { WindowNavigation } from "components/UI/Layout/WindowNavigation";
import { Switch, Match } from "components/UI/Switch";
import { useAppContext } from "context/AppContext";

const SettingsWindow = styled.div`
  width: 600px;
  min-height: 400px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  overflow-y: auto;
  color: #111827;
  position: fixed;
  top: calc(50% - 200px);
  left: calc(50% - 300px);
`;

export const Settings = () => {
  const { t } = useTranslation();
  const { isSettingsOpen, setSettingsOpen } = useAppContext();
  return (
    <Switch>
      <Match when={isSettingsOpen}>
        <Draggable handle=".drag-handle">
          <SettingsWindow>
            <Header className="drag-handle">
              <WindowDescription>
                <WindowIcon
                  icon="settings.svg"
                  alt={t("settings.title")}
                  title={t("settings.title")}
                />
                <TitleText>{t("settings.title")}</TitleText>
              </WindowDescription>
              <WindowNavigation>
                <NavigationButton
                  icon="close.svg"
                  alt={t("settings.buttons.close")}
                  title={t("settings.buttons.close")}
                  onClick={() => setSettingsOpen(false)}
                />
              </WindowNavigation>
            </Header>
            <SettingsForm />
          </SettingsWindow>
        </Draggable>
      </Match>
    </Switch>
  );
};
