// Simple in-memory storage for chat responses
// In production, you'd use a proper database
interface StoredResponse {
  messageId: string;
  sessionId: string;
  response: string;
  timestamp: number;
}

class ChatResponseStore {
  private responses: Map<string, StoredResponse> = new Map();
  private readonly CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 minutes
  private readonly MAX_AGE = 30 * 60 * 1000; // 30 minutes

  constructor() {
    // Clean up old responses periodically
    setInterval(() => {
      this.cleanup();
    }, this.CLEANUP_INTERVAL);
  }

  storeResponse(messageId: string, sessionId: string, response: string) {
    this.responses.set(messageId, {
      messageId,
      sessionId,
      response,
      timestamp: Date.now(),
    });
  }

  getResponses(sessionId: string, messageIds: string[]): StoredResponse[] {
    const results: StoredResponse[] = [];
    
    for (const messageId of messageIds) {
      const stored = this.responses.get(messageId);
      if (stored && stored.sessionId === sessionId) {
        results.push(stored);
        // Remove after retrieving to prevent duplicates
        this.responses.delete(messageId);
      }
    }
    
    return results;
  }

  private cleanup() {
    const now = Date.now();
    for (const [messageId, response] of this.responses.entries()) {
      if (now - response.timestamp > this.MAX_AGE) {
        this.responses.delete(messageId);
      }
    }
  }
}

export const chatStore = new ChatResponseStore();

// API handlers
export const handleWebhookResponse = async (request: Request): Promise<Response> => {
  try {
    const data = await request.json();
    const { messageId, sessionId, response, message } = data;

    if (!messageId || !sessionId || (!response && !message)) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Store the response
    chatStore.storeResponse(messageId, sessionId, response || message);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const handleGetResponses = async (request: Request): Promise<Response> => {
  try {
    const data = await request.json();
    const { sessionId, pendingMessages } = data;

    if (!sessionId || !Array.isArray(pendingMessages)) {
      return new Response(JSON.stringify({ error: 'Invalid request' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const responses = chatStore.getResponses(sessionId, pendingMessages);

    return new Response(JSON.stringify({ responses }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Get responses error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
