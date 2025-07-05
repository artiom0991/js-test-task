export function getApiKey() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(["openaiApiKey"], (result) => {
      const key = result.openaiApiKey;
      if (!key) {
        reject(new Error("OpenAI API ключ не найден в chrome.storage.local"));
      } else {
        resolve(key);
      }
    });
  });
}
