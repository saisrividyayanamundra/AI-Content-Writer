import { useState } from "react";
import "./MessageWindow.css";

export default function MessageWindow({ open }) {

  // 🧠 messages = chat history (user + agent)
  const [messages, setMessages] = useState([]);

  // 🧠 text = what user types in input box
  const [text, setText] = useState("");

  // 📤 Function to send message
  const sendMessage = () => {
    // ❌ If input is empty, do nothing
    if (!text.trim()) return;

    // ✅ Add USER message to messages array
    setMessages(prev => [
      ...prev,
      { role: "user", content: text }
    ]);

    // Clear input box
    setText("");

    // 🤖 Fake AI reply (agent side)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { role: "agent", content: "This is an AI response" }
      ]);
    }, 800);
  };

  return (
    <div className={`message-window ${open ? "shifted" : ""}`}>

      {/* 🔷 Header */}
      <div className="message-header">AI Content Writer</div>

      {/* 💬 Messages section (only shows after first message) */}
      
      {messages.length > 0 && (
        <div className="message-body">

          {messages.map((msg, index) => (
            <div
              key={index}

              /* 🎯 Decide left or right based on role */
              className={`message ${
                msg.role === "user" ? "user" : "agent"
              }`}
            >
              {msg.content}
            </div>
          ))}

        </div>
      )}

      {/* ✏️ Input section */}
      <div
        className={`message-input ${
          messages.length === 0 ? "center-input" : "bottom-input"
        }`}
      >
        <textarea
  placeholder="Type your message..."
  value={text}
  onChange={(e) => setText(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }}
  rows={1}
/>


        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
