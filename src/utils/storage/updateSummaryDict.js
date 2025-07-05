export async function updateSummaryDict(chatId, lastMsgId, summaryText) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(["summaryDict"], (result) => {
      const summaryDict = result.summaryDict || {};

      if (!chatId || !summaryText) {
        return reject(new Error("chatId и summaryText обязательны"));
      }

      summaryDict[chatId] = {
        summary: summaryText,
        lastMsgId: lastMsgId,
      };

      chrome.storage.local.set({ summaryDict }, () => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(summaryDict[chatId]);
        }
      });
    });
  });
}
