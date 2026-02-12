
import { GoogleGenAI, Type } from "@google/genai";
import { WorkoutPlan } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateWorkoutPlan = async (goal: string, level: string): Promise<WorkoutPlan> => {
  const prompt = `Generate a detailed 3-exercise workout session for someone who is a ${level} level athlete and has the goal: "${goal}". Provide specific sets, reps, and a brief description for each exercise, plus 3 professional tips.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
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
                description: { type: Type.STRING },
              },
              required: ["name", "sets", "reps", "description"],
            }
          },
          tips: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["title", "exercises", "tips"],
      }
    }
  });

  try {
    const jsonStr = response.text.trim();
    return JSON.parse(jsonStr) as WorkoutPlan;
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    throw new Error("Could not generate a valid workout plan.");
  }
};
