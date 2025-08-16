import React, { useEffect, useState } from 'react';
import '../../styles/dashdetail.css';
import { MdMarkEmailUnread } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const groupByDate = (msgs) => {
  return msgs.reduce((acc, msg) => {
    acc[msg.date] = acc[msg.date] || [];
    acc[msg.date].push(msg);
    return acc;
  }, {});
};

const dateLabel = (date) => {
  const today = new Date().toISOString().slice(0, 10);
  if (date === today) return "Today";
  return new Date(date).toLocaleDateString();
};

const ChatView = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setMessages(data.chatMessages || []));
  }, []);

  const grouped = groupByDate(messages);

  return (
    <div className="chat-view">
      {Object.entries(grouped).map(([date, msgs]) => (
        <div key={date}>
          <center>
            <div className="chat-date-label">{dateLabel(date)}</div>
          </center>
          {msgs.map((msg) => (

            <div key={msg.id} style={{ display: "block" }}>
              <div key={msg.id} className="chat-message">
                <div className="chat-message-text">{msg.text}</div>
                <div className="chat-message-meta">
                  <span className="chat-meta-time">{msg.time}</span>
                  <span className="chat-meta-icon">
                    {msg.source === "email" ? (
                      <span role="img" aria-label="email">
                        <MdMarkEmailUnread size={10} color="#4031a4ff" />
                      </span>
                    ) : (
                      <span role="img" aria-label="whatsapp">
                        <FaWhatsapp size={10} color="#25D366" />
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>

          ))}
        </div>
      ))}
    </div>
  );
};

export default ChatView;
