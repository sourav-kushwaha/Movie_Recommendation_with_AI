import { GoogleGenAI } from "@google/genai";
import {GEMINI_AI} from "./constants"

const ai = new GoogleGenAI({ apiKey: GEMINI_AI });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// await main();
export default ai ;