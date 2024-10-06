import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ChatWindow } from './components';

const StyledButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 0;
  z-index: 9999;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
`;

const Chat: React.FC = () => {
  const [showChatWindow, setShowChatWindow] = useState<boolean>(false);
  const [messages, setMessages] = useState<{ text: string; isSent: boolean }[]>([]);

  const toggleChatWindow = () => {
    setShowChatWindow(!showChatWindow);
  };

  const handleSendMessage = (message: string) => {
    if (message.trim()) {
      setMessages([...messages, { text: message, isSent: true }]);
      
      // Simulate receiving a message after sending one
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: 'Received message', isSent: false }]);
      }, 1000);
    }
  };

  return (
    <div>
      <StyledButton onClick={toggleChatWindow}>
        Chat
      </StyledButton>

      {showChatWindow && (
        <ChatWindow messages={messages} handleSendMessage={handleSendMessage} handleClose={toggleChatWindow} />
      )}
    </div>
  );
};

export const renderChat = (): void => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(<Chat />, container);
};
