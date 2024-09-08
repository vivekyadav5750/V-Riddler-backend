import { PromptRun } from "../Gemini/prompt.js";

async function getDataWithTimeout(chatHistory, phrase, timeout = 10000) {
    const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), timeout)
    );

    try {
        const data = await Promise.race([PromptRun(chatHistory, phrase), timeoutPromise]);
        return data;
    } catch (error) {
        if (error.message === 'Timeout') {
            // Handle timeout case
            console.error('Request timed out');
            return "Request timed out";
        } else {
            // Handle other errors
            throw error;
        }
    }
}

export class Controller {
  postAPI = async (req, res) => {
    const { chatHistory, phrase } = req.body;
    // wait for 20sec to get the response , otherwise return timeout
    try {
        const data = await getDataWithTimeout(chatHistory, phrase);
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
  };
}