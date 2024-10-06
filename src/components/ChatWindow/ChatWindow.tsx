import React, { useState } from 'react';
import styled from 'styled-components';
import { ChatMessages, Message } from '../ChatMessages';

// Styled components for ChatWindow
const ChatWindowContainer = styled.div`
  position: fixed;
  bottom: 70px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 9999;
`;

const ChatHeader = styled.div`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  margin-right: 10px;
`;

const ChatInputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ddd;
`;

const ChatInput = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const SendButton = styled.button`
  margin-left: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

interface ChatWindowInterface {
  messages: Message[];
  handleSendMessage: (message: string) => void;
  handleClose: () => void; // New prop for closing the chat window
}

export const ChatWindow: React.FC<ChatWindowInterface> = ({ messages, handleSendMessage, handleClose }) => {
  const [chatInput, setChatInput] = useState<string>("");

  const handleSend = () => {
    if (chatInput.trim()) {
      handleSendMessage(chatInput);
      setChatInput('');
    }
  };

  return (
    <ChatWindowContainer>
      <ChatHeader>
        <span>Chat Window</span>
        <CloseButton onClick={handleClose}>×</CloseButton>
      </ChatHeader>
      <ChatMessages messages={messages} />
      <ChatInputContainer>
        <ChatInput
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Type a message"
        />
        <SendButton onClick={handleSend}>Send</SendButton>
      </ChatInputContainer>
    </ChatWindowContainer>
  );
};
