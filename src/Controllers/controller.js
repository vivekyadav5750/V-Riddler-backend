import { PromptRun } from "../Gemini/prompt.js";
export class Controller {
  postAPI = async (req, res) => {
    const { chatHistory,phrase } = req.body;
    console.log("phrase : ", phrase);
    const data = await PromptRun( chatHistory, phrase);

    res.send(data);
  };
}
