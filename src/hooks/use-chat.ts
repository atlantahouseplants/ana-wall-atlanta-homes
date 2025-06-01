import { useState, useCallback, useEffect, useRef } from 'react';

export interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'delivered' | 'failed';
}

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Hi! I'm Ana's AI assistant. I'm here to help you with all your Atlanta real estate questions. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sessionId = useRef(`session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const messageId = `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Add user message
    const userMessage: ChatMessage = {
      id: messageId,
      content: content.trim(),
      isUser: true,
      timestamp: new Date(),
      status: 'sending',
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Send to Make.com webhook
      const response = await fetch('https://hook.us1.make.com/5dj7ksgs499clp9qa29hdoql3u6f0rvt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content.trim(),
          messageId: messageId,
          sessionId: sessionId.current,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        }),
      });

      if (response.ok) {
        // Update message status to sent
        setMessages(prev => 
          prev.map(msg => 
            msg.id === messageId 
              ? { ...msg, status: 'sent' as const }
              : msg
          )
        );

        // Get the response from Make.com
        const responseText = await response.text();
        let aiResponseContent = '';

        // Check if response is empty
        if (!responseText || responseText.trim().length === 0) {
          aiResponseContent = "I'm here to help with your Atlanta real estate questions! Could you please rephrase your question?";
        } else {
          try {
            // Try to parse as JSON first
            const responseData = JSON.parse(responseText);
            aiResponseContent = responseData.message || responseData.response || responseData.content || responseData.text || responseText;
          } catch {
            // If not JSON, use the text directly
            aiResponseContent = responseText;
          }
        }

        // Add AI response
        const aiMessage: ChatMessage = {
          id: `ai_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          content: aiResponseContent || "I'm here to help with your Atlanta real estate questions!",
          isUser: false,
          timestamp: new Date(),
          status: 'delivered',
        };

        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);

      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Chat error:', error);
      
      // Update message status to failed
      setMessages(prev => 
        prev.map(msg => 
          msg.id === messageId 
            ? { ...msg, status: 'failed' as const }
            : msg
        )
      );

      // Add error message
      const errorMessage: ChatMessage = {
        id: `error_${Date.now()}`,
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment or feel free to contact Ana directly at (404) 934-8516.",
        isUser: false,
        timestamp: new Date(),
        status: 'delivered',
      };

      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  }, []);

  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Method to manually add a response (can be called from external scripts)
  const addResponse = useCallback((messageId: string, content: string) => {
    const aiMessage: ChatMessage = {
      id: `ai_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      content: content,
      isUser: false,
      timestamp: new Date(),
      status: 'delivered',
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  }, []);

  // Expose method globally for webhook responses
  useEffect(() => {
    (window as any).addChatResponse = addResponse;
    return () => {
      delete (window as any).addChatResponse;
    };
  }, [addResponse]);

  return {
    messages,
    isLoading,
    isOpen,
    sendMessage,
    toggleChat,
    closeChat,
    addResponse,
    sessionId: sessionId.current,
  };
};
