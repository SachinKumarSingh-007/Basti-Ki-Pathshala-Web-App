
import { GoogleGenAI } from "@google/genai";

const defaultThankYouMessage = (name: string) => `
Dear ${name},

Thank you so much for your interest in joining Basti Ki Pathshala! Your application to become a volunteer/intern has been received.

Our team will review your application carefully and will get in touch with you soon regarding the next steps. We are thrilled at the prospect of you joining our mission to empower children through education.

Warmly,
The Basti Ki Pathshala Team
`;

export const generateThankYouMessage = async (name: string): Promise<string> => {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.warn("Gemini API key not found. Using default thank you message.");
    return Promise.resolve(defaultThankYouMessage(name));
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `You are a friendly and encouraging representative for "Basti Ki Pathshala", an NGO that provides education to underprivileged children. A person named ${name} has just submitted a volunteer/intern application. Write a short, warm, and inspiring thank you message (2-4 sentences) for them. Acknowledge their application and mention that the team will review it and get in touch soon.`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          temperature: 0.7,
          topP: 1,
          topK: 1
        }
    });

    const text = response.text;

    if (text) {
      return text;
    } else {
        return defaultThankYouMessage(name);
    }

  } catch (error) {
    console.error("Error generating message with Gemini API:", error);
    return defaultThankYouMessage(name);
  }
};
