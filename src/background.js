chrome.action.onClicked.addListener((tab) => {
  if (tab.url && tab.url.includes("web.telegram.org")) {
    chrome.tabs.sendMessage(tab.id, { action: "toggle" });
  }
});
