import {
  parseMessageList,
  getLastMessageId,
} from "utils/chat/parseMessageList";
import { getApiKey } from "utils/storage/getApiKey";
import { getSummaryDict } from "utils/storage/getSummaryDict";
import { updateSummaryDict } from "utils/storage/updateSummaryDict";
import { fetchChatSummary } from "services/openai";

export async function handleChatSwitch(hash, setSummary) {
  try {
    console.log("Hash изменился:", hash);
    const lastMessageId = getLastMessageId();
    const summaryDict = await getSummaryDict();

    if (!lastMessageId) {
      setSummary("");
      return;
    }

    if (summaryDict?.[hash]?.lastMsgId == lastMessageId) {
      setSummary(summaryDict?.[hash]?.summary || "");
    } else {
      try {
        const chatText = parseMessageList();
        const apiKey = await getApiKey();
        const summary = await fetchChatSummary(chatText, apiKey);

        await updateSummaryDict(hash, lastMessageId, summary);
        setSummary(summary);
      } catch (error) {
        setSummary("");
        console.error("Ошибка при обработке чата:", error.message);
      }
    }
  } catch (error) {
    setSummary("");
    console.error("Ошибка при обработке чата:", error.message);
  }
}
