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
      console.log('Sending message to Make.com webhook...', content.trim());
      console.log('Message ID:', messageId);
      
      // Send to Make.com webhook with CORS mode
      const response = await fetch('https://hook.us1.make.com/cpweuqa2uji7hpytowfctwgszbsflf8t', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*',
        },
        mode: 'cors',
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
      console.log('Response headers:', [...response.headers.entries()]);
      
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
          
          console.log('Response data structure:', Object.keys(responseData));
          
          // Check for different possible response formats
          if (responseData.Body) {
            // Handle Make.com specific format (seen in screenshot)
            console.log('Found Body field in response');
            aiResponseContent = responseData.Body;
          } else if (responseData.body) {
            console.log('Found body field in response');
            aiResponseContent = responseData.body;
          } else if (responseData.message) {
            console.log('Found message field in response');
            aiResponseContent = responseData.message;
          } else if (responseData.response) {
            console.log('Found response field in response');
            aiResponseContent = responseData.response;
          } else if (responseData.content) {
            console.log('Found content field in response');
            aiResponseContent = responseData.content;
          } else if (responseData.text) {
            console.log('Found text field in response');
            aiResponseContent = responseData.text;
          } else if (typeof responseData === 'string') {
            console.log('Response is a string');
            aiResponseContent = responseData;
          } else if (Array.isArray(responseData) && responseData.length > 0) {
            // Handle array responses
            console.log('Response is an array');
            const firstItem = responseData[0];
            if (typeof firstItem === 'string') {
              aiResponseContent = firstItem;
            } else if (typeof firstItem === 'object') {
              // Try to extract content from the first object in the array
              aiResponseContent = firstItem.Body || firstItem.body ||
                                 firstItem.message || firstItem.response ||
                                 firstItem.content || firstItem.text ||
                                 JSON.stringify(firstItem);
            } else {
              aiResponseContent = JSON.stringify(responseData);
            }
          } else {
            // If none of the expected properties are found, stringify the entire object
            console.log('No recognized format found, using full response');
            aiResponseContent = JSON.stringify(responseData);
          }
          
          console.log('Final AI response content:', aiResponseContent);
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
      console.error('Error type:', typeof error);
      console.error('Error properties:', Object.keys(error));
      
      // Try to extract any response that might exist
      let errorResponseContent = null;
      
      // First, check if we have a direct response in the error object
      if (error.Body || error.body || error.message || error.response || error.content || error.text) {
        console.log('Found direct response in error object');
        errorResponseContent = error.Body || error.body || error.message ||
                              error.response || error.content || error.text;
      }
      // Then check if there's a response object
      else if (error.response) {
        try {
          console.log('Found response object in error');
          const errorText = await error.response.text();
          console.log('Error response content:', errorText);
          
          if (errorText && errorText.trim().length > 0) {
            try {
              // Try to parse as JSON
              const errorData = JSON.parse(errorText);
              console.log('Parsed error data:', errorData);
              errorResponseContent = errorData.Body || errorData.body ||
                                    errorData.message || errorData.response ||
                                    errorData.content || errorData.text ||
                                    JSON.stringify(errorData);
            } catch (parseError) {
              // Use as plain text
              console.log('Error response is not JSON, using as text');
              errorResponseContent = errorText.trim();
            }
          }
        } catch (e) {
          console.error('Failed to extract error response:', e);
        }
      }
      // Finally, try to get the error message itself
      else if (typeof error === 'string') {
        console.log('Error is a string');
        errorResponseContent = error;
      }
      else if (error.toString && typeof error.toString === 'function') {
        console.log('Using error.toString()');
        const errorString = error.toString();
        if (errorString !== '[object Object]') {
          errorResponseContent = errorString;
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
