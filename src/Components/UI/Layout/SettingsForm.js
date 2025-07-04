import styled from "styled-components";
import { useState, useEffect } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import {
  SelectLanguage,
  OptionLanguage,
} from "components/UI/Layout/SelectLanguage";

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  margin-bottom: 6px;
  font-size: 14px;
  color: #374151;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  color: #111827;
  outline: none;
  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3);
  }
`;

export const SettingsForm = () => {
  const { t } = useTranslation();
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    const storedKey = localStorage.getItem("openai_api_key");
    if (storedKey) setApiKey(storedKey);

    const storedLang = localStorage.getItem("language");
    if (storedLang) i18n.changeLanguage(storedLang);
  }, []);

  const handleApiKeyChange = (e) => {
    const key = e.target.value;
    setApiKey(key);
    localStorage.setItem("openai_api_key", key);
  };

  const handleLangChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <>
      <FormRow>
        <Label htmlFor="api-key">{t("settings.labels.apiKey")}</Label>
        <Input
          id="api-key"
          type="password"
          value={apiKey}
          onChange={handleApiKeyChange}
          placeholder="sk-..."
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="language">{t("settings.labels.language")}</Label>
        <SelectLanguage
          id="language"
          onChange={handleLangChange}
          value={i18n.language}
        >
          <OptionLanguage value="en">English</OptionLanguage>
          <OptionLanguage value="ru">Русский</OptionLanguage>
        </SelectLanguage>
      </FormRow>
    </>
  );
};
