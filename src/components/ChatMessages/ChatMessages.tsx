import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export type Message = { text: string; isSent: boolean };

const ChatBubble = styled.div<{ isSent: boolean }>`
  max-width: 70%;
  margin: 5px 0;
  padding: 10px;
  border-radius: 15px;
  background-color: ${({ isSent }) => (isSent ? '#007bff' : '#e0e0e0')};
  color: ${({ isSent }) => (isSent ? 'white' : 'black')};
  margin-left: ${({ isSent }) => (isSent ? 'auto' : 0)}; 
  margin-right: ${({ isSent }) => (isSent ? 0 : 'auto')}; 
  border-bottom-right-radius: ${({ isSent }) => (!isSent ? '15px' : '0')}; /* Square bottom right for sent */
  border-bottom-left-radius: ${({ isSent }) => (isSent ? '15px' : '0')};   /* Square bottom left for received */
`;

export const ChatMessages: React.FC<{ messages: Message[] }> = ({ messages }) => {
    const chatMessagesRef = useRef<HTMLDivElement>(null);
  
    // Scroll to the bottom when new messages are added
    useEffect(() => {
      if (chatMessagesRef.current) {
        chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
      }
    }, [messages]);
  
    return (
      <div
        ref={chatMessagesRef}
        style={{
          flexGrow: 1,
          padding: '10px',
          overflowY: 'auto',
          backgroundColor: '#f1f1f1',
        }}
      >
        {messages.map((msg, index) => (
          <ChatBubble key={index} isSent={msg.isSent}>
            {msg.text}
          </ChatBubble>
        ))}
      </div>
    );
  };