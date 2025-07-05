import ReactDOM from "react-dom/client";
import { App } from "./App";
import i18n from "i18n/i18n";
import { I18nextProvider } from "react-i18next";
import { AppProvider } from "context/AppContext";

function injectExtension() {
  if (document.getElementById("telegram-extension-root")) {
    return;
  }

  const extensionContainer = document.createElement("div");
  extensionContainer.id = "telegram-extension-root";
  extensionContainer.style.position = "fixed";
  extensionContainer.style.top = "20px";
  extensionContainer.style.right = "20px";
  extensionContainer.style.zIndex = "10000";
  extensionContainer.style.fontFamily =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

  document.body.appendChild(extensionContainer);

  const root = ReactDOM.createRoot(extensionContainer);
  root.render(
    <AppProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </AppProvider>
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", injectExtension);
} else {
  injectExtension();
}

chrome.runtime.onMessage.addListener((message) => {
  console.log("📩 content.js получил сообщение:", message);
});
