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
      console.log('Sending message to Make.com webhook...');
      
      // Send to Make.com webhook
      const response = await fetch('https://hook.us1.make.com/cpweuqa2uji7hpytowfctwgszbsflf8t', {
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

      console.log('Response received from Make.com:', response);
      console.log('Response status:', response.status);
      
      // Update message status to sent regardless of response status
      setMessages(prev =>
        prev.map(msg =>
          msg.id === messageId
            ? { ...msg, status: 'sent' as const }
            : msg
        )
      );

      // Get the response from Make.com
      let responseText;
      try {
        responseText = await response.text();
        console.log('Response text from Make.com:', responseText);
      } catch (textError) {
        console.error('Error getting response text:', textError);
        responseText = '';
      }
      
      let aiResponseContent = '';

      // Check if response is empty
      if (!responseText || responseText.trim().length === 0) {
        aiResponseContent = "I'm here to help with your Atlanta real estate questions! Could you please rephrase your question?";
      } else {
        try {
          // Try to parse as JSON first
          let responseData;
          try {
            responseData = JSON.parse(responseText);
            console.log('Parsed JSON response:', responseData);
          } catch (parseError) {
            console.log('Response is not valid JSON, using as plain text:', responseText);
            aiResponseContent = responseText.trim();
            // Skip the rest of the JSON processing
            throw new Error('Not JSON');
          }
          
          // Check for different possible response formats
          if (responseData.message) {
            aiResponseContent = responseData.message;
          } else if (responseData.response) {
            aiResponseContent = responseData.response;
          } else if (responseData.content) {
            aiResponseContent = responseData.content;
          } else if (responseData.text) {
            aiResponseContent = responseData.text;
          } else if (typeof responseData === 'string') {
            aiResponseContent = responseData;
          } else if (Array.isArray(responseData) && responseData.length > 0) {
            // Handle array responses
            const firstItem = responseData[0];
            if (typeof firstItem === 'string') {
              aiResponseContent = firstItem;
            } else if (typeof firstItem === 'object') {
              // Try to extract content from the first object in the array
              aiResponseContent = firstItem.message || firstItem.response ||
                                 firstItem.content || firstItem.text ||
                                 JSON.stringify(firstItem);
            } else {
              aiResponseContent = JSON.stringify(responseData);
            }
          } else {
            // If none of the expected properties are found, stringify the entire object
            aiResponseContent = JSON.stringify(responseData);
          }
        } catch (error) {
          if (error.message !== 'Not JSON') {
            console.log('Error processing response:', error);
            // If not already set as plain text, use the text directly
            if (!aiResponseContent) {
              aiResponseContent = responseText.trim();
            }
          }
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
    } catch (error) {
      console.error('Chat error:', error);
      
      // Try to extract any response that might exist
      let errorResponseContent = null;
      
      if (error.response) {
        try {
          const errorText = await error.response.text();
          console.log('Error response content:', errorText);
          
          if (errorText && errorText.trim().length > 0) {
            try {
              // Try to parse as JSON
              const errorData = JSON.parse(errorText);
              errorResponseContent = errorData.message || errorData.response ||
                                    errorData.content || errorData.text ||
                                    JSON.stringify(errorData);
            } catch (parseError) {
              // Use as plain text
              errorResponseContent = errorText.trim();
            }
          }
        } catch (e) {
          console.error('Failed to extract error response:', e);
        }
      }
      
      // Update message status to failed
      setMessages(prev =>
        prev.map(msg =>
          msg.id === messageId
            ? { ...msg, status: 'failed' as const }
            : msg
        )
      );

      // If we have error content, use it instead of the generic error message
      if (errorResponseContent) {
        const aiMessage: ChatMessage = {
          id: `ai_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          content: errorResponseContent,
          isUser: false,
          timestamp: new Date(),
          status: 'delivered',
        };
        
        setMessages(prev => [...prev, aiMessage]);
      } else {
        // Add generic error message
        const errorMessage: ChatMessage = {
          id: `error_${Date.now()}`,
          content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment or feel free to contact us via email at ana@atlantahouseplants.com.",
          isUser: false,
          timestamp: new Date(),
          status: 'delivered',
        };
        
        setMessages(prev => [...prev, errorMessage]);
      }
      
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
