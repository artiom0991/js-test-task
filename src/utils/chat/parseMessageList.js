export function getChatName() {
  const nameElement = document.querySelector(".MiddleHeader .fullName");

  if (!nameElement) {
    throw new Error("Имя пользователя не найдено!");
  }

  return nameElement.textContent.trim();
}

export function getMessageList() {
  const messages = document.querySelectorAll(".Message");

  if (messages.length === 0) {
    throw new Error("Сообщения не найдены!");
  }

  return messages;
}

export function getLastMessageId() {
  const messages = getMessageList();
  const lastMessage = messages[messages.length - 1];
  return Number(lastMessage.getAttribute("data-message-id"));
}

export function parseMessageList() {
  const userName = getChatName();
  const messages = getMessageList();

  return Array.from(messages).reduce((acc, el) => {
    const sender = el.classList.contains("own") ? "Me: " : `${userName}: `;
    const text = el.textContent?.replace(/\d{1,2}:\d{2}/g, "").trim() || "";
    if (text) {
      acc += `${sender}${text}\n`;
    }
    return acc;
  }, "");
}
