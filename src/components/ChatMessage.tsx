import React from 'react';
import { ChatMessage as ChatMessageType } from '@/hooks/use-chat';

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (message.isUser) {
    return (
      <div className="flex justify-end mb-4">
        <div className="max-w-xs lg:max-w-md">
          <div className="bg-navy text-white rounded-lg rounded-br-none px-4 py-2 shadow-sm">
            <p className="text-sm">{message.content}</p>
          </div>
          <div className="text-xs text-gray-500 mt-1 text-right">
            {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-4">
      <div className="flex items-start space-x-2 max-w-xs lg:max-w-md">
        <div className="flex-shrink-0">
          <img
            src="/images/a424100c-6f6f-4b29-876e-59201565a0d5.png"
            alt="Ana Wall"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
        <div>
          <div className="bg-gray-100 text-gray-800 rounded-lg rounded-bl-none px-4 py-2 shadow-sm">
            <p className="text-sm">{message.content}</p>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Ana • {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
};
