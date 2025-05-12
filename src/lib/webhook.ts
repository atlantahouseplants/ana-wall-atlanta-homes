
import { toast } from "@/hooks/use-toast";

// The Make.com webhook URL provided by the user
export const MAKE_WEBHOOK_URL = "https://hook.us1.make.com/zqorrph0t7st5lqe4md97wro9oqtnegm";

export interface WebhookPayload {
  formType: string;
  formData: Record<string, any>;
  timestamp: string;
  source: string;
}

export const sendToWebhook = async (payload: WebhookPayload): Promise<boolean> => {
  try {
    console.log("Sending data to webhook:", payload);
    
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors", // Necessary for cross-origin requests to webhook endpoints
      body: JSON.stringify(payload),
    });
    
    // Since mode is "no-cors", we won't get a proper response status
    console.log("Webhook request sent");
    return true;
  } catch (error) {
    console.error("Error sending data to webhook:", error);
    return false;
  }
};

export const handleWebhookError = () => {
  toast({
    title: "Integration Error",
    description: "Your information was saved but could not be sent to our integration system. Our team will handle this manually.",
    variant: "destructive",
  });
};
