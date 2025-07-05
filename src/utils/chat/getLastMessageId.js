export function getLastMessageId() {
  const messages = document.querySelectorAll("[data-message-id]");
  if (messages.length === 0) return null;

  const lastMessage = messages[messages.length - 1];
  return Number(lastMessage.getAttribute("data-message-id"));
}
