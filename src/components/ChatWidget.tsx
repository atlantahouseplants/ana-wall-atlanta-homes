import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '@/hooks/use-chat';
import { ChatMessage } from './ChatMessage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, MessageCircle, Send } from 'lucide-react';

export const ChatWidget: React.FC = () => {
  const { messages, isLoading, isOpen, sendMessage, toggleChat, closeChat } = useChat();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const message = inputValue;
    setInputValue('');
    await sendMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col animate-in slide-in-from-bottom-2 duration-300">
          {/* Header */}
          <div className="bg-navy text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/a424100c-6f6f-4b29-876e-59201565a0d5.png"
                alt="Ana Wall"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-sm">Ana's AI Assistant</h3>
                <p className="text-xs text-rose-200">Real Estate Expert</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeChat}
              className="text-white hover:bg-navy-light p-1 h-auto"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            
            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="flex items-start space-x-2 max-w-xs lg:max-w-md">
                  <div className="flex-shrink-0">
                    <img
                      src="/lovable-uploads/a424100c-6f6f-4b29-876e-59201565a0d5.png"
                      alt="Ana Wall"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="bg-gray-100 text-gray-800 rounded-lg rounded-bl-none px-4 py-2 shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Atlanta real estate..."
                disabled={isLoading}
                className="flex-1 text-sm"
              />
              <Button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="bg-navy hover:bg-navy-light text-white px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        className="bg-rose hover:bg-rose-dark text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};
