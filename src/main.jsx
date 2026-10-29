import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Heart, Send, Sparkles, UserRound } from "lucide-react";
import "./index.css";

function App() {
const [message, setMessage] = useState("");
const [messages, setMessages] = useState([
{ text: "Hey jaan ❤️ Welcome to MyDream AI! Aaj ka din kaisa raha? 😊", mine: false }
]);
const [companion, setCompanion] = useState("Ava");

function sendMessage(e) {
e.preventDefault();
const text = message.trim();
if (!text) return;

setMessages(prev => [
  ...prev,
  { text, mine: true },
  {
    text: `Aww jaan ❤️ Main ${companion} hoon! Real AI replies ke liye Gemini backend connect karna hoga. 😊`,
    mine: false
  }
]);
setMessage("");

}

return (
<main className="app">
<header className="topbar">
<div className="logo"><Heart fill="white" /></div>
<div>
<h1>MyDream AI</h1>
<p><span className="online" /> Your AI companion</p>
</div>
<Sparkles className="sparkle" />
</header>

  <section className="welcome">
    <div className="avatar">💗</div>
    <h2>Hey jaan! 👋</h2>
    <p>Your little corner of love, fun &amp; conversations.</p>
    <select value={companion} onChange={e => setCompanion(e.target.value)}>
      <option>Ava</option>
      <option>Mira</option>
      <option>Zoya</option>
    </select>
  </section>

  <section className="chat">
    {messages.map((m, i) => (
      <div key={i} className={`message ${m.mine ? "mine" : "theirs"}`}>
        {!m.mine && <span className="tiny-avatar"><UserRound size={16}/></span>}
        <p>{m.text}</p>
      </div>
    ))}
  </section>

  <form className="composer" onSubmit={sendMessage}>
    <input
      value={message}
      onChange={e => setMessage(e.target.value)}
      placeholder="Message your companion..."
      aria-label="Message your companion"
    />
    <button aria-label="Send message" type="submit"><Send size={20}/></button>
  </form>
  <footer>Made with ❤️ • AI companion demo</footer>
</main>

);
}

createRoot(document.getElementById("root")).render(<App />);
