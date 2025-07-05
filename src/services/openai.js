export async function fetchChatSummary(messagesText, apiKey) {
  const endpoint = "https://api.openai.com/v1/chat/completions";

  const body = {
    model: "gpt-4",
    messages: [
      { role: "system", content: "Сделай краткое резюме следующего чата:" },
      { role: "user", content: messagesText },
    ],
    temperature: 0.7,
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Ошибка при обращении к OpenAI API");
  }

  const data = await response.json();
  return data.choices[0].message.content;
}
