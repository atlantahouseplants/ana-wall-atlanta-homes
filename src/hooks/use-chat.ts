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
  const pendingMessageIds = useRef<Set<string>>(new Set());

  // Check for responses in localStorage (simple solution for webhook responses)
  const checkForResponses = useCallback(() => {
    const pendingIds = Array.from(pendingMessageIds.current);
    
    pendingIds.forEach(messageId => {
      const responseKey = `chat_response_${messageId}`;
      const storedResponse = localStorage.getItem(responseKey);
      
      if (storedResponse) {
        try {
          const responseData = JSON.parse(storedResponse);
          
          // Add AI response
          const aiMessage: ChatMessage = {
            id: `ai_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            content: responseData.message || responseData.response || "Thank you for your message. I'm here to help with your Atlanta real estate questions!",
            isUser: false,
            timestamp: new Date(),
            status: 'delivered',
          };

          setMessages(prev => [...prev, aiMessage]);
          
          // Clean up
          localStorage.removeItem(responseKey);
          pendingMessageIds.current.delete(messageId);
          
          if (pendingMessageIds.current.size === 0) {
            setIsLoading(false);
          }
        } catch (error) {
          console.error('Error parsing response:', error);
          localStorage.removeItem(responseKey);
          pendingMessageIds.current.delete(messageId);
        }
      }
    });
  }, []);

  // Poll for responses every 2 seconds when there are pending messages
  useEffect(() => {
    let interval: number | null = null;
    
    if (pendingMessageIds.current.size > 0) {
      interval = window.setInterval(checkForResponses, 2000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [checkForResponses, isLoading]);

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
      // Send to Make.com webhook with enhanced payload
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
          // Instructions for Make.com to send response back
          responseInstructions: {
            method: 'localStorage',
            key: `chat_response_${messageId}`,
            // Alternative: webhook URL if you have a backend
            // webhookUrl: `${window.location.origin}/api/chat/webhook`,
          },
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

        // Add to pending messages
        pendingMessageIds.current.add(messageId);

        // Set a timeout to handle cases where no response comes back
        setTimeout(() => {
          if (pendingMessageIds.current.has(messageId)) {
            // Add timeout message
            const timeoutMessage: ChatMessage = {
              id: `timeout_${Date.now()}`,
              content: "I'm taking a bit longer to process your request. Please feel free to ask another question or contact Ana directly at (404) 934-8516 if you need immediate assistance.",
              isUser: false,
              timestamp: new Date(),
              status: 'delivered',
            };

            setMessages(prev => [...prev, timeoutMessage]);
            pendingMessageIds.current.delete(messageId);
            setIsLoading(false);
          }
        }, 30000); // 30 second timeout

      } else {
        throw new Error('Failed to send message');
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
    pendingMessageIds.current.delete(messageId);
    
    if (pendingMessageIds.current.size === 0) {
      setIsLoading(false);
    }
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
