import { GoogleGenAI, Type } from "@google/genai";
import { WorkoutPlan } from "../types.ts";

// Initializing the Google GenAI client following the specific SDK requirements
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a scientific workout plan based on user parameters.
 * Utilizes gemini-3-pro-preview for complex reasoning and structured JSON output.
 */
export const generateWorkoutPlan = async (goal: string, level: string, focus: string): Promise<WorkoutPlan> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `As an elite strength and conditioning coach at Obsession GYM, create a high-performance workout blueprint for:
      Goal: ${goal}
      Level: ${level}
      Focus: ${focus}
      
      Ensure the response is detailed, professional, and follows the required structure.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          exercises: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                sets: { type: Type.NUMBER },
                reps: { type: Type.STRING },
                description: { type: Type.STRING }
              },
              required: ["name", "sets", "reps", "description"]
            }
          },
          tips: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["title", "exercises", "tips"]
      },
      temperature: 0.8
    },
  });

  const text = response.text;
  if (!text) {
    throw new Error("The Forge failed to produce a blueprint. Please try again.");
  }

  // trim and parse the response text directly as per guidelines
  return JSON.parse(text.trim());
};