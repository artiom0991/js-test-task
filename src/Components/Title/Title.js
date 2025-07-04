import React from "react";
import styled from "styled-components";
import { Header } from "components/UI/Layout/Header";
import { NavigationButton } from "components/UI/Layout/NavigationButton";
import { Logo } from "components/UI/Layout/Logo";
import { Show } from "components/UI/Show";
import { WindowNavigation } from "components/UI/Layout/WindowNavigation";
import { WindowDescription } from "components/UI/Layout/WindowDescription";
import { TitleText } from "components/UI/Layout/TitleText";

export const Title = ({
  isOpen,
  setIsOpen,
  isMinimized,
  setMinimized,
  isSettingsOpen,
  setSettingsOpen,
}) => {
  return (
    <Header>
      <WindowDescription>
        <Logo>G</Logo>
        <TitleText>Grensa.AI</TitleText>
      </WindowDescription>
      <WindowNavigation>
        <NavigationButton
          icon="settings.svg"
          alt="Открыть настройки"
          title="Настройки"
          onClick={() => setSettingsOpen(true)}
        />
        <Show
          when={isOpen}
          fallback={
            <NavigationButton
              icon="maximize.svg"
              alt="Развернуть окно"
              title="Развернуть"
              onClick={() => isMinimized(true)}
            />
          }
        >
          <NavigationButton
            icon="minimize.svg"
            alt="Свернуть окно"
            title="Свернуть"
            onClick={() => isMinimized(false)}
          />
        </Show>
        <NavigationButton
          icon="close.svg"
          alt="Закрыть настройки"
          title="Закрыть"
          onClick={() => setIsOpen(false)}
        />
      </WindowNavigation>
    </Header>
  );
};
