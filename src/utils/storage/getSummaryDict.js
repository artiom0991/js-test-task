export async function getSummaryDict() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(["summaryDict"], (result) => {
      if (chrome.runtime.lastError) {
        console.warn(
          "Ошибка при чтении из chrome.storage:",
          chrome.runtime.lastError
        );
        resolve({});
        return;
      }

      const summaryDict = result.summaryDict || {};
      resolve(summaryDict);
    });
  });
}
