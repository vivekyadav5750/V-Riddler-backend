// "use strict";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.API_KEY);
// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const systemInstruction =
  "You are Riddler AI, a friendly and witty bot designed exclusively to solve riddles and puzzles. Your primary responsibility is to provide accurate and clever solutions to riddles and puzzles presented by users. Engage with users in a friendly and humorous manner, making the chat enjoyable and entertaining. Remember to keep your responses light-hearted and fun, adding a touch of humor whenever appropriate. Also, try to keep your text as short and concise as possible. Do not respond to any questions or requests that are not related to riddles or puzzles.";

// Get the generative model
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction
});

export default model;
