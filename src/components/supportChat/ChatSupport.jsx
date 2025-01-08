import { useState } from "react";
import "./chatSupport.scss"; // Стили

const ChatSupport = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return; // Проверка на пустую строку

    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]); // Добавление сообщения пользователя

    try {
      const response = await fetch("http://localhost:3001", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      const botMessage = { role: "assistant", content: data.reply };
      setMessages((prevMessages) => [...prevMessages, botMessage]); // Добавление ответа бота
    } catch (err) {
      console.error("Ошибка запроса:", err);
      const errorMessage = { role: "assistant", content: "Ошибка соединения с сервером." };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setInput(""); // Очистка ввода
  };

  return (
    <div className="chat-container">
      {isChatOpen ? (
        <div className="chat-box">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <p key={index} className={msg.role}>
                {msg.content}
              </p>
            ))}
          </div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Введите сообщение..."
          />
          <button onClick={sendMessage}>Отправить</button>
          <button onClick={() => setIsChatOpen(false)}>Закрыть</button>
        </div>
      ) : (
        <button className="open-chat" onClick={() => setIsChatOpen(true)}>
          Открыть чат
        </button>
      )}
    </div>
  );
};

export default ChatSupport;
