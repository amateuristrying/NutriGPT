import { useState } from 'react';
import ChatBubble from '../components/ChatBubble';
import InputBar from '../components/InputBar';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, isAi: true, text: "Good morning, User! How can I help you support your nutrition and fitness goals today?" }
  ]);

  const handleSend = (text) => {
    setMessages(prev => [...prev, { id: Date.now(), isAi: false, text }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, isAi: true, text: "I'm processing that for you right now..." }]);
    }, 1000);
  };

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '24px' }}>NutriGPT</h2>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
          👤
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', marginBottom: '24px', paddingRight: '4px' }}>
        {messages.map(m => (
          <ChatBubble key={m.id} text={m.text} isAi={m.isAi} />
        ))}
      </div>

      <div style={{ marginBottom: '16px', display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {["Calculate BMI", "What should I eat today?", "Suggest a workout"].map((chip, idx) => (
          <div key={idx} onClick={() => handleSend(chip)} style={{
            padding: '10px 16px',
            backgroundColor: 'var(--surface)',
            borderRadius: '20px',
            fontSize: '14px',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
            color: 'var(--text-muted)'
          }}>
            {chip}
          </div>
        ))}
      </div>

      <InputBar onSubmit={handleSend} placeholder="Ask NutriGPT..." />
    </div>
  );
}
