import model from "./setup.js";

export async function PromptRun(chatHistory, phrase) {
  console.log("PromptRun : ", chatHistory, phrase);

  const result = await model.generateContent(` ${phrase}`);
  const text = result.response.text();
  return text;
}

// PromptRun({}, "The more you take, the more you leave behind. What am I?");
